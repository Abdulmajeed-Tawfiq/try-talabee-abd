import * as Yup from 'yup';


export const GenderOption = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

export const getLoginInitialValues = () => {
  return ({
    phone: '+963111111111',
    password: '123456789',
  })
}

export const getRegisterInitialValues = () => {
  return ({
    first_name: 'abd',
    last_name: 'tawfik',
    email: "abd@gmail.com",
    password: '00000000',
    phone: "0000",
    birthday: "2024-10-17",
    gender: "male"
  })
}




export const getLoginValidationSchema = () => {
  return Yup.object({
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  })
}


export const getRegisterValidationSchema = () => {
  return Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  })
}


