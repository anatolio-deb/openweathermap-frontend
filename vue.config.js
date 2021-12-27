module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true
      }
    },
    // https:{
    //     //minVersion: 'TLSv1.1',
    //   key: './server.key',
    //     //pfx: fs.readFileSync(path.join(__dirname, './server.pfx')),
    //   cert: './server.crt',
    //     //ca: fs.readFileSync(path.join(__dirname, './ca.pem')),
    //     //passphrase: 'webpack-dev-server',
    //     //requestCert: true,
    // },
    // headers: {
    //   'Access-Control-Allow-Private-Network': true,
    //   'Access-Control-Allow-Origin': '*',
    // }
  }
};