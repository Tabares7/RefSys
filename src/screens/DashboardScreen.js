// screens/DashboardScreen.js
import React, { useEffect , useState} from 'react';
import { View, Text, ActivityIndicator,    Button } from 'react-native';
import { getUser } from '../utils/authUtility';

const DashboardScreen = ({navigation}) => {

  

  return (
    <View style={{ flex: 1, alignItems: 'start', justifyContent: 'start' }} >
      <Text>Dashboard Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};



export default DashboardScreen;
