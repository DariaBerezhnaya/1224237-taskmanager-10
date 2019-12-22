const path = require(`path`);

module.exports = {
  mode: `development`, // Режим сборки
  entry: `./src/main.js`, // Точка входа в приложение
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`, // Подключаем sourcemaps
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`, // Если не работает по этому урлу, добавить webpack-dev-server
    compress: true, // Сжатие
    watchContentBase: true, // Автоматическая перезагрузка страницы
  }
};
