
const BASE_URL = "https://rsfhb42f-8888.asse.devtunnels.ms/api"


export const endpoints = {

    LoginApi: `${BASE_URL}/auth/login`,
    userRegister: `${BASE_URL}/auth/register`,
    ForgotPassword: `${BASE_URL}/auth/forgot-password`,
    OtPVerify: `${BASE_URL}/auth/verify-otp`,
    AddNewPassword: `${BASE_URL}/auth/reset-password`


}