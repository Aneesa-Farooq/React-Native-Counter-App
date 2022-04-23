import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{backgroundColor: '#fffd73', flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            color: '#73736e',
            textAlign: 'center',
            fontSize: 80,
            fontWeight: 'bold',
          }}>
          {counter}
        </Text>
      </View>

      <View style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#73736e'}}
          onPress={() => setCounter(counter + 1)}>
          <Text style={styles.buttonText}>INCREMENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#ff443b'}}
          onPress={() => setCounter(0)}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    width: 150,
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 10,
  },
});
