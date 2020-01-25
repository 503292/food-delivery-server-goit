const formidable = require("formidable");
const path = require("path");

const pathToUploads = path.join(__dirname, "../uploads");


class FormDataMiddleware {
  constructor() {}

  parse(req, res, next) {
    try {
      const body = {};
      const form = new formidable.IncomingForm();
      form.uploadDir = pathToUploads;

      return form
        .parse(req)
        .on("field", (name, value) => {
          body[name] = value;
        })
        .on("file", (name, file) => {
          if (name === "photo") {
            body["photo_url"] = file.path;
          }
        })
        .on("end", () => {
          req.body = body;
          next();
        })
        .on("aborted", () => next(new Error("Aborted")))
        .on("error", next);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new FormDataMiddleware();
