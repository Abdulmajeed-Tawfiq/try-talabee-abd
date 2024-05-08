import { Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useLogin } from '../../api/auth'
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/auth/AuthReducer'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import AuthHeader from './HeaderComponent'

function LoginForm({handleRegisterClick}:any) {
    const Navigate = useNavigate() 
    const {mutate , isSuccess ,isLoading, data,status,error} = useLogin()
    const dispatch = useDispatch()
    const [t] = useTranslation()
    
    
    const handelSubmit = (values:any)=>{
        // mutate({
        //     email:values['email'],
        //     password:values['password']
        //   })

        Navigate('/', { replace: true })
        toast.success('Logged in successfully')
      
      }

    useEffect(()=>{
      if(isSuccess){
        dispatch(login((data as any )?.data))
        Navigate('/', { replace: true })
      }
      else if((error as any)?.response?.status == 510){
        Navigate('/verfied')
      }

    },[isSuccess , Navigate, dispatch , data,error])

  return (
    <div className="form-container sign-in">
  <Formik 
        initialValues={{ email: '', password: '' }}
        onSubmit={handelSubmit}
      >
      <Form >
        <AuthHeader/>
        <h1 >{t("Sign In")}</h1>
        <div  className='login_dev'>
          <label>{t("Email")}</label>
          <Field name="email" type="email" placeholder={t('Email')} required autoFocus />
        </div>

        <div className='login_dev'>
          <label>{t("Password")}</label>
          <Field name="password" type="password" placeholder={t("Password")} required />
        </div>

        <LoadingButton  isLoading={isLoading}  >{t("Sign In")}</LoadingButton>
        <p className='navigateto' onClick={handleRegisterClick} >{t("or Register")}</p> 

      </Form>
    </Formik>
  </div>
  )
}

export default LoginForm