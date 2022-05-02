const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://store.steampowered.com",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
      secure: true,
    })
  );
};
