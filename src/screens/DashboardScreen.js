// screens/DashboardScreen.js
import React from 'react';
import { View, Text,    Button } from 'react-native';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dashboard Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />

    </View>
  );
};

export default DashboardScreen;
