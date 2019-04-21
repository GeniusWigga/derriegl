const gulp = require("gulp");
const argv = require("minimist")(process.argv);
const rsync = require("gulp-rsync");

gulp.task("deploy", () => {

  const rsyncPaths = ["dist"];
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

  return gulp.src(rsyncPaths)
             .pipe(rsync(rsyncConf));

});
