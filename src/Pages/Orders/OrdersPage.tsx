import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'

import { Spin } from 'antd';
import OrdersForm from './OrdersForm';
import { useGetAllOrders } from '../../api/orders';
import LoadingPage from '../Loading/LoadingPage';
import NotFoundPage from '../../Layout/app/NotFoundPage';
import { OrderData } from '../../Backend/Order';
import { fakeError, fakeLoading } from '../../Backend/FakeData';

const Orders = () => {

  // const { data , isLoading , isError} = useGetAllOrders();

  if(fakeLoading){
    return <LoadingPage/>
  }
  if(fakeError){
    return <NotFoundPage/>
  }
  
  return (
    <Layout className='Orders without_background'>
     <OrdersForm data={OrderData}/>
    </Layout>
  )
}

export default Orders

