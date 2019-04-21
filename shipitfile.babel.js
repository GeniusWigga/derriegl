export default shipit => {
  shipit.initConfig({
    default: {
      servers: "derriegl.de@ssh.strato.de",
      repositoryUrl: "https://github.com/GeniusWigga/derriegl.git",
      branch: "master",
      workspace: "/production"
    },
    staging: {
      workspace: "/staging"
    },
  })
}
