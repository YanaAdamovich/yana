import {Dispatch} from 'redux';
import {myData} from '../models/modelTitle';
import {Promise} from 'es6-promise';

function handlerFilterTitle (allTitle, value){
   let filterTitle = [];
   for (let i = 0; i < allTitle.length; i++ ){
      if (allTitle[i].company.substring(0, value.length).toLowerCase() === value.toLowerCase() ){
        filterTitle.push( allTitle[i] );
      } 
    }
    function compareNumeric(a, b) {
    if (a.company > b.company) return 1;
    if (a.company < b.company) return -1;
  }
  if(filterTitle.length===0){
    filterTitle = [{"company":"No result!!"}];
  }
    let filterSort = filterTitle.sort(compareNumeric);
    return filterSort;
}


const requestList= function(value:string){
  return{
    type:'REQUEST_LIST',
    payload:value 
  }
};
const requestStatus= function(status:string){
  return{
    type:'REQUEST_STATUS',
    payload:status 
  }
};

const getFilterList = function(value: string, dispatch: Dispatch<{}>){
  dispatch(requestStatus("LOAD_START"));
  let promise = getAsyncList(value, dispatch);
  promise.then(
      function (result: any){
        dispatch(requestStatus("LOAD_FINISHED"));        
        dispatch(requestList(result)); 
      });
};

const getAsyncList = function(value: string, dispatch: Dispatch<{}>){
   let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let allTitle = myData;
      let filterResult = handlerFilterTitle(allTitle, value);
      resolve(filterResult);
    },1000)
   });
   return promise;
   
};
export {getFilterList} 