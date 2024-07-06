// screens/DashboardScreen.js
import React, { useEffect , useState} from 'react';
import { View, Text, ActivityIndicator,    Button } from 'react-native';
import { getUser } from '../utils/authUtility';

const DashboardScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser().then((user) => {
      if (!user) {
        
      }else{
        setUser(user);
        setLoading(false);
      }

    });
  });
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Text>{user ? user : "Dashboard Screen" }</Text>

            )}
    </View>
  );
};

export default DashboardScreen;
