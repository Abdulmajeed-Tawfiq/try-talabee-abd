import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  birthday: string;
  gender: string;
}

// export const initialValues: FormValues = {
//   name: "name",
//   email: "email@em.cp",
//   phone: "3333333333",
//   country: "syria",
//   password: "***************",
// };

export const getInitialValues = (): FormValues => {
  return {
    name: "name",
    email: "email@em.cp",
    phone: "3333333333",
    country: "syria",
    password: "***************",
    birthday: "birthday",
    gender: "gender",
  }
}


export const getRegisterValidationSchema = () => {
  return Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  })
}

export const getLoginValidationSchema = () => {
  return Yup.object({
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  })
}