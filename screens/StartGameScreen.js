import { useState } from 'react'
import { View, TextInput, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen () {

    const [enterNumber, setEnterNumber] = useState('');


    function numberInputHandler (inputText) {
        setEnterNumber(inputText);
    }

    function comfirmInputHandler (inputText) {

    }



    return <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" value={enterNumber} onChangeText={numberInputHandler}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={comfirmInputHandler()}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 20,
        padding: 18,
        backgroundColor: '#F6E7CB',
        borderRadius: 15,
        elevation: 4,
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: "blue",
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: "red",
        marginHorizontal: 10,
    },
    buttonsContainer:{
        flexDirection: "row",
    },
    buttonContainer:{
        flex: 1,
    }
})