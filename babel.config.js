module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
  }
}

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".jsx", ".js", ".json"],
        alias: {
          assets: "./src/assets",
          components: "./src/components",
          global: "./src/global",
          routes: "./src/routes",
          screens: "./src/screens",
          services: "./src/services",
          utils: "./src/utils",
          context: "./src/context"
        }
      }
    ]
  ]
}
