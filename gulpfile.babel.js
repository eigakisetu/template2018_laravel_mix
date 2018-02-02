'use strict';

const gulp = require("gulp");
const runSequence = require("run-sequence");

global.watch = [];
global.build = [];

global.src = "./";
global.dest = "./public/";
global.minifyOption = {
	"pug": true
};

require("./pug.js");

gulp.task("watch", global.watch);

gulp.task("prod", () => {
	runSequence.apply(this, global.build)
});

gulp.task("default", ["watch"]);
