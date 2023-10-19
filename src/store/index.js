import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'


import * as api from '../config.js';
import { rootReducer } from "./root-reducer.js";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({
      client: axios,
      api,
    })
  )
))

export const persister = persistStore(store)
