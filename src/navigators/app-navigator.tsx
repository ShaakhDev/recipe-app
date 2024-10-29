import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigator';
import {AuthNavigator} from './auth-navigator';
import * as Screens from '@/screens';
import {StatusBar, useColorScheme} from 'react-native';
import {colors} from '@/theme';

export type RootStackParamList = {
  Auth: undefined;
  Tab: undefined;
  Initial: undefined;
  Search: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

type RootStackScreenOptionsType = {
  [key in keyof RootStackParamList]: NativeStackNavigationOptions;
};

const RootStackScreenOptions: RootStackScreenOptionsType = {
  Auth: {},
  Tab: {},
  Initial: {},
  Search: {
    headerShown: true,
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    title: 'Search recipes',
  },
};

export const AppNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}>
        <RootStack.Screen
          options={{}}
          name="Initial"
          component={Screens.InitialScreen}
        />
        <RootStack.Screen
          options={RootStackScreenOptions.Auth}
          name="Auth"
          component={AuthNavigator}
        />
        <RootStack.Screen
          // options={RootStackScreenOptions.Tab}
          name="Tab"
          component={TabNavigator}
        />
        <RootStack.Screen
          options={RootStackScreenOptions.Search}
          name="Search"
          component={Screens.SearchScreen}
        />
      </RootStack.Navigator>
    </>
  );
};
