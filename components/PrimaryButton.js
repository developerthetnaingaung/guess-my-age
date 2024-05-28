import {View, Text, Pressable, StyleSheet} from "react-native";


function PrimaryButton ({children}) {

     function PressHandler () {
        console.log("Button pressed");
    }

    return <>


            <View style={styles.buttonOuterContainer}>
                <Pressable
                    style={styles.buttonInnerContainer}
                    android_ripple={{color : "#84354B"}}
                    onPress={PressHandler}
                >
                <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
    </>
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: "#122F62",
        color: "white",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        elevation: 2,
    },
    buttonOuterContainer:{
        margin: 10,
        borderRadius: 25,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
})