import 'react-native-gesture-handler';
import { ScreenStack } from '@navigation/ScreenStack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootProvider } from '@store/RootProvider';

const ConnectedApp = () => {
  const navigationRef = React.useRef<any>();

  return (
    <NavigationContainer ref={navigationRef}>
      <ScreenStack navigation={navigationRef.current} />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <RootProvider>
      <SafeAreaProvider>
        <ConnectedApp />
      </SafeAreaProvider>
    </RootProvider>
  );
};

export default App;
