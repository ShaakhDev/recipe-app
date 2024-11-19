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
          '@/store': './src/store',
          '@/config': './src/config',
          '@/features': './src/features',
          '@/hooks': './src/hooks',
          '@/types': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
