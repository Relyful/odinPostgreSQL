const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsernames(searchQ) {
  const result = await pool.query("SELECT * FROM usernames WHERE username ILIKE $1", [`${searchQ.trim()}%`]);
  return result.rows;
}

async function deleteAll() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsernames,
  deleteAll
};
