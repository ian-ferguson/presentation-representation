const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
function css() {
  return src("./src/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/styles/"));
}
exports.css = css;
