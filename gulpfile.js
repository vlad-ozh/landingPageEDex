const { src, dest, watch, parallel, series } = require('gulp');

const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const del          = require('del');

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: 'src/'
    }
  });
}

const scripts = () => {
  return src([
    './node_modules/swiper/swiper-bundle.min.js',
    './node_modules/aos/dist/aos.js',
    './src/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js'))
    .pipe(browserSync.stream());
}

const styles = () => {
  return src([
    './node_modules/swiper/swiper-bundle.min.css',
    './node_modules/aos/src/sass/aos.scss',
    './src/scss/*.scss'
  ])
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 10 version'],
          grid: true,
        }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream());
}

const images = () => {
  return src('src/images/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest('build/images'))
}

const cleanBuild = () => {
  return del('build')
}

const build = () => {
  return src([
    'src/css/style.min.css',
    'src/fonts/**/*',
    'src/js/main.min.js',
    'src/*.html'
  ], {base: 'src'})
    .pipe(dest('build'))
}

const watching = () => {
  watch(['src/scss/**/*.scss'], styles);
  watch(['src/js/**/*.js', '!src/js/main.min.js'], scripts);
  watch(['src/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanBuild = cleanBuild;

exports.build = series(cleanBuild, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);