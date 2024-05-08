import React from 'react'
import SubTitle from './SubTitle'
import CardSwiper from './CardSwiper'
import { TCardProduct } from '../../Layout/app/Types'

type TProductSection = {
  data: TCardProduct 
}

const ProductSection: React.FC<TProductSection> = ({ data }) => {
  const { title, href, count, icon } = data
  const TitleProps = { title, href, count, icon }
  if (data?.data?.length > 0) {
    return (

      <div className='ProductSection'>
        <SubTitle {...TitleProps} />
        <div className='Cards'>
          <CardSwiper data={data?.data} />
        </div>
      </div>
    )
  }
  else{
    return null
  }

}

export default ProductSection