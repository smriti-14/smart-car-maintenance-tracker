import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

export default function DrivingDashboard() {
  const sheetRef = useRef(null);

  const renderContent = () => (
    <View style={styles.bottomSheetContent}>
      <Text style={styles.heading}>Driving</Text>
      <View style={styles.speedometerContainer}>
        <Text style={styles.kilometers}>2.3 km</Text>
        <Text style={styles.speed}>54</Text>
      </View>

      <View style={styles.specsContainer}>
        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Fuel consumption</Text>
        </View>
        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Engine</Text>
          <Text style={styles.specValue}>90°C</Text>
        </View>
        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Fuel</Text>
          <Text style={styles.specValue}>61%</Text>
        </View>
        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Tyres</Text>
          <Text style={styles.specValue}> 29 PSI</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close driving mode</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  bottomSheetContent: {
    backgroundColor: '#2a3a4a',
    padding: 16,
    height: 450,
    borderRadius: 20,
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
  },
  speedometerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  kilometers: {
    fontSize: 16,
    color: '#8fa3b0',
    marginBottom: 5,
  },
  speed: {
    fontSize: 48,
    color: '#ffffff',
  },
  specsContainer: {
    marginTop: 20,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3a4a5a',
  },
  specLabel: {
    color: '#8fa3b0',
    fontSize: 16,
  },
  specValue: {
    color: '#ffffff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#3a4a5a',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});