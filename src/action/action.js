export const MENTOR = 'MENTOR'
export const STUDENT = 'STUDENT'
export const mentordata = (data)=>{
    return{
        type:MENTOR,
        payload:data
    }
}
export const studentdata = (data)=>{
    return{
        type:STUDENT,
        payload:data
    }
}