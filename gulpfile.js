const {src, dest, parallel, watch} = require('gulp');

// Pull in each task
const sass = require('./gulp-tasks/sass.js');
const scripts = require('./gulp-tasks/scripts.js');
// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch('./src/styles/*.scss', sass.css);
  watch('./src/js/*.js', scripts.scriptConcat);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(sass.css, scripts.scriptConcat);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;