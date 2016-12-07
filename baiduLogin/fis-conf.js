//合成雪碧图
fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});
// 添加md5
fis.match('*.[js,css,png]', {
    useHash: true
});
// 压缩
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});
// 压缩
fis.match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});
// 压缩
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});
// 合并js
fis.match('/js/*.js', {
    packTo: '/static/widget_pkg.js'
});
// html压缩
fis.match('*.html', {
    optimizer: fis.plugin('htmlmin')
});
// html min
// fis.config.merge({
//     modules: {
//         optimizer: {
//             html: "htmlmin"
//         }
//     },
//     settings: {
//         optimizer: {
//             "htmlmin": {
//                 removeComments: true,
//                 collapseWhitespace: true,
//                 minifyJS: true
//             }
//         }
//     }
// });

