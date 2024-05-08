
import React, { useEffect, useState } from 'react'
import { Button, Input, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRegister, useSendCode, useVerify } from '../../api/auth';
import { useTranslation } from 'react-i18next';
import ReactCodeInput from 'react-verification-code-input';
import { toast } from 'react-toastify';
import Translate from '../../Components/Utils/Translate';
import { USER_EMAIL } from '../../config/AppKey';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/AuthReducer';
import { MailTwoTone } from '@ant-design/icons';
import { Header } from './HeaderComponent';

const Virefied = () => {
  
  const navigate = useNavigate();
  const {t} = useTranslation();
  const dispatch = useDispatch()

  const [isInvalid, setIsInvalid] = useState(false);
  const [Code, setCode] = useState(''); // State to track the entered verification code

  const { mutate: verifyMutate, isSuccess, isLoading ,data,isError,error} = useVerify();
  const { mutate: sendCodeMutate, isSuccess: codeSuccess } = useSendCode();

  const handleSubmit = async (code:any) => {
    
      //  verifyMutate({
      //   email: localStorage.getItem(USER_EMAIL), 
      //   verification_code: Code,
      // });

      navigate('/success_verify')
      toast.success(t('Verified Successfully'));

  };

    // useEffect(()=> {
    //   if(isSuccess){
    //     toast.success(t('Verified Successfully'))
    //     dispatch(register(data.data)) 
    //     navigate('/success_verify')
        
    //   }
    // },[isSuccess])
    
    // useEffect(()=> {
    //   if(isError){
        
    // }
    // },[isError])
   
  const handleSendCode = () => {

      if(codeSuccess){
        sendCodeMutate({
          email: localStorage.getItem(USER_EMAIL), 
        });
        toast.success(t('Code has been sent successfully to your email'));
      }else{
        toast.error(t('Failed to send code please try again'));
      }
  };

  return (
  <div className='Virefied'>
    <Header />
    
      <Result
      icon={<MailTwoTone twoToneColor={"#35c6c2"} height={8} />}
      className='Result'
      title={t("Verify Code Sent to Email")}
      subTitle={t("Please enter the verification code sent to your email to complete the verification process")}
      extra={
        <div>
          <ReactCodeInput
          type='text'
          className='ReactCodeInput'
          onComplete={(code) => setCode(code)} 
          />
          {
            isInvalid ? <p>{t("Verification code is invalid")}..</p> : "" 
          }
          <span onClick={handleSendCode} className='resend_code'>{t("Resend Code")}</span>
        </div>
      }
      children={<div className='button_container'><Button className='verify_button' onClick={handleSubmit}>{t("Submit")}</Button></div>}
    />
  </div>
    )
}

export default Virefied;
