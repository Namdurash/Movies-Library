module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@screens': './src/screens',
            '@store': './src/store',
            '@components': './src/components',
            '@api': './src/api',
            '@navigation': './src/navigation',
            '@managers': './src/managers',
            '@ui': './src/ui',
          },
        },
      ],
    ],
  };
};
