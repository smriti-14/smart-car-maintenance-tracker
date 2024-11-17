import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Title, Text, Checkbox } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import { FontAwesome } from "@expo/vector-icons";
// services
const servicesOptions = [
  "Air Conditioning",
  "Battery",
  "Engine Oil Change",
  "Mileage",
  "Coolant Temperature",
  "Tyre Pressure",
  "Wheel Alignment",
];

const AddEditVehicleScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const [currentMileage, setCurrentMileage] = useState("");
  const [nextServiceMileage, setNextServiceMileage] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [totalFuelCost, setTotalFuelCost] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleServiceToggle = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((item) => item !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
      });

      if (result.type === "success") {
        const newDocument = {
          name: result.name,
          uri: result.uri,
          extension: result.name.split(".").pop(),
        };
        setDocuments([...documents, newDocument]);
      } else {
        console.log("Document selection cancelled");
      }
    } catch (error) {
      console.error("Error picking a document:", error);
    }
  };

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false} // Hides the vertical scrollbar
    >
      <View style={styles.container}>
        <Title style={styles.title}>Select Services</Title>
        <View style={styles.servicesContainer}>
          {servicesOptions.map((service, index) => (
            <View key={index} style={styles.checkboxItem}>
              <Checkbox
                status={services.includes(service) ? "checked" : "unchecked"}
                onPress={() => handleServiceToggle(service)}
                color="#4CAF50"
              />
              <Text style={styles.checkboxLabel}>{service}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Mileage</Text>
        <View style={styles.mileageContainer}>
          {/* <TextInput
            label="Current Mileage"
            value={currentMileage}
            onChangeText={(text) => setCurrentMileage(text)}
            style={styles.input}
            mode="outlined"
            theme={{
              colors: {
                text: "#ffffff",
                placeholder: "#888",
                background: "#1f1f1f",
              },
            }}
          /> */}
          <TextInput
            label="Next Service Mileage"
            value={nextServiceMileage}
            onChangeText={(text) => setNextServiceMileage(text)}
            style={styles.input}
            mode="outlined"
            theme={{
              colors: {
                text: "#ffffff",
                placeholder: "#888",
                background: "#1f1f1f",
              },
            }}
          />
        </View>

        <Text style={styles.sectionTitle}>Fuel Details</Text>
        <View style={styles.fuelDetailContainer}>
          <TextInput
            label="Fuel Consumption"
            value={fuelConsumption}
            onChangeText={(text) => setFuelConsumption(text)}
            style={styles.input}
            mode="outlined"
            theme={{
              colors: {
                text: "#ffffff",
                placeholder: "#888",
                background: "#1f1f1f",
              },
            }}
          />
          <TextInput
            label="Total Fuel Cost"
            value={totalFuelCost}
            onChangeText={(text) => setTotalFuelCost(text)}
            style={styles.input}
            mode="outlined"
            theme={{
              colors: {
                text: "#ffffff",
                placeholder: "#888",
                background: "#1f1f1f",
              },
            }}
          />
        </View>

        <Text style={styles.sectionTitle}>Attached Documents </Text>
        <TouchableOpacity
          style={styles.attachmentButton}
          onPress={handleDocumentPick}
        >
          <FontAwesome
            name="paperclip"
            size={16}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.attachmentText}>Attach Document</Text>
        </TouchableOpacity>
        {documents.map((document, index) => (
          <View key={index} style={styles.documentContainer}>
            <FontAwesome
              name="file"
              size={16}
              color="#4CAF50"
              style={styles.icon}
            />
            <Text style={styles.documentText}>
              {document.name} ({document.extension})
            </Text>
          </View>
        ))}

        <Button mode="contained" style={styles.saveButton} onPress={handleSave}>
          Save
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4CAF50",
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    marginVertical: 5,
    paddingVertical: 5,
  },
  checkboxLabel: {
    fontSize: 14,
    marginLeft: 8,
    color: "#ffffff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50",
    marginTop: 20,
    marginBottom: 10,
  },
  mileageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  fuelDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    marginTop: 30,
    paddingVertical: 10,
  },
  attachmentButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  attachmentText: {
    fontSize: 16,
    color: "#4CAF50",
    marginLeft: 5,
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#1f1f1f",
    padding: 8,
    borderRadius: 5,
  },
  documentText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#ffffff",
  },
  icon: {
    marginRight: 5,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
});

export default AddEditVehicleScreen;
