import { Button } from 'antd';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaUserCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Header } from './HeaderComponent';

const SuccessVerify = () => {

    const Navigate = useNavigate();
    const {t} = useTranslation();
    
    const handleNavigate =() => {
        Navigate('/')
    }
  return (
    <div className='SuccessVerify_container'>
      <Header />
        <div className='SuccessVerify'>
          <FaUserCheck  />
          <h5>{t("Your Email has been verfied successfully")}..
              <p>{t("You can continue using the website")}.</p>
          </h5>
          <Button onClick={handleNavigate}>{t("Home")}</Button>
      </div>
    </div>
  )
}

export default SuccessVerify