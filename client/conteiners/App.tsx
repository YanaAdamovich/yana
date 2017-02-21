import * as React from 'react';
import { connect } from 'react-redux';
import InputApp from '../components/InputApp';
import Table from '../components/Table';
import {getAddToList, getFilterList} from '../actions/action';
import '../styles/style.css';
import {myData, MyData} from '../models/modelTitle';
interface AppProps {
  table?: string[];
  handlerTable?: (string) => void;
  handlerFilterList: (string) => void;
  filterTitle?: MyData[];
  status_load?: string;
}
 
class App extends React.Component<AppProps, void> {
  render() {
    const {handlerTable, table, handlerFilterList, filterTitle, status_load} = this.props;
    return (
      <div className="parent">
        <div className="app">
          <InputApp handlerTable={handlerTable} handlerFilterList={handlerFilterList} filterTitle={filterTitle} status_load={status_load}/>
          <Table table={table}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  table: state.inputApp.table,
  filterTitle: state.inputApp.filterTitle,
  status_load: state.inputApp.status_load
});


const mapDispatchToProps = dispatch=> ({
   handlerFilterList: (value: string)=> {getFilterList(value, dispatch)}
});

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
