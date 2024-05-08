import React from 'react'
import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link, useNavigate } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../Hooks/useAuth'
import { logout } from '../../Redux/auth/AuthReducer'
import { useDispatch } from 'react-redux'
import { BsFillPersonFill } from 'react-icons/bs'

const TopBar = () => {

  const {isAuthenticated} = useAuth()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {t} = useTranslation();


  return (
    
    <header className='Header'>
      <nav className='top_bar'>
        <div className="Menu_Group">
          <Theme/>
          <Translate/>
        </div>

     <Link to={'/'} >  <h1>TRY TALABEE</h1> </Link>

        <ul className='Media_Icon'>
          {
            isAuthenticated 
            ? <h1 onClick={() => {dispatch(logout())}} > {t("Logout")}</h1>
            : <div>
              <Link className='Link' to={'/profile'} onClick={()=>navigate('/profile' )} >
              <BsFillPersonFill />
                <span className='text'>
                  <span>user </span>
                  (<span>role</span>)
                </span>
              </Link>
            </div>
          }
        </ul>

        <div className='MenuNav'>
        <MenuFoldOutlined/>
        </div>
      </nav>
    </header>
  )
}

export default TopBar