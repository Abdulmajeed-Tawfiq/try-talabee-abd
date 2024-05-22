
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TCardStore } from '../../Layout/app/Types';

interface StroeState {
    value: TCardStore
}

const initialState: StroeState = {
    value: {
        data: [],
        title: '',
        href: '',
        count: 0,
        icon: null,
        
    },
}

export const StoreSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStoreData: (state, action: PayloadAction<TCardStore>) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
})

export const { setStoreData } = StoreSlice.actions

export default StoreSlice.reducer