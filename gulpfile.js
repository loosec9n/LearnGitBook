const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");

const $ = gulpLoadPlugins();

gulp.task("publish", () => {
  console.log("Hello, Gulp!");
  return gulp.src("./_book/**/*").pipe(
    $.ghPages({
      origin: "origin",
      branch: "gh-pages",
    })
  );
});
