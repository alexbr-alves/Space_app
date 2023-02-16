import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282a4b'
        

    },
    card: {
        height: 200,
        width: windowWidth / 2 - 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbdbdb',
        marginLeft: 20,
        marginVertical: 5,
        borderRadius: 30
    },
    card_image: {
        height: 120,
        width: 150
    },
    card_text: {
        fontFamily: 'BebasNeue_400Regular',
        fontSize: 20
    },
    iconeBack: { 
        marginTop: 40, 
        marginLeft: 20 
    },
})