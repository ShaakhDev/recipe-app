import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '@/screens';

type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={Screens.WelcomeScreen} />
      <AuthStack.Screen name="Login" component={Screens.LoginScreen} />
      <AuthStack.Screen name="Signup" component={Screens.SignupScreen} />
    </AuthStack.Navigator>
  );
};
