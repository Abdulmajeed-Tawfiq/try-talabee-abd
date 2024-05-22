import React from 'react'
import SubTitle from './SubTitle'
import { TCardStore } from '../../Layout/app/Types'
import { Store } from '../../Pages/Home/HomeData'
import StoreSwiper from './StoreSwiper'

type TStoreSection = {
  data: TCardStore 
}

const StoreSection: React.FC<TStoreSection> = ({ data }) => {
  const { title, href, count, icon } = data
  const TitleProps = { title, href, count, icon }
  if (data?.data?.length > 0) {
    return (

      <div className='ProductSection pb-5'>
        <SubTitle {...TitleProps} />
        <div className='Cards'>
          <StoreSwiper data={data?.data} />
        </div>
      </div>
    )
  }
  else{
    return null
  }

}

export default StoreSection