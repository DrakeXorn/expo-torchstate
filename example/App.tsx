import { StyleSheet, Text, View } from 'react-native';

import * as Torchstate from '@drakexorn/expo-torchstate';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Torchstate.hello()}</Text>
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
});
