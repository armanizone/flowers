import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import cartReducer from './slices/cartSlice';

import storage from 'redux-persist/lib/storage'
import { 
  persistReducer, 
  persistStore,   
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER, 
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({
  cart: cartReducer, 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
    // {
      // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = useAppDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector