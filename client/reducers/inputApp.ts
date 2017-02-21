import { handleActions, Action } from 'redux-actions';
import {myData, MyData} from '../models/modelTitle';

const initialState = {
	table: [],
	filterTitle: [],
	status_load:" "
};

export default function inputApp(state = initialState, action) {

  switch (action.type) {
    case 'ADD':
    	let newTable = [...state.table, action.payload];
    	return {...state, table: newTable }
    case 'REQUEST_LIST':
    	return {...state, filterTitle: action.payload}
     case 'REQUEST_STATUS':
    	return {...state, status_load: action.payload}
    default:
      return state;  
  }
}