var gulp = require('gulp')

gulp.task("before", function(){
    return gulp.src('./.travis/copy/**/*.*')
        .pipe(gulp.dest('./'));
})

gulp.task("after", function(){
    return gulp.src('./public/**/*.*')
        .pipe(gulp.dest('./ydn2856_public/'));
})