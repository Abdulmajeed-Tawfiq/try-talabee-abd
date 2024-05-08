import { Field, Form, Formik, useFormikContext } from 'formik'
import React, { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../api/auth';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/AuthReducer';
import { useTranslation } from 'react-i18next';
// import Select from 'react-select'
//@ts-ignore
import countryList from 'react-select-country-list'
//@ts-ignore
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { USER_EMAIL } from '../../config/AppKey';
import AuthHeader from './HeaderComponent';

function RegisterForm({ handleLoginClick }: any) {
  const navigate = useNavigate()
  const { mutate, isSuccess, data , isLoading } = useRegister()
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [isVirfied, setisVirfied] = useState(false)

  const handelSubmit = (values: any) => {
    // mutate(
    //   {
    //     name: values['name'],
    //     email: values['email'],
    //     password: values['password'],
    //     country:value,
    //     phone: values['phone']
    //   }
    // )
      navigate('/verfied', { replace: true })

   return localStorage.setItem(USER_EMAIL , values.email );
  }


  // useEffect(() => {
  //   if (isSuccess) {
  //     // dispatch(register((data as any)?.data))
      
  //     navigate('/verfied', { replace: true })
  //   }
  // }, [isSuccess, navigate, data , dispatch])


  const options = useMemo(() => countryList().getData(), [])
  const formik = useFormikContext();

  const SelecthandleChange = (value:any,label:any) => {

    setValue(label?.label)

 };
 const form = useRef<any>(null);

 const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (form.current) {
    emailjs.sendForm('service_49y5tqk', 'template_w4976q5', form.current, 'ivQFaIMbNe3DbNhA0')
      .then((result:any) => {
        form.current.reset();
        toast.success(t('contact.emailSentSuccess'));
      })
      .catch((error:any) => {
      });
  }
};

  return (
    <div className="form-container sign-up">
      <Formik
        initialValues={{ name: '', email: "", password: '',country:"", phone:"" }}
        onSubmit={handelSubmit}
      >
        <Form ref={form}>
          
          <AuthHeader/>
          <h2 >{t("Create Account")}</h2>
          <div className='login_dev'>
            <Field name="name" type="text" placeholder={t("Name")} />
          </div>

          <div className='login_dev'>
            <Field name="email" type="email" placeholder={t("Email")} />
          </div>

          {/* <div className='login_dev'>
            <Select
            style={{ width: "100%" }}
            onChange={SelecthandleChange}
            options={options}
            placeholder="choose your country"
            />
          </div> */}

          <div className='login_dev'>
            <Field  name="phone" type="text" placeholder={t("phone")} />
          </div>

          <div className='login_dev'>
            <Field name="password" type="password" placeholder={t("password")} />
          </div>

          <LoadingButton isLoading={isLoading}>{t("Sign Up")}</LoadingButton >
          <p className='navigateto' onClick={handleLoginClick} >{t("or login")}</p>

        </Form>
      </Formik>

    </div>
  )
}

export default RegisterForm