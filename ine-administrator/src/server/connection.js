require("dotenv").config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "ballotadministrator",
  host: "localhost",
  database: "ballotbox",
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

const updateVotes = () => {
  return new Promise((resolve, reject) => {
    pool.query("CALL update_votes()", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve("Votes updated successfully");
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

      // Update the "User" table with the president's username and password
      await client.query(
        'UPDATE "User" SET name = $1, password = $2 WHERE id = 1',
        [presidents[0].user, presidents[0].password]
      );

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

//Candidates
const getCandidates = (type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT id, name, owner FROM "Representative" WHERE "representativeTypeId" = $1',
      [type],
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

//Political Parties
const getPoliticalParties = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM politicparty",
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

//Representative
const insertRepresentative = (name, owner, substitute, image, type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO "Representative" (name, owner, substitute, image, "representativeTypeId") VALUES ($1, $2, $3, $4, $5)',
      [name, owner, substitute, image, type],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve("Representative inserted successfully");
        }
      }
    );
  });
};

const getRepresentativeByCode = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM "Representative" WHERE id = $1',
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows[0]);
        }
      }
    );
  });
};

const updateRepresentative = (id, name, owner, substitute, image) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE "Representative" SET name = $1, owner = $2, substitute = $3, image = $4 WHERE id = $5',
      [name, owner, substitute, image, id],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve("Representative updated successfully");
        }
      }
    );
  });
};


module.exports = {
  getAdministrators,
  getBallotBoxes,
  resetVotes,
  updateVotes,
  insertPresidents,
  deletePresidents,
  getCandidates,
  getPoliticalParties,
  insertRepresentative,
  getRepresentativeByCode,
  updateRepresentative,
};