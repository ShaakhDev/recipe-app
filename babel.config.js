module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@/utils': './src/utils',
          '@/components': './src/components',
          '@/navigators': './src/navigators',
          '@/screens': './src/screens',
          '@/theme': './src/theme',
          '@/icons': './src/resource/icons',
          '@/constants': './src/constants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
