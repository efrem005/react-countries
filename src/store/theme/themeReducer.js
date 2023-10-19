import {SET_THEME} from './themeActions.js';

export const themeReducer = (state = 'light', {type, payload}) => {
  switch(type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
}
