import { StyleSheet } from "react-native";
import { appColors } from "../colors";


const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
    container: {
        backgroundColor: appColors.BackgroundPrimary,
        flex: 1,
        padding: 15,
        margin: 15,
        borderRadius: 20
    },
    welcomeBanner:{
        marginTop:40,
        marginBottom:20
    },
    welcomeTitle: {
        textAlign: 'left',
        fontFamily: 'NunitoSans',
        fontSize: 60,
        fontWeight: '700',
        color: appColors.Accent

    },
    welcomSubTitle: {
        textAlign: 'left',
        fontFamily: 'NunitoSans-Italic',
        fontSize: 50,
        fontWeight: '600',
        color: '#000000'

    }
    ,
    textInputForm:{
        marginTop:20,
        marginBottom:20
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: appColors.Secondary,
        borderWidth: 0.5,
        borderStyle: 'solid',
        paddingLeft: 20,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 30,
        color:appColors.Secondary
        
    },
    innerIcon:{
        color:appColors.Secondary,
        marginRight:10,
        padding:10
    },
    forgotPassword:{
        textAlign:'right',
        fontFamily: 'NunitoSans',
        color:appColors.Main,
        fontWeight:'600',
        fontSize:17
    },
    loginButton:{
        
        backgroundColor:appColors.Accent,
        marginTop:20,
        padding:10,
        textAlign:'center',
        borderRadius: 30,
        marginBottom:20
        
    },
    loginButtonText:{
        fontFamily: 'NunitoSans',
        fontWeight:'700',
        textAlign:'center',
        fontSize:21,
        color:appColors.white
    },
    signupText:{
        fontFamily: 'NunitoSans',
        fontWeight:'600',
        marginTop:10,
        textAlign:'center',
        color:appColors.lightGrey,
        fontSize:17
    },
    signupTextInside:{
        fontWeight:'700',
        color:appColors.Main


    }
});

export { styles };