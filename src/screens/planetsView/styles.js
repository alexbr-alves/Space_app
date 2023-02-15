import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#282a4b',
    },
    head_title: {
        fontSize: 50, 
        color:'red',
        marginTop: 10,
        fontWeight: "400",
        color: '#FFFFFF',
        fontFamily: 'BebasNeue_400Regular',
        alignSelf: 'center'
    },
    head_image: {
        marginTop: 20,
        height: 250,
        width: 300,
        alignSelf: 'center'
    },
    description:{
        marginTop: 30,
        marginHorizontal: 40
    },
    description_text:{
        fontSize: 15,
        color: '#bdbdbd',
        fontStyle: 'italic'
    },
    body: {
        marginTop: 50,
        flexDirection: 'row',
        marginLeft: 40,
        justifyContent: 'space-between',
    },
    body_redus: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'BebasNeue_400Regular',
        color: '#bdbdbd'
    },
    body_redusValue: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'BebasNeue_400Regular',
    },
    body_moons: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'BebasNeue_400Regular',
        color: '#bdbdbd',
    },
    body_moonsValue: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'BebasNeue_400Regular',
    },
    body_distance:{
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'BebasNeue_400Regular',
        color: '#bdbdbd'
    },
    body_distanceValue:{
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'BebasNeue_400Regular',
    },
    body_distance:{
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'BebasNeue_400Regular',
        color: '#bdbdbd'
    },
    body_distanceValue:{
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'BebasNeue_400Regular',
    },
    body_orbital:{
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'BebasNeue_400Regular',
        color: '#bdbdbd'
    },
    body_orbitalValue:{
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'BebasNeue_400Regular',
    },
    button: {
        backgroundColor: '#bdbdbd',
        width: 200,
        height: 40,
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        bottom: 20,
        position: 'absolute'
    },
    button_title: {
        fontFamily: 'BebasNeue_400Regular',
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 1,
        color: '#032250'
    },
    noSistemaSolar_text:{
        fontSize: 18,
        fontFamily: 'BebasNeue_400Regular',
        color: 'white',
        marginTop: 20
       
    }

        
    
})