import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FAB } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <Text style={styles.logoText}>Welcome to Car Maintenance Tracker!</Text>
        <Text style={styles.descriptionText}>
          Add your vehicle by clicking on the add button.
        </Text>
      </View>

      <TouchableOpacity onPress={toggleModal} style={styles.openButton}>
        <Text style={styles.openButtonText}>Show Driving Mode</Text>
      </TouchableOpacity>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("AddVehicleTab")}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.heading}>Driving</Text>
              <View style={styles.speedometerContainer}>
                <Text style={styles.kilometers}>2.3 km</Text>
                <Text style={styles.speed}>54</Text>
              </View>
              <View style={styles.specsContainer}>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Fuel consumption</Text>
                  <Text style={styles.specValue}>6.5 L/100km</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Engine</Text>
                  <Text style={styles.specValue}>90°C</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Fuel</Text>
                  {/* TouchableOpacity added for Fuel */}
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false); // Close the modal before navigation
                      navigation.navigate("PetrolPumpsScreen"); // Navigate to Petrol Pumps Screen
                    }}
                  >
                    <Text style={[styles.specValue, styles.warning]}>
                      15% {/* Reduced fuel percentage */}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Tyre Pressure</Text>
                  <Text style={styles.specValue}>29 PSI</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.closeButtonText}>Close Driving Mode</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 16,
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 16,
    textAlign: "center",
    color: "#b0b0b0",
    paddingHorizontal: 16,
  },
  openButton: {
    backgroundColor: "#3a4a5a",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  openButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#2a3a4a",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 16,
  },
  speedometerContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  kilometers: {
    fontSize: 16,
    color: "#8fa3b0",
    marginBottom: 5,
  },
  speed: {
    fontSize: 48,
    color: "#ffffff",
  },
  specsContainer: {
    marginTop: 20,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3a4a5a",
  },
  specLabel: {
    color: "#8fa3b0",
    fontSize: 16,
  },
  specValue: {
    color: "#ffffff",
    fontSize: 16,
  },
  warning: {
    color: "red", // Red color for warning
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#3a4a5a",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
