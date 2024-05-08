import Layout from '../../Layout/app/Layout'
import { useGetFav } from '../../api/wishlist'
import { useTranslation } from 'react-i18next'
import React from 'react';
import { Spin } from 'antd';
import CardProduct from '../../Components/Home/CardProduct';
import ProductPagination from '../Product/ProductPagination';
import { fakeArray } from '../../Backend/Wishlist';

const FavouritePage = ({ isLoading }: any) => {

  const {t} = useTranslation();
  
  const {data}  = useGetFav(); 
  
  return (
    <Layout className='WishList darkmode_bg'>
      <h1 className="WishList_Header pt-5 pb-4">
          {t("My WishList")} :
      </h1>

    <div className={'ProductsCards'}>
      {isLoading ? (
        <Spin />
      ) : (
        fakeArray?.map((item: any, index: any) => (
          <span className={'Fav_Single_Card'} key={index}>
            <CardProduct item={item} />
          </span>
        ))
      )}
    </div>
    <div className='pt-3 pb-5'>
      <ProductPagination data={data?.pagination} />
    </div>

    </Layout>
  )
}

export default FavouritePage