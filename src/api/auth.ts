import useAddMutation from "./helper/useAddMutation"

const API = {
    login:"login",
    register:"register",
    verify:`verify-code`,
    sendCode:`resend-verification-code`,
    
}


export const useLogin = ()=>useAddMutation("AUTH" , API.login)
export const useRegister= ()=>useAddMutation("AUTH" , API.register)

export const useVerify= ()=>useAddMutation("AUTH" , API.verify)
export const useSendCode= ()=>useAddMutation("AUTH" , API.sendCode)

