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
    <Layout className='WishList without_background'>
      <h1 className="WishList_Header">
          {t("My WishList")} :
      </h1>

    <div className={'ProductsCards'}>
      {isLoading ? (
        <Spin />
      ) : (
        fakeArray?.map((item: any, index: any) => (
          <span className={'RemoveFavCard'} key={index}>
            <CardProduct item={item} />
          </span>
        ))
      )}
    </div>
    <ProductPagination data={data?.pagination} />

    </Layout>
  )
}

export default FavouritePage