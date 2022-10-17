// eslint-disable-next-line no-undef
module.exports = function (api) {
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-flow",
  ];

  api.cache(false);

  return {
    presets,
  };
};
