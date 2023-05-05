import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigatior";
import { NavigationContainer } from "@react-navigation/native";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <ModalPortal />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
