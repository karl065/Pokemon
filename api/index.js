//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {
  postControllerTipo,
} = require('./src/controllers/controllersTipo/PostControllerTipo.js');
const {conn} = require('./src/db.js');
const {PORT} = process.env;

// Syncing all the models at once.
conn.sync({force: true}).then(() => {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Corriendo en el puerto: ${PORT}`);
    postControllerTipo();
  });
});
