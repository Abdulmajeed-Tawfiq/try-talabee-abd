import React from 'react'
import CardProduct from '../../Components/Home/CardProduct'
import { useAllProductsData } from '../../Redux/DispatchData'
import ProductPagination from './ProductPagination'

const ProductsCards = ({ style, setstyle }: any) => {

  const { AllProduct } = useAllProductsData();

  return (
    <div className={style ? "ProductsCards" : "ProductsCards2"} >
      {
        AllProduct?.map((item: any, index: any) => {
          return (
            <div className={style ? "normalCard" : "FullCard"} key={index}><CardProduct item={item} /></div>
          )})
      }
      <ProductPagination />
    </div>

  )
}

export default ProductsCards