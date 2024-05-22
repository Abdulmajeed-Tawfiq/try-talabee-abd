import {  Rate, Skeleton } from 'antd';
import { HeartFilled, PlusOutlined } from '@ant-design/icons';
import useLoadingState from '../../Hooks/useLoadingState';
import useImageError from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import {useNavigate} from  'react-router-dom';
import { StoresArray } from '../../Backend/Stores';

const CardStore = (
  { item }:any
  ) => {
    const [loading, resetLoading] = useLoadingState(true, 2000);
    const navigate = useNavigate()
    const {isAuthenticated} = useAuth()
    const {t} = useTranslation()
    
    // const {mutate} = useAddToCart()
    // const {mutate:mutateAddFav} = useAddToFavourite()
    // const {mutate:mutateRemoveFav} = useRemoveFromFav()
    const itemm = StoresArray;

  return (
    <Skeleton className='unset' loading={loading} active >
      <div key={itemm?.id} className='Card_Product'>
        <div className='Card_Store_Top' >
          <span className='Left'>
            <div className='store_statues'>
              {
                true ? <div className='open'>open</div> : <div className='close'>close</div>
              }
            </div>
          </span>
          <span className='Right'>
            <HeartFilled className='AddFav_icon' onClick={()=>{
              // mutateAddFav({
              //   product_id:itemm?.id,
              //   })
                toast.success(t("added to favourite"))
                }}/>
          </span>
        </div>

        <div className='Card_Product_Mid' onClick={()=>navigate(`/store/${itemm.id}`)}>
          <img src={ itemm?.product_main_image} onError={useImageError} alt={itemm?.name}  />
        </div>

        <div className='Card_Product_Bottom'  >
          <div className='store_name' onClick={()=>navigate(`/store/${itemm.id}`)}>{itemm?.product_translations?.at(0)?.name}</div>
          <div className='rate'>
            <Rate allowHalf disabled defaultValue={itemm?.rate} />
          </div>
        </div>
        
      </div>

    </Skeleton>
  );
};

export default CardStore;

