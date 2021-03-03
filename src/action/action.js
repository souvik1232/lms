 export  const logged = (token)=>{
    return{
        type:'LOGIN',
        payload:token
    }
}