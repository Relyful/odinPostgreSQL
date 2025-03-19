const path = require('path');
const db = require("../db/queries");

exports.indexGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
};

exports.newGet = (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'newForm.html'));
};

exports.newPost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}