'use strict';
var gulp        = require('gulp');
var ngAnnotate  = require('gulp-ng-annotate');
var sass        = require('gulp-sass');
var express     = require('express');
var ignore      = require('gulp-ignore');
var autoprefix  = require('gulp-autoprefixer');
var exec        = require('child_process').exec;
var del         = require('del');

gulp.task('compile-scss', function () {
    return gulp.src(['src/**/*.scss'])
        .pipe(sass().on('error', console.log))
        .pipe(ignore.exclude(function (file) {
            return file.path.match(/\.css\.map$/);
        }))
        .pipe(autoprefix({
            browsers: [
                '> 5%',
                'Explorer 11',
                'Firefox >= 30',
                'Chrome >= 34',
                'Safari >= 5.1',
                'Opera >= 22',
                'Android >= 4.1'
            ]
        }))
        .pipe(gulp.dest('src'))
        .pipe(gulp.dest('dist'))
        .on('error', console.log);
});

gulp.task('clean-dist', function (done) {
    del(['dist/*'])
        .then(function () {
            done();
        })
        .catch(function (error) {
            console.log('There is an error!!!', error);
            done(error);
        });
});
gulp.task('copy-static-assets', ['compile-scss', 'bundle-js'], function () {

    gulp.src('./src/jspm_packages/system.js')
        .pipe(gulp.dest('./dist/jspm_packages/'));

    gulp.src('./src/config.js')
        .pipe(gulp.dest('./dist/'));

    gulp.src([
        './src/index.html',
        './src/favicon.png',
        './src/index.css',
        './src/build.js',
        './src/build.js.map'
    ]).pipe(gulp.dest('./dist'));

});

gulp.task('serve', function (reportTaskDone) {
	    var app = express();

        app.use(express.static('./src/'));

        // Return index.html on 404, so the angular clientside router can handle routes
        app.use(function (req, res) {
            res.sendFile('./src/index.html', {
                root: process.cwd()
            });
        });

		var serverPort = 4321;
        var server = app.listen(serverPort, function() {
            var port = server.address().port;

            console.log('\n=======================\nWeb server is listening at http://localhost:' + port + '/\n=======================\n');
            reportTaskDone();
        });
});
gulp.task('serve-dist', function (reportTaskDone) {
    var app = express();

    app.use(express.static('./dist/'));

    // Return index.html on 404, so the angular clientside router can handle routes
    app.use(function (req, res) {
        res.sendFile('./dist/index.html', {
            root: process.cwd()
        });
    });

    var serverPort = 4567;
    var server = app.listen(serverPort, function() {
        var port = server.address().port;

        console.log('\n=======================\nWeb server is listening at http://localhost:' + port + '/\n=======================\n');
        reportTaskDone();
    });
});

gulp.task('bundle-js', function (reportTaskDone) {

    var child = exec("node ./node_modules/jspm/cli.js bundle app/Entry --inject");

    child.stdout.on('data', function (data) {
        console.log(data);
    });
    child.stderr.on('data', function (data) {
        console.log(data);
    });

    child.on('exit', function () {
        reportTaskDone();
    });
    child.on('error', function (error) {
        reportTaskDone(error);
    });
});
gulp.task('unbundle-js', ['copy-static-assets'], function (reportTaskDone) {

    var child = exec("npm run unbundle");

    child.stdout.on('data', function (data) {
        console.log(data);
    });
    child.stderr.on('data', function (data) {
        console.log(data);
    });

    child.on('exit', function () {
        reportTaskDone();
    });
    child.on('error', function (error) {
        reportTaskDone(error);
    });
});


gulp.task('dist', ['unbundle-js'], function () {
    //return gulp.src('dist/*.js')
    //    .pipe(ngAnnotate())
    //    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['compile-scss', 'serve'], function () {
    gulp.watch('./src/**/*.scss', ['compile-scss']);
});

module.export = gulp;
