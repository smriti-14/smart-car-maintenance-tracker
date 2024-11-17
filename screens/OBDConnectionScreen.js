import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const OBDConnectionScreen = ({ navigation }) => {
  const devices = [
    { id: '1', name: 'OBD-II Device 1' },
    { id: '2', name: 'OBD-II Device 2' },
    { id: '3', name: 'OBD-II Device 3' },
  ];

  const [connectedDevice, setConnectedDevice] = useState(null);

  const connectToDevice = (device) => {
    setConnectedDevice(device);
    navigation.navigate('OBDDataScreen', { device });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select OBD-II Device</Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.deviceCard} onPress={() => connectToDevice(item)}>
            <Text style={styles.deviceName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.deviceList}
      />
      {connectedDevice && (
        <Text style={styles.connectedText}>Connected to: {connectedDevice.name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  deviceList: {
    width: '100%',
  },
  deviceCard: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  deviceName: {
    fontSize: 18,
    color: '#4CAF50',
  },
  connectedText: {
    marginTop: 20,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default OBDConnectionScreen;
