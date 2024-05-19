const checkUserNameAvailibility =async (pUserName)=>{
    return await fetch("http://172.26.176.1:8080/auth/available/user/"+pUserName)
    .then(reponse=>reponse.json())
    ;
}

export default checkUserNameAvailibility;