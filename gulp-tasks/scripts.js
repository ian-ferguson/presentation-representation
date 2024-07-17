const { src, dest, watch } = require("gulp");
const concat = require("gulp-concat");
function scriptConcat() {
  return src("./src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("./dist/js/"));
}
exports.scriptConcat = scriptConcat;