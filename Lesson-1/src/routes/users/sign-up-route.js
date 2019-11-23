const qs = require("querystring");
const path = require("path");
const fs = require("fs");

const saveUser = user => {
  username = JSON.parse(user);
  const pathToFile = path.join(
    __dirname,
    "../../",
    "db",
    "users",
    `${username.username.toLowerCase()}.json`
  );

  fs.writeFile(pathToFile, user, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
};

const signUpRoute = (request, response) => {
  if (request.method === "POST") {
    let body = "";

    request.on("data", function(data) {
      body = body + data;
      saveUser(body);

      response.setHeader("Content-Type", "application/json");

      let answerBody = {
        status: "success",
        user: JSON.parse(body)
      };

      let strigifyBody = JSON.stringify(answerBody);

      response.end(strigifyBody);
    });
  }
};

module.exports = signUpRoute;
