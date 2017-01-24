const gulp = require('gulp');
const zip = require('gulp-zip');

const LOCAL_OWA_FOLDER = '../openmrs/openmrs-server/owa/';
const THIS_APP_NAME = 'openWebApp';

const sources = ['manifest.webapp', '**/*.html', '**/*.js', '**/*.css', '**/*.png',
    '**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2',
    '!node_modules', '!node_modules/**', '!gulpfile.js'];

gulp.task('default', () => {
  return gulp.src(sources)
    .pipe(zip(THIS_APP_NAME + '.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy-local', () => {
  return gulp.src(sources)
    .pipe(gulp.dest(LOCAL_OWA_FOLDER + THIS_APP_NAME));
});
