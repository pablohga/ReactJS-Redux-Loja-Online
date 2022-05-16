const INITIAL_STATE = {
  showMessage: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SHOW_MESSAGE:
      return { ...state, showMessage: true };
    case Types.HIDE_MESSAGE:
      return { ...state, showMessage: false };
    default:
      return state;
  }
};
//Actions types
export const Types = {
  SHOW_MESSAGE: 'SHOW_MESSAGE',
  HIDE_MESSAGE: 'HIDE_MESSAGE'
};

//Actions Creators

export const Creators = {
  showMessage: () => ({
    type: Types.SHOW_MESSAGE
  }),
  hideMessage: () => ({
    type: Types.HIDE_MESSAGE
  })
};
/* 
import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  showMessage: false
};
export const showMessage = createAction('HIDE_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(INITIAL_STATE, {
  [showMessage.type]: (state) => ({ ...state, showMessage: true }),
  [hideMessage.type]: (state) => ({ ...state, hideMessage: true })
});




export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case showMessage.type:
      return { ...state, showMessage: true };
    case hideMessage.type:
      return { ...state, showMessage: false };
    default:
      return state;
  }
}; */
