import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "#032250"
      },
      head:{
        position: 'absolute',
        marginTop: 100,
        width: '100%',
        alignItems: 'center'
      },
      title:{
        fontSize: 50,
        fontFamily: 'BebasNeue_400Regular',
        color: '#dbdbdb'
      },
      sol: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: windowHeight / 2,
        left: windowWidth / 2,
        marginTop: -100,
        marginLeft: -100,
      },
      jupiter: {
        width: 100,
        height: 100,
        position: 'absolute',
        top:  windowHeight / 2- 200,
        left: windowWidth / 2- 50,
      },
      marte: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: windowHeight / 2 + 100,
        left: windowWidth / 2 - 50,
      },
      mercurio: {
        width: 100,
        height: 100,  
        position: 'absolute',
        top: windowHeight / 2 - 50,
        left: windowWidth / 2 - 200,
      },
      neptune: {
        width: 100,
        height: 100, 
        position: 'absolute',
        top:  windowHeight / 2 - 50,
        left: windowWidth / 2 + 100,
      },
      saturn: {
        width: 120,
        height: 100,
        position: 'absolute',
        top: windowHeight / 2 - 150,
        left: windowWidth / 2 - 170,
      },
      terra: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: windowHeight / 2 - 150,
        left: windowWidth / 2 + 50,
      },
      uranus: {
        width: 120,
        height: 100,
        position: 'absolute',
        top:  windowHeight / 2 + 50,
        left: windowWidth / 2 - 170,
      },
      venus: {
        width: 100,
        height: 100,
        position: 'absolute',
        top:  windowHeight / 2  + 50,
        left:  windowWidth / 2  + 50,
      },
      button: {
        position: 'absolute',
        bottom: 50,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#484a6b',
        left: windowWidth / 2 - 100,
        borderRadius: 30
      },
      button_text: {
        fontSize: 20,
        fontFamily: 'BebasNeue_400Regular',
        color: '#dbdbdb'
      }
})