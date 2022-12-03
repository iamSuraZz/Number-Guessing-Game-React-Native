import { View, Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
    color: "#ddb52f",
    textAlign: "center",
  },
});
