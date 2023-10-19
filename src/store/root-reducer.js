import {combineReducers} from 'redux';
import { themeReducer } from "./theme/themeReducer.js";
import { countriesReducer } from "./countries/countriesReducer.js";
import { controlsReducer } from "./controls/controlsReducer.js";
import { detailsReducer } from "./details/detailsReducer.js";



export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer
});
