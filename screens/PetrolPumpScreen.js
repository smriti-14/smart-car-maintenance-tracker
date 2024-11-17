import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function PetrolPumpsScreen({ navigation }) {
  const petrolPumps = [
    {
      id: "1",
      name: "Indian Oil Petrol Pump",
      address: "Sector 14, Gurugram",
      distance: "1.2 km",
    },
    {
      id: "2",
      name: "Bharat Petroleum",
      address: "DLF Phase 3, Gurugram",
      distance: "2.5 km",
    },
    {
      id: "3",
      name: "HP Petrol Pump",
      address: "Sector 29, Gurugram",
      distance: "3.0 km",
    },
    {
      id: "4",
      name: "Shell Petrol Pump",
      address: "MG Road, Gurugram",
      distance: "4.2 km",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Map Image */}
      <Image
        source={{ uri: "https://i.ibb.co/pL30nrF/image.png" }}
        style={styles.mapImage}
      />

      {/* Petrol Pumps List */}
      <FlatList
        data={petrolPumps}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false} // Hides the scrollbar
        renderItem={({ item }) => (
          <View style={styles.petrolPumpItem}>
            <Text style={styles.petrolPumpName}>{item.name}</Text>
            <Text style={styles.petrolPumpAddress}>{item.address}</Text>
            <Text style={styles.petrolPumpDistance}>{item.distance}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#2a3a4a",
    width: "100%",
  },
  backButton: {
    color: "#4CAF50",
    fontSize: 16,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
  },
  mapImage: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  petrolPumpItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#3a4a5a",
  },
  petrolPumpName: {
    fontSize: 18,
    color: "#fff",
  },
  petrolPumpAddress: {
    fontSize: 14,
    color: "#8fa3b0",
    marginVertical: 4,
  },
  petrolPumpDistance: {
    fontSize: 14,
    color: "#4CAF50",
  },
});
