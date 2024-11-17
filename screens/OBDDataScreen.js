import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OBDDataScreen = ({ route }) => {
  const device = { name: 'OBD-II Device 1' };

  const [obdData, setObdData] = useState({});

  useEffect(() => {
    const simulatedObdData = {
      rpm: '2500 RPM',
      speed: '80 km/h',
      fuelLevel: '65%',
    };

    setTimeout(() => {
      setObdData(simulatedObdData);
    }, 1000);
  }, [device]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Connected to: {device.name}</Text>
      <Text style={styles.sectionHeader}>OBD Data:</Text>
      <View style={styles.dataContainer}>
        <View style={styles.dataCard}>
          <Text style={styles.dataLabel}>RPM:</Text>
          <Text style={styles.dataValue}>{obdData.rpm}</Text>
        </View>
        <View style={styles.dataCard}>
          <Text style={styles.dataLabel}>Speed:</Text>
          <Text style={styles.dataValue}>{obdData.speed}</Text>
        </View>
        <View style={styles.dataCard}>
          <Text style={styles.dataLabel}>Fuel Level:</Text>
          <Text style={styles.dataValue}>{obdData.fuelLevel}</Text>
        </View>
      </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 10,
  },
  dataContainer: {
    width: '100%',
    alignItems: 'center',
  },
  dataCard: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  dataLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e0e0e0',
  },
  dataValue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4CAF50',
  },
});

export default OBDDataScreen;
