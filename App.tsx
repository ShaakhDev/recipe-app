import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {AppNavigator} from '@/navigators';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from '@/store';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Provider store={store}>
            <NavigationContainer onReady={() => SplashScreen.hide()}>
              <AppNavigator />
            </NavigationContainer>
          </Provider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
