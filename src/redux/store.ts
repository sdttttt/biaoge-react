import { createStore, combineReducers } from 'redux';
import { userChange } from './reducers';
import * as persist from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const storageConfig = {
  key: 'root', // 必须有的
  storage: storage, // 缓存机制
  blacklist: [], // reducer 里不持久化的数据,除此外均为持久化数据
};

//const persistReducers = persist.persistReducer(storageConfig , userChange);
const persistReducers = persist.persistCombineReducers(storageConfig, {
  userStatus: userChange,
});
const store = createStore(persistReducers);

export const persistStore = persist.persistStore(store);
export default store;
