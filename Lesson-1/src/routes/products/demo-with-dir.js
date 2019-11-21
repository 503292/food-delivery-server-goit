const fs = require("fs");

const newDirectoryPath = "../../routes";
const newDirectoryPath2 = "../../dbTEMP/1/2/3";

// create DIR
// recursive => create folders one after another

// fs.mkdir(newDirectoryPath2, { recursive: true }, err => {
//   console.log("create DIR");
// });

// read DIR
const file = fs.readdirSync(__dirname);
console.log(file, "DIR is read");
