const pattern = new RegExp("^[0-9]{10}$");


const validateMobileNo = (pMobileNo) => {
    console.log(pMobileNo,pMobileNo.length)
    let status = ""
    if (pMobileNo.length !== 10) {
        console.log(1)
        status= "Please put 10 digit mobile number";

    }else if (!pattern.test(pMobileNo)) {
        console.log(2)
        status= "Invalid number format";
    }else{
        status="";
    }

    console.log(3)
    return status;
}


export const validateOTP = (pOTP) => {
    let status = ""
    if (pOTP.length !== 6) {
        status= "Please put 6 digit OTP";

    }else{
        status="";
    }
    return status;
}

export default validateMobileNo