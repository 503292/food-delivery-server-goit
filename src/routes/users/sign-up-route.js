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
    `${username.username}.json`
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
      console.log(body, "body");
      saveUser(body);

      response.setHeader("Content-Type", "application/json");
      response.end(body);
    });

    request.on("end", function() {
      const post = qs.parse(body);

      console.log(post, "post");
    });
  }
  // else {
  //   response.writeHead(200, "OK", { "Content-Type": "text/plain" });
  //   response.end();
  // }

  // Взять username с данных, сохранить в переменную

  // Сохраняем данные в <username>.json

  // Сохранить <username>.json в папку users

  // Отправляем файл в ответе с данными юзера
  // использовать response
};

module.exports = signUpRoute;
