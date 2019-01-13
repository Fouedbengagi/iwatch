import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import finReducer from "./financeReducer";


const rootPersistConfig = {
    key: 'root',
    storage: storage,
};

const rootReducer = combineReducers({
	fin: finReducer,
});

export default persistReducer(rootPersistConfig, rootReducer)