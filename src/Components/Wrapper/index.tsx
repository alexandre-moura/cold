import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Wrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle && {flex:1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default Wrapper;
