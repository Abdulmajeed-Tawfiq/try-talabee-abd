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
import { getLoginValidationSchema } from '../profile/formUtils'

function LoginForm({handleRegisterClick}:any) {
    const Navigate = useNavigate() 
    const {mutate , isSuccess ,isLoading, data,status,error} = useLogin()
    const dispatch = useDispatch()
    const [t] = useTranslation()
    
    
    const handelSubmit = (values:any)=>{
        mutate({
            phone:values['phone'],
            password:values['password']
          })

        // Navigate('/', { replace: true })
        // toast.success('Logged in successfully')
      
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
        initialValues={{ phone: '', password: '' }}
        validationSchema={getLoginValidationSchema()}
        onSubmit={handelSubmit}
      >
      {({ errors, touched }) => (
        <Form >
          <AuthHeader/>
          <h1 className='login_title' >{t("Sign In")}</h1>
          <div  className='login_dev'>
            <Field name="phone" type="text" placeholder={t('Phone')} />
            {touched.phone && <label>{errors.phone}</label>}
          </div>

          <div className='login_dev'>
            <Field name="password" type="password" placeholder={t("Password")} />
            {touched.password && <label>{errors.password}</label>}
          </div>

          <LoadingButton isLoading={isLoading} type="submit" >{t("Sign In")}</LoadingButton>
          <p className='navigateto' onClick={handleRegisterClick} >{t("or Register")}</p> 

        </Form>
      )}
    </Formik>
  </div>
  )
}

export default LoginForm