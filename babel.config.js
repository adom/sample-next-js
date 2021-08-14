module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            node: 'current',
          },
        },
        'transform-runtime': {},
        'styled-jsx': {},
        'class-properties': {},
      },
    ],
  ],
  plugins: [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
      }
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@public': './public',
          '@config': './config',
          '@src': './src',
        },
      },
    ],
  ],
};
