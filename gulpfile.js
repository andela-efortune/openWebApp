const gulp = require('gulp');
const zip = require('gulp-zip');

const THIS_APP_NAME = 'openWebApp';

const sources = ['manifest.webapp', '**/*.html', '**/*.js', '**/*.css', '**/*.png',
    '**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2',
    '!node_modules', '!node_modules/**', '!gulpfile.js'];

gulp.task('default', () => {
  return gulp.src(sources)
    .pipe(zip(THIS_APP_NAME + '.zip'))
    .pipe(gulp.dest('dist'));
});
