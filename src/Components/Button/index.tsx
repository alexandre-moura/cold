import React from 'react';
import { Pressable, View } from "react-native";
import styles from './styles';

const MainPressable: React.FC = () => {

  return (
      <View style={styles.pressableView}>
        <View style={styles.shadowView}>
            <View style={styles.shadowView2}>
                <Pressable style={styles.mainPressable}/>
    </View>
    </View>
    </View>
  );    
};

export default MainPressable;
