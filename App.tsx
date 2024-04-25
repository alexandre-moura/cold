import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Wrapper from "../Cold/src/Components/Wrapper/index";
import MainPressable from '../Cold/src/Components/Button/index';

    
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Wrapper>
      <View style = {{flex:1, backgroundColor: 'grey'}}>
        <MainPressable/>
      </View> 
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '500',
  },
  text: {
    margin: 20,
    justifyContent: 'flex-start',
    alignItems:'center',
  }
});

export default App;
