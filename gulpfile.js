const gulp = require("gulp");
const argv = require("minimist")(process.argv);
const rsync = require("gulp-rsync");
const exec = require("child_process").exec;
const responsive = require("gulp-responsive");

const watch = gulp.watch;
const series = gulp.series;

const formatOptions = [
  {
    width: 600,
    rename: {
      suffix: "-600px",
      extname: ".png",
    },
  },
  {
    width: 1000,
    rename: {
      suffix: "-1000px",
      extname: ".png",
    },
  },
  {
    width: 1900,
    rename: {
      suffix: "-1900px",
      extname: ".png",
    },
    // Do not enlarge the output image if the input image are already less than the required dimensions.
    withoutEnlargement: true,
  },
  {
    // Convert images to the webp format
    width: 600,
    rename: {
      suffix: "-600px",
      extname: ".webp",
    },
  },
  {
    // Convert images to the webp format
    width: 1000,
    rename: {
      suffix: "-1000px",
      extname: ".webp",
    },
  },
  {
    width: 1900,
    rename: {
      suffix: "-1900px",
      extname: ".webp",
    },
  },
];

gulp.task("resize-images", function() {
  return gulp
    .src("images/**/*.{png,jpg}")
    .pipe(
      responsive(
        {
          "**/*.png": formatOptions,
          "**/*.jpg": formatOptions,
        },
        {
          quality: 80,
          progressive: true,
          withMetadata: false,
          errorOnEnlargement: false,
        },
      ),
    )
    .pipe(gulp.dest("public/img"));
});

gulp.task("deploy", () => {
  const rsyncConf = {
    progress: true,
    incremental: true,
    relative: true,
    emptyDirectories: true,
    hostname: "ssh.strato.de",
    username: "derriegl.de",
    archive: true,
    silent: false,
    compress: true,
    recursive: true,
    clean: true,
    exclude: [],
  };

  if (argv.staging) {
    rsyncConf.destination = "staging";
  } else {
    rsyncConf.destination = "production";
  }

  return gulp.src(["dist"]).pipe(rsync(rsyncConf));
});

function build(cb) {
  return exec("npm run start", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

exports.default = function() {
  watch("src", series(build));
};
