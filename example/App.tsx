import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useTorch} from "@drakexorn/expo-torchstate";

export default function App() {
  const [torchOn, setTorchStatus] = useTorch();

  return (
    <View style={styles.container}>
      <Text>Flashlight turned {torchOn ? "on" : "off"}</Text>
      <Pressable style={styles.button} onPress={() => setTorchStatus(currentState => !currentState)}>
        <Text>Toggle flashlight</Text>
      </Pressable>
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
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  }
});
