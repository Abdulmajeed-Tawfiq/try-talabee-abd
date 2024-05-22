import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import { BigAdsData, CategoriesData, MovesAdsData, specialPropertiesData } from './HomeData'
import CategoriesSwiper from '../../Components/Home/CategoriesSwiper'
import {useHeroSectionData, useStoreData} from '../../Redux/DispatchData'
import StaticAds from '../../Components/Home/StaticAds'
import { useWindowResize } from '../../Hooks/useWindowResize'
import StoreSection from '../Store/StoreSection'


const Page = () => {

    const { Store } = useStoreData()
    const { DataHeroSection } = useHeroSectionData();
    const { windowWidth,handleResize } = useWindowResize();

  return (
    <Layout className='HomePage'>
      <HeroSection data={DataHeroSection} />
      <SpecialProperties data={specialPropertiesData} />
      <CategoriesSwiper data={CategoriesData} />
      {windowWidth >= 700 ? <MovesAds {...MovesAdsData} /> : <StaticAds {...MovesAdsData} />}
      <StoreSection data={Store}/>
      <BigAds data={BigAdsData} />
      <StoreSection data={Store}/>
    </Layout>
  )
}

export default Page