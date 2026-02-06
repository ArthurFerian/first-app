import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.estilotexto}>Arthur Ferian</Text>
      <Image 
        source={require('./assets/IMG_20250317_102028_958.webp')}
        style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 8 }}
      />
      <StatusBar style="auto" />
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/a5/ce/66/a5ce6645d7e4c0262f19756ca382da60.jpg' }}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#721726',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estilotexto: {
    color: '#c4bfbf',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
