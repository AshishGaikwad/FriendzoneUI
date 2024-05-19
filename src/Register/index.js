import { Button, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles } from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle, faCross, faLock, faLockOpen, faMobileAlt, faUserAlt, faUserAltSlash, faUserLock, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { appColors } from "../colors";
import { useState } from "react";
import checkUserNameAvailibility from "../Apis/registration";
import Spinner from "react-native-loading-spinner-overlay";

const usernameRE = new RegExp("^\\w[\\w]{4,18}\\w$");



export default function Register({ navigation }) {
    const [spinner,setSpinner] = useState(false);
    const [spinnerText,setSpinnerText] = useState('Loading');

    const [username,setUsername] = useState('');
    const [usernameValidity,setUsernameValidity] = useState(false);
    const [usernameErrMsg,setUsernameErrMsg] = useState('');

    const [mobile,setMobile] = useState('');
    const [mobileValidity,setMobileValidity] = useState(false);
    const [mobileErrMsg,setMobileErrMsg] = useState('');
    




    const usernameHandler=async (e)=>{

        //checkin username is valid 
        if(!usernameRE.test(username)){

            setUsernameValidity(false);
            setUsernameErrMsg('Username should between 6-18 characters. allowed a-z,0-9,_')
            return;
        }



        if(username.length>=6){
            setSpinner(true);
            setSpinnerText('Checking Username availibility');
            const resp = await checkUserNameAvailibility(username)
                                .catch(err=>{
                                    setSpinner(false);
                                    setSpinnerText('Loading');
                                })
            if(resp.code == 1){
                setUsernameValidity(true)
                setUsernameErrMsg("")
            }else{
                setUsernameValidity(false)
                setUsernameErrMsg("This username is not available please try another")
            }
            console.log( resp);
            setSpinner(false);
            setSpinnerText('Loading');
        }else{
            setUsernameValidity(false)
        }

        
    }


    const mobileHandler=async (e)=>{

        //checkin username is valid 
        // if(!usernameRE.test(username)){

        //     setUsernameValidity(false);
        //     setUsernameErrMsg('Username should between 6-18 characters. allowed a-z,0-9,_')
        //     return;
        // }



        if(mobile.length==10){
            setSpinner(true);
            setSpinnerText('Validating mobile number');
            const resp = await checkUserNameAvailibility(username)
                                .catch(err=>{
                                    setSpinner(false);
                                    setSpinnerText('Loading');
                                })
            if(resp.code == 1){
                setUsernameValidity(true)
                setUsernameErrMsg("")
            }else{
                setUsernameValidity(false)
                setUsernameErrMsg("This username is not available please try another")
            }
            console.log( resp);
            setSpinner(false);
            setSpinnerText('Loading');
        }else{
            setUsernameValidity(false)
        }

        
    }


    return (
        <ScrollView style={styles.containerMain} contentContainerStyle={{ flexGrow: 1 }}>
            <Spinner
                visible={spinner}
                textContent={spinnerText}
                textStyle={styles.spinnerTextStyle}
                />
            <View style={styles.container} >
                <View style={styles.welcomeBanner}>
                    <Text style={styles.welcomeTitle}>Let's,</Text>
                    <Text style={styles.welcomSubTitle}>Jump in !</Text>
                </View>

                <View style={styles.textInputForm}>
                    
                    <View style={styles.textViewMain}>
                        <FontAwesomeIcon style={styles.startIcon} icon={faUserAlt} />
                        <TextInput
                            placeholder="Create unique username"
                            
                            placeholderTextColor={appColors.lightGrey}
                           
                            value={username}
                            onChangeText={val=>setUsername(val)}
                            style={styles.textViewInput}
                            onBlur={usernameHandler}
                            maxLength={16}
                        />
                        {usernameValidity?  <FontAwesomeIcon style={[styles.validationIcon,styles.success]} icon={faCheckCircle} /> :  
                        <FontAwesomeIcon style={[styles.failure]} icon={faXmarkCircle} />}
                    </View>
                    {usernameErrMsg.length != "" ?<Text style={[styles.errMsg,styles.failure]}>{usernameErrMsg}</Text>:<></> }
                    

                    <View style={styles.textViewMain}>
                        <FontAwesomeIcon style={styles.startIcon} icon={faMobileAlt} />
                        <TextInput
                            value={mobile}
                            placeholder="Enter your mobile"
                            keyboardType="numeric"
                            
                            placeholderTextColor={appColors.lightGrey}
                           
                            style={styles.textViewInput}
                            maxLength={10}
                            onChangeText={val=>setMobile(val)}
                            onBlur={mobileHandler}
                        />
                        {mobileValidity?  <FontAwesomeIcon style={[styles.validationIcon,styles.success]} icon={faCheckCircle} /> :  
                        <FontAwesomeIcon style={[styles.failure]} icon={faXmarkCircle} />}
                    </View>
                    {mobileErrMsg.length != "" ?<Text style={[styles.errMsg,styles.failure]}>{mobileErrMsg}</Text>:<></> }
                    

                    <View style={styles.textViewMain}>
                        <FontAwesomeIcon style={styles.startIcon} icon={faUserLock} />
                        <TextInput
                            placeholder="Enter your OTP"
                            keyboardType="numeric"
                            returnKeyType='next'
                            style={styles.textViewInput}
                            placeholderTextColor={appColors.lightGrey}
                            
                        />
                    </View>

                                     


                    <View style={styles.textViewMain}>
                        <FontAwesomeIcon style={styles.startIcon} icon={faLock} />
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            autoCorrect={false}
                            returnKeyType='go'
                            style={styles.textViewInput}
                            placeholderTextColor={appColors.lightGrey}
                            
                        />
                    </View>
                    <View style={styles.textViewMain}>
                        <FontAwesomeIcon style={styles.startIcon} icon={faLockOpen} />
                        <TextInput
                            placeholder="Confirm your password"
                            secureTextEntry={true}
                            autoCorrect={false}
                            returnKeyType='go'
                            style={styles.textViewInput}
                            placeholderTextColor={appColors.lightGrey}
                            
                        />
                    </View>

                </View>
                <TouchableOpacity
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.signupText}>Already have an account ?
                    <Text style={styles.signupTextInside} onPress={()=>{
                        navigation.navigate('Login')
                    }}> Login</Text></Text>
            </View>

        </ScrollView>
    )
}