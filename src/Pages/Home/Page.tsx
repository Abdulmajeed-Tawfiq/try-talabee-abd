import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import ProductSection from '../../Components/Home/ProductSection'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import { BigAdsData, CategoriesData, MovesAdsData, specialPropertiesData } from './HomeData'
import CategoriesSwiper from '../../Components/Home/CategoriesSwiper'
import {useHeroSectionData, useProductData} from '../../Redux/DispatchData'
import { useEffect, useState } from 'react'
import StaticAds from '../../Components/Home/StaticAds'


const Page = () => {

    const { Product } = useProductData()
    const { DataHeroSection } = useHeroSectionData();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
   }, []);

  return (
    <Layout className='HomePage'>
      <HeroSection data={DataHeroSection} />
      <SpecialProperties data={specialPropertiesData} />
      <CategoriesSwiper data={CategoriesData} />
      {windowWidth >= 700 ? <MovesAds {...MovesAdsData} /> : <StaticAds {...MovesAdsData} />}
      <ProductSection data={Product}/>
      <BigAds data={BigAdsData} />
      <ProductSection data={Product}/>
    </Layout>
  )
}

export default Page