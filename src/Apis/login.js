
const sendOTP =async (pMobileNo)=>{

    const config={
        method:'POST',
        body:JSON.stringify({
            mobileNo : pMobileNo
            
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    }
    
    console.log('calling to api')
    return await fetch("http://192.168.31.154:8080/auth/sendotp",config)
    .then(reponse=>reponse.json())
    .catch((error) => {
        console.log(error)
      });
    ;
}

export const verifyOTP =async (pOTPObject)=>{

    const config={
        method:'POST',
        body:JSON.stringify(pOTPObject),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    }
    
    console.log('calling to api')
    return await fetch("http://192.168.31.154:8080/auth/verifyotp",config)
    .then(reponse=>reponse.json())
    .catch((error) => {
        console.log(error)
      });
    ;
}


export default sendOTP;