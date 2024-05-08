import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import { Product  } from '../../Pages/Home/HomeData'
import { Button, Collapse, CollapseProps, RadioChangeEvent, Rate } from 'antd'
import { Currency } from '../../Layout/app/Const'
import ProductSection from '../../Components/Home/ProductSection'
import { ProductSectionData } from '../Home/HomeData'
import { useTranslation } from 'react-i18next'

const OneProduct = () => {

  const {t} = useTranslation();

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const descriptionWords = Product?.description?.split(' ');
  const label = descriptionWords?.slice(0, 3).join(' ');
  const remainingDescription = descriptionWords?.slice(5).join(' ');

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: label,
      children: <p>{remainingDescription}</p>,
    }
  ];

  return (
    <Layout className='Product'>
      <div className='Product_Info'>
        <div className='Product_Left'>
          <img src={Product?.img} alt={Product?.name} height="60%" />

        </div>
        <div className='Product_Right'>
          <h3>{Product?.name}</h3>
          <div>
            <h6>{t("Name")}  : </h6> <h6>{Product?.brand}</h6>
          </div>
          <div>
            <h6>{t("Ratings")}  : </h6> <h6><Rate allowHalf disabled defaultValue={Product?.rate} /></h6>


          </div>
          <div className='Product_Description'>
            <h6>{t("Description")}  : </h6>
            <Collapse ghost items={items} />

          </div>
          <div>
            <h6 >{t("Price")}  : </h6> <h6 className='Price'> {Product?.price} {Currency} </h6>

          </div>
          <div>
          </div>
          <div className='buttons_container'>
            <Button type="primary" block>
              {t("Add To Cart")}
            </Button>
            <Button type="primary" block>
              {t("Add To Favourite")}
            </Button>
          </div>
        </div>
      </div>
      <ProductSection data={ProductSectionData} />
      <ProductSection data={ProductSectionData} />
    </Layout>
  )
}

export default OneProduct