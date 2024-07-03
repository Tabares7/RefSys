import { StyleSheet } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { Main } from './components/Main';

export default function App() {
  return (
    <NativeRouter>
    <Main />
    </NativeRouter>
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
