import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import SearchArtists from './initialState';
import rootReducers from '../reducers';
import apiMiddleware from '../middlewares/apiMiddleware';

const middlewares = [thunk, apiMiddleware];

export default createStore(
  rootReducers,
  SearchArtists,
  composeWithDevTools(applyMiddleware(...middlewares))
);