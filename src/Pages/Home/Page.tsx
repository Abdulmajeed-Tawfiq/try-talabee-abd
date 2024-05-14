import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import ProductSection from '../../Components/Home/ProductSection'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import { BigAdsData, CategoriesData, MovesAdsData, specialPropertiesData } from './HomeData'
import CategoriesSwiper from '../../Components/Home/CategoriesSwiper'
import {useHeroSectionData, useProductData} from '../../Redux/DispatchData'
import StaticAds from '../../Components/Home/StaticAds'
import { useWindowResize } from '../../Hooks/useWindowResize'


const Page = () => {

    const { Product } = useProductData()
    const { DataHeroSection } = useHeroSectionData();
    const { windowWidth,handleResize } = useWindowResize();

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