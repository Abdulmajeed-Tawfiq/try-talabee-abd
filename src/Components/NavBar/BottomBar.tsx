import DropdownMenu from '../Ui/DropdownMenu'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BottomBar = () => {

  const {t, i18n} = useTranslation();
  const  path = useLocation()
  
  return (
    <div className="BottomBar">
      {path?.pathname !== '/Products' && i18n.language === 'en' &&<DropdownMenu/> }
      <div className='NavMenus'>
      <Link className='Link' to={'/'} >  <h1>{t("home")}</h1> </Link>
      <Link className='Link' to={'/about'} >  <h1>{t("about")}</h1> </Link>
      <Link className='Link' to={'/privacy'} >  <h1>{t("Privacy")}</h1> </Link>
      <Link className='Link' to={'/contact'} >  <h1>{t("contact")}</h1> </Link>
      <Link className='Link' to={'/partner'} >  <h1>{t("partner")}</h1> </Link>
      <Link className='Link' to={'/Products'} >  <h1>{t("Products")}</h1> </Link>
      <Link className='Link' to={'/orders'} >  <h1>{t("orders")}</h1> </Link>
      </div>
      {path?.pathname !== '/Products' && i18n.language === 'ar' &&<DropdownMenu/> }
    </div>
  )
}

export default BottomBar