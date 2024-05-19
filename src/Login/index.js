import { Alert, Button, SafeAreaView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { appColors } from "../colors";
import { styles } from "../style";
import { useState } from "react";
import validateMobileNo,{ validateOTP } from "../validations/login-validations";
import sendOTP, { verifyOTP } from "../Apis/login";

export default function Login({ navigation }) {

    const [mobileNo,setMobileNo] = useState("");
    const [mobileNoErrMsg,setMobileNoErrMsg] = useState("");

    const [otp,setOtp] = useState("");
    const [otpErrMsg,setOtpErrMsg] = useState("");

    const [otpId,setOtpId] = useState("");

    const [submitButtonType,setSubmitButtonType] = useState("Send OTP");


    const sendOtpHandler=async (e)=>{

        if(submitButtonType == "Send OTP"){
            await sendOTPAction();
        }else{

            

            let otpValidationStatus = validateOTP(otp);
            setOtpErrMsg(otpValidationStatus);
            if(otpValidationStatus!=""){
                return;
            }


            const apiCall =await verifyOTP({
                mobileNo:mobileNo,
                otpId:otpId,
                otp:otp
            });
            console.log(apiCall);
            if(apiCall.code == 1){
                //success
                Alert.alert('Success',apiCall.msg);
                setSubmitButtonType("Verify OTP")
            }else{
                //failure
                Alert.alert('Failure',apiCall.msg);
            }

        }
       
       
        
    }


    const sendOTPAction =async ()=>{
        //validating mobile no
        let mobileValidationStatus = validateMobileNo(mobileNo);
        setMobileNoErrMsg(mobileValidationStatus);
        if(mobileValidationStatus!=""){
            return;
        }
    
        //calling send otp api
        const apiCall =await sendOTP(mobileNo);
        console.log(apiCall);
        if(apiCall.code == 1){
            //success
            Alert.alert('Success',apiCall.msg);
            setSubmitButtonType("Verify OTP")
            setOtpId(apiCall.data.otpId);
        }else{
            //failure
            Alert.alert('Failure',apiCall.msg);
        }
    }

    return (
        <SafeAreaView style={styles.containerMain}>
            <View style={styles.container}>
                <View style={styles.welcomeBanner}>
                    <Text style={styles.welcomeTitle}>Look,</Text>
                    <Text style={styles.welcomSubTitle}>who's back !</Text>
                </View>

                <View style={styles.textInputForm}>
                    <View style={styles.textViewMain}>
                        <FontAwesomeIcon style={styles.startIcon} icon={faMobileAlt} />
                        <TextInput
                            placeholder="Enter your mobile"
                            keyboardType="numeric"
                            returnKeyType='next'
                            placeholderTextColor={appColors.lightGrey}
                            style={styles.textViewInput}
                            maxLength={10}
                            value={mobileNo}
                            onChangeText={(data)=>{setMobileNo(data)}}
                            
                        />
                        <FontAwesomeIcon style={styles.validationIcon} icon={faLock} />
                    </View>
                    {mobileNoErrMsg.length != "" ?<Text style={[styles.errMsg,styles.failure]}>{mobileNoErrMsg}</Text>:<></> }

                    {
                        submitButtonType == "Verify OTP" ? <>
                        <View style={[styles.textViewMain]} >
                        <FontAwesomeIcon style={styles.startIcon} icon={faLock} />
                        <TextInput
                            placeholder="Enter your OTP"
                            autoCorrect={false}
                            returnKeyType='go'
                            placeholderTextColor={appColors.lightGrey}
                            style={styles.textViewInput}
                            keyboardType="numeric"
                            maxLength={6}
                            onChangeText={(data)=>{setOtp(data)}}

                        />
                        <FontAwesomeIcon style={styles.validationIcon} icon={faLock} />
                    </View>
                    {otpErrMsg.length != "" ?<Text style={[styles.errMsg,styles.failure]}>{otpErrMsg}</Text>:<></> }

                    
                    <Text style={styles.forgotPassword}>Resent OTP?</Text>
                    </>:<></>
                    }  
                    
                    {/*  */}
                
                </View>
                <TouchableOpacity onPress={sendOtpHandler}
                    style={[styles.loginButton]} >
                    <Text style={styles.loginButtonText}>{submitButtonType}</Text>
                </TouchableOpacity>
                {/* <Text style={styles.signupText}>Don't have an account ? 
                <Text style={styles.signupTextInside} onPress={()=>{
                        navigation.navigate('Register')
                    }}> Register</Text></Text> */}
            </View>

        </SafeAreaView>
    )
}