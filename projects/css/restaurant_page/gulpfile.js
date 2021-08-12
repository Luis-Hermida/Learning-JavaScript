"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  del = require("del"),
  imagemin = require("gulp-imagemin"),
  uglify = require("gulp-uglify"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  cleanCss = require("gulp-clean-css"),
  flatmap = require("gulp-flatmap"),
  htmlmin = require("gulp-htmlmin"),
  removeHtmlComments = require("gulp-remove-html-comments");

gulp.task("sass", function() {
  return gulp
    .src("./resources/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./resources/css/*.scss", ["sass"]);
});

gulp.task("browser-sync", function() {
  var files = [
    "./*.html",
    "./resources/css/*.css",
    "./resources/img/*.{png,jpg,gif}",
    "./resources/js/*.js"
  ];

  browserSync.init(files, {
    server: {
      baseDir: "./"
    }
  });
});

// Clean
gulp.task("clean", async function() {
  return del(["dist"]);
});

gulp.task("copyfonts", async function() {
  gulp
    .src("./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*")
    .pipe(gulp.dest("./dist/fonts"));
});

// Images
gulp.task("imagemin", async function() {
  return gulp
    .src("resources/img/*.{png,jpg,gif}")
    .pipe(
      imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
    )
    .pipe(gulp.dest("dist/img"));
});

// Remove comments
// gulp.task("htmlcomment", async function() {
//   return gulp
//     .src("./*.html")
//     .pipe(removeHtmlComments())
//     .pipe(gulp.dest("dist"));
// });

// Minify
gulp.task("usemin", async function() {
  return gulp
    .src("./*.html")
    .pipe(removeHtmlComments())
    .pipe(
      flatmap(function(stream, file) {
        return stream.pipe(
          usemin({
            css: [rev()],
            html: [
              function() {
                return htmlmin({ collapseWhitespace: true });
              }
            ],
            js: [uglify(), rev()],
            inlinejs: [uglify()],
            inlinecss: [cleanCss(), "concat"]
          })
        );
      })
    )
    .pipe(gulp.dest("dist/"));
});

gulp.task(
  "build",
  gulp.series("clean", "copyfonts", "imagemin", "usemin"),
  async function() {
    gulp.start("copyfonts", "imagemin", "usemin");
  }
);

// Default task
gulp.task("default", gulp.series("browser-sync"), function() {
  gulp.start("sass:watch");
});
