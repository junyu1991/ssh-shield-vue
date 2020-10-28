module.exports = {
    publicPath: "./", //设置成相对路径，这样所有的资源都会被链接为相对路径，打包出来的包可以被部署在任意路径
    outputDir: "ssh", //打包时生成的生产环境构建文件目录，默认是dist
    assetsDir: "public" //存放生成的静态资源(js,css, img,fonts)的（相对于outputDir的）目录
}