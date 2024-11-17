import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

const VehicleListScreen = ({ navigation }) => {
  const [vehicles] = useState([
    { id: '1', name: 'Car 1', mileage: '5000' },
    { id: '2', name: 'Car 2', mileage: '8000' },
    { id: '3', name: 'Car 3', mileage: '3000' },
  ]);

  const renderVehicleItem = ({ item }) => (
    <View style={styles.vehicleItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate('VehicleListTab', { vehicle: item })}
      >
        <Text style={styles.vehicleName}>{item.name}</Text>
        <Text style={styles.vehicleMileage}>Mileage: {item.mileage} km</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.obdConnectButton}
        onPress={() => navigation.navigate('ConnectionTab', { vehicleId: item.id })}
      >
        <Text style={styles.obdConnectButtonText}>Connect to OBD-II</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={renderVehicleItem}
        contentContainerStyle={styles.vehicleList}
      />
      {/* <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddVehicleTab')}
      >
        <Text style={styles.addButtonText}>Add Vehicle</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.obdButton}
        onPress={() => navigation.navigate("AddVehicleTab")}
      >
        <Text style={styles.obdButtonText}>Add Vehicle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  vehicleList: {
    paddingBottom: 80,
    paddingHorizontal: 16,
  },
  vehicleItem: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 4,
  },
  vehicleMileage: {
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 12,
  },
  obdConnectButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 8,
  },
  obdConnectButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 70,
    left: 16,
    right: 16,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  obdButton: {
    position: 'absolute',
    bottom: 10,
    left: 16,
    right: 16,
    backgroundColor: '#1e88e5',
    paddingVertical: 12,
    borderRadius: 8,
  },
  obdButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VehicleListScreen;
