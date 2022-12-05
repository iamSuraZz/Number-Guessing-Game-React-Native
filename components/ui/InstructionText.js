import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children }) {
  return <Text>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  InstructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
