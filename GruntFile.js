const config = require("./config.js");

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-aws-s3");

  grunt.initConfig({
    aws_s3: {
      options: {
        region: "us-west-1",
        accessKeyId: config.AWSAccessKeyId,
        secretAccessKey: config.AWSSecretKey,
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      production: {
        options: {
          bucket: "fmdbkatie",
          build: {
            cwd: "/dist",
            src: "/index.html",
            dest: "app"
          }
        }
        // files: [{ expand: true, cwd: "dist", src: ["**"], dest: "app" }]
      }
    }
  });
};
