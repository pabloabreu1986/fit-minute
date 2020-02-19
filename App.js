import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { reset } from 'expo/build/AR';

export default function App() {

  const [state, setstate] = useState(60);



  const reset = () => {
    setstate(60);
  }

  const play = () => {
    setTimeout(() => {
      if (state === 0) {
        return;
      } else {
        setstate(state - 1)
      }
    }, 1000);
  }

  return (
    <View style={styles.container}>

      <View style={styles.counter}>
        <Text>{state}</Text>
      </View>

      <View style={styles.buttons}>

        <View style={styles.buttonPlay}>
          <Button 
            title='Play'
            onPress={()=>play()}
          />
        </View>

        <View style={styles.buttonReset}>
          <Button 
            title='Reset'
            onPress={()=>reset()}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    flex: 1
  }
});
