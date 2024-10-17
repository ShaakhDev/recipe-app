import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigator';
import {AuthNavigator} from './auth-navigator';
import * as Screens from '@/screens';

export type RootStackParamList = {
  Auth: undefined;
  Tab: undefined;
  Initial: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Initial" component={Screens.InitialScreen} />
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Tab" component={TabNavigator} />
    </RootStack.Navigator>
  );
};
