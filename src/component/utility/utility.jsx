const emailpattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const passwordpattern= /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/;
const namepattern = /^[a-zA-Z ]{2,30}$/;
const mobilepattern = /^\s*\+\s*\d{1,3}\s*-\s*\d{9, 10}\s*$/;
const idpattern = /^[a-zA-Z ]{2,30}$/;
module.exports = {
    isemailValid(email){
        if(email.trim().length===0){
            return false;
        }
        let regex = new RegExp(emailpattern);
        return regex.test(email)
    },
    ispasswordValid(password){
        let regex = new RegExp(passwordpattern);
        return regex.test(password)
    },
    isnameValid(name){
        let regex= new RegExp(namepattern);
        return regex.test(name)
    },
    ismobileValid(mobile){
        let regex= new RegExp(mobilepattern);
        return regex.test(mobile)
    },
    isidValid(id){
        let regex= new RegExp(idpattern);
        return regex.test(id)
    }
}