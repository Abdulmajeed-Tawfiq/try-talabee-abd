import React from 'react'
import { TCardStore } from '../../Layout/app/Types'
import SubTitle from '../../Components/Home/SubTitle'
import StoreSwiper from '../../Components/Home/StoreSwiper'

type TStoreSection = {
  data: TCardStore 
}

const StoreSection: React.FC<TStoreSection> = ({ data }) => {
  const { title, href, count, icon } = data
  const TitleProps = { title, href, count, icon }
  if (data?.data?.length > 0) {
    return (

      <div className='ProductSection pb-5'>
        <SubTitle {...TitleProps } />
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