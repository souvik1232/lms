export const LOGIN = 'LOGIN'
export  const logged = (token)=>{
    return{
        type:LOGIN,
        payload:token
    }
}