var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('docs', function() {
  // gulp.src('docs/*.md')
  //   .pipe(pandoc({
  //     from: 'markdown',
  //     to: 'html5',
  //     ext: '.html',
  //     args: ['--smart']
  //   }))
  //   .pipe(gulp.dest('public/'));

  gulp.src('docs/*.md')
    .pipe(pandoc({
      from: 'markdown',
      to: 'docx',
      ext: '.docx',
    }))
    .pipe(gulp.dest('public/'));

  // gulp.src('docs/*.md')
  //   .pipe(pandoc({
  //     from: 'markdown',
  //     to: 'pdf',
  //     ext: '.pdf',
  //     args: ['--smart']
  //   }))
  //   .pipe(gulp.dest('public/'));
});

gulp.task('compressImages', function() {
  return gulp.src('img/*')
         .pipe(imagemin({
             progressive: true,
             svgoPlugins: [{removeViewBox: false}],
             use: [pngquant()]
         }))
         .pipe(gulp.dest('public/img'));
});

gulp.task('default', ['compressImages', 'docs']);
