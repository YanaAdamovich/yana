import { handleActions, Action } from 'redux-actions';
import {myData, MyData} from '../models/modelTitle';

const initialState = {
	filterTitle: [],
	statusLoad:" "
};

export default function inputApp(state = initialState, action) {

  switch (action.type) {
    case 'REQUEST_LIST':
    	return {...state, filterTitle: action.payload}
     case 'REQUEST_STATUS':
    	return {...state, statusLoad: action.payload}
    default:
      return state;  
  }
}