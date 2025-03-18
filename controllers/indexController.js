const path = require('path');

exports.indexGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send('Hello World!');
};

exports.newGet = (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'newForm.html'));
};

exports.newPost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/");
}