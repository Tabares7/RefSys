import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>Hola Caracola</Text>
      <StatusBar style='dark'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
