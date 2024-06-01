import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient} from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.rootContainer}>
        <LinearGradient colors={["purple", "#38287A"]} style={styles.rootContainer}>
            <StartGameScreen/>
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
    }
});
