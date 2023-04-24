const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

//Administrators
const getAdministrators = (user, password) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM administrators WHERE username = $1 AND password = $2 LIMIT 1",
      [user, password],
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
  insertPresidents,
  deletePresidents,
  getAdministrators,
};
