////  this card used in swiper cards product  ////


import React from 'react';
import {  Rate, Skeleton, Tooltip } from 'antd';
import { EyeFilled, HeartFilled, PlusOutlined } from '@ant-design/icons';
import { Currency, UserImageURL } from '../../Layout/app/Const';
import useLoadingState from '../../Hooks/useLoadingState';
import { Link } from 'react-router-dom';
import { BaseURL_IMAGE } from '../../api/config';
import useImageError from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { useAddToCart } from '../../api/cart';
import { toast } from 'react-toastify';
import { useAddToFavourite, useRemoveFromFav } from '../../api/wishlist';
import { PiHeartBreakFill } from "react-icons/pi";
import { useAuth } from '../../Hooks/useAuth';
import {useNavigate} from  'react-router-dom';
import { productsArray } from '../../Backend/Products';

const CardProduct = (
  { item }:any
  ) => {
    const [loading, resetLoading] = useLoadingState(true, 2000);
    const navigate = useNavigate()
    const {isAuthenticated} = useAuth()
    const {t} = useTranslation()
    
    // const {mutate} = useAddToCart()
    // const {mutate:mutateAddFav} = useAddToFavourite()
    // const {mutate:mutateRemoveFav} = useRemoveFromFav()
    const itemm = productsArray;

  return (
    <Skeleton className='unset' loading={loading} active >
      <div key={itemm?.id} className='Card_Product'>
        <div className='Card_Product_Top' >
          <span className='Left'>{itemm?.category?.category_translations?.at(0)?.name}</span>
          <span className='Right'>
            <Link to={`/product/${itemm.id}`}>
              <EyeFilled className='SingleOrder_icon' />
            </Link>
            <HeartFilled className='AddFav_icon' onClick={()=>{
              // mutateAddFav({
              //   product_id:itemm?.id,
              //   })
                toast.success(t("added to favourite"))
                }}/>
            <PiHeartBreakFill className='RemoveFav_icon' onClick={()=>{
              // mutateRemoveFav({
              //   product_id:itemm?.id,
              //   })
                toast.success(t("Removed From Favourite"))
                }}/>     
          </span>
        </div>

        <div className='Card_Product_Mid' onClick={()=>navigate(`/product/${itemm.id}`)}>
          <img src={ itemm?.product_main_image} onError={useImageError} alt={itemm?.name} width="100%" height="60%" />
        </div>

        <div className='Card_Product_Bottom'  >
          <div className='product_name' onClick={()=>navigate(`/product/${itemm.id}`)}>{itemm?.product_translations?.at(0)?.name}</div>
          <div className='rate'>
            <Rate allowHalf disabled defaultValue={itemm?.rate} />
          </div>
          <span>
            <div>
              <strong onClick={()=>navigate(`/product/${itemm.id}`)}> 
                {itemm?.product_price} {Currency}
              </strong>
              <small>
                {Number(itemm?.product_price) + Number(itemm?.product_price) * 10 / 100}
                {Currency}
              </small>
            </div>
            {
              isAuthenticated&&
            <div className='AddProduct' onClick={()=>{
              // mutate({
              //   product_id:itemm?.id,
              //   quantity:1
              // })
              toast.success('added to cart')
            }}>
              <Tooltip title={t("Add To Cart")}>
                <PlusOutlined />
              </Tooltip>
            </div>
          } 
          </span>
        </div>
        
      </div>

    </Skeleton>
  );
};

export default CardProduct;

