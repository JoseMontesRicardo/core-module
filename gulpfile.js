/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
gulp.task('default', ['change-project','transpiler-project']);

gulp.task('transpiler-project', () => {
    gulp.src('src/**/*.js')
            .pipe(babel({
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }))

            .pipe(gulp.dest('./dist'));
});

gulp.task('change-project', () => {
    gulp.watch('src/**/*.js', ['transpiler-project']);

});