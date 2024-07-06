// src/utils/authUtility.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar token en el almacenamiento local
export const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('authToken', token);
    } catch (error) {
        console.error('Error saving token', error);
    }
};

// Recuperar token del almacenamiento local
export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('authToken');
    } catch (error) {
        console.error('Error retrieving token', error);
    }
};

// Limpiar token del almacenamiento local
export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('authToken');
    } catch (error) {
        console.error('Error removing token', error);
    }
};
