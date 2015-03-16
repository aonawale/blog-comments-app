// Karma configuration
// Generated on Thu Mar 12 2015 15:34:05 GMT+0100 (WAT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ('test'),


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'assets/vendor/angular/angular.js',
        'assets/vendor/angular-animate/angular-animate.js',
        'assets/vendor/angular-aria/angular-aria.js',
        'assets/vendor/angular-material/angular-material.js',
        'assets/vendor/angular-mocks/angular-mocks.js',
        'app/app.js',
        'app/comments/module/commentsModule.js',
        'app/comments/controllers/commentsController.js',
        'app/comments/services/commentService.js',
        'app/comments/directives/commentList.js',
        'app/post/directives/blogPost.js',
        'app/form/directives/commentForm.js',
        'tests/unit/test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};