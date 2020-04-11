const gulp = require("gulp");
const argv = require("minimist")(process.argv);
const rsync = require("gulp-rsync");
const exec = require("child_process").exec;
const responsive = require("gulp-responsive");

const watch = gulp.watch;
const series = gulp.series;

const sizes = {
  small: 600,
  medium: 1000,
  large: 1900,
};

const createFormatOption = (size, extname, option = {}) => ({
  width: size,
  rename: {
    suffix: `-${size}px`,
    extname,
  },
  ...option,
});

const formatOptions = [
  createFormatOption(sizes.small, ".png"),
  createFormatOption(sizes.medium, ".png"),
  createFormatOption(sizes.large, ".png", { withoutEnlargement: true }),
  createFormatOption(sizes.small, ".webp"),
  createFormatOption(sizes.medium, ".webp"),
  createFormatOption(sizes.large, ".webp"),
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
