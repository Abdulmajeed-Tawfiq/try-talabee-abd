import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import ProductsHeader from '../Product/ProductsHeader';
import ProductsFilter from '../Product/ProductsFilter';
import StoresCards from './StoresCards';
// import ProductsHeader from './ProductsHeader';
// import ProductsFilter from './ProductsFilter';
// import ProductsCards from './ProductsCards';

const Stores = () => {

  const [style, setstyle] = useState(true)
  const Props = { style, setstyle };

  return (
    <Layout className='Products'>
      <ProductsHeader {...Props} />
      <div className='Products_Body'>
        <ProductsFilter />
          <StoresCards {...Props} />
      </div>
    </Layout>
  )
}

export default Stores