require("dotenv").config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//Administrators
const getAdministrators = (user, password) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM administrators WHERE username = $1 AND password = $2 LIMIT 1",
      [user, password],
      (error, results) => {
        if (error) {
          console.error('Error in getAdministrators query:', error);
          console.error('Query parameters:', [user, password]);
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
      "SELECT code, id, location, totalvotes, votes FROM ballotboxes",
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
  const queryPromises = presidents.map((president) => {
    const { code, id, user, password } = president;
    return pool.query(
      "INSERT INTO presidents (code, id, username, password) VALUES ($1, $2, $3, $4)",
      [code, id, user, password]
    );
  });

  try {
    await Promise.all(queryPromises);
    console.log("All presidents inserted");
  } catch (error) {
    console.error("Error inserting presidents:", error);
  }
};

const deletePresidents = (code) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM presidents WHERE code = $1",
      [code],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve("Presidents deleted successfully");
        }
      }
    );
  });
};

module.exports = {
  getAdministrators,
  getBallotBoxes,
  resetVotes,
  insertPresidents,
  deletePresidents,
};
