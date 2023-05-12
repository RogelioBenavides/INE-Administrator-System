require("dotenv").config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "administrator",
  host: "localhost",
  database: "ineadministrator",
  password: "123",
  port: "5432",
});

//Administrators
const getAdministrators = (user, password) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM administrators WHERE username = $1 AND password = $2 LIMIT 1",
      [user, password],
      (error, results) => {
        if (error) {
          console.error("Error in getAdministrators query:", error);
          console.error("Query parameters:", [user, password]);
          reject(error);
        } else {
          resolve(results.rows);
        }
      }
    );
  });
};

//Ballot Boxes
const getBallotBoxes = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT code, id, totalvotes, votes FROM ballotboxes",
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      }
    );
  });
};

const resetVotes = () => {
  return new Promise((resolve, reject) => {
    pool.query("CALL reset_votes()", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve("Votes reset successfully");
      }
    });
  });
};

//Presidents
const insertPresidents = async (presidents) => {
  try {
    // Get a single client from the pool
    const client = await pool.connect();

    try {
      // Start a transaction
      await client.query("BEGIN");

      // Insert each president using the same client
      for (const president of presidents) {
        await client.query(
          "INSERT INTO ballotboxes (code, id, totalvotes, votes, president, password) VALUES ($1, $2, $3, $4, $5, $6)",
          [president.code, president.id, 750, 0, president.user, president.password]
        );
      }

      // Commit the transaction
      await client.query("COMMIT");
    } catch (error) {
      // Rollback the transaction in case of errors
      await client.query("ROLLBACK");
      console.error("Error inserting presidents:", error);
    } finally {
      // Release the client back to the pool
      client.release();
    }
  } catch (error) {
    console.error("Error acquiring client:", error);
  }
};

const deletePresidents = (code) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM ballotboxes WHERE code = $1",
      [code],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve("Ballot Boxes deleted successfully");
        }
      }
    );
  });
};

// Candidacy
const insertCandidacy = (name, date) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "INSERT INTO candidacies (name, date) VALUES ($1, $2)",
      [name, date],
      (error, results) => {
        if (error) {
          console.error("Error in insertCandidacy query:", error);
          console.error("Query parameters:", [name, date]);
          reject(error);
        } else {
          resolve("Candidacy created successfully");
        }
      }
    );
  });
};

const getCandidacies = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM candidacies", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};



module.exports = {
  getAdministrators,
  getBallotBoxes,
  resetVotes,
  insertPresidents,
  deletePresidents,
  insertCandidacy,
  getCandidacies,
};
