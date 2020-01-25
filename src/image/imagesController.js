const fs = require("fs");
const path = require("path");
const debug = require("debug")("controller");
const formidable = require("formidable");

const pathToUploads = path.join(__dirname, "../uploads");


addPhoto = (req, res, next) => {
  try {
    const body = {};
    const form = new formidable.IncomingForm();
    form.uploadDir = pathToUploads;
    console.log(pathToUploads, "pathToUploads");
    return form
      .parse(req)
      .on("field", (name, value) => {
        body[name] = value;
        // console.log(body, "body");
      })
      .on("file", (name, file) => {
        if (name === "photo") {
          body["photo_url"] = file.path;
          console.log(file, "file.path");
        }
      })
      .on("end", () => {
        req.body = body;
        // console.log(body, "body.file.path");
        next();
      })
      .on("aborted", () => next(new Error("Aborted")))
      .on("error", next);
  } catch (err) {
    next(err);
  }
};

module.exports = addPhoto;
