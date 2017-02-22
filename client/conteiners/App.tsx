import * as React from 'react';
import { connect } from 'react-redux';
import InputApp from '../components/InputApp';
import Table from '../components/Table';
import {getFilterList} from '../actions/action';
import '../styles/style.css';
import {myData, MyData} from '../models/modelTitle';
interface AppProps {
  handlerTable?: (string) => void;
  handlerFilterList: (string) => void;
  filterTitle?: MyData[];
  statusLoad?: string;
}
 
class App extends React.Component<AppProps, void> {
  render() {
    const {handlerTable, handlerFilterList, filterTitle, statusLoad} = this.props;
    return (
      <div className="parent">
        <div className="app">
          <InputApp handlerTable={handlerTable} handlerFilterList={handlerFilterList} filterTitle={filterTitle} statusLoad={statusLoad}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filterTitle: state.inputApp.filterTitle,
  statusLoad: state.inputApp.statusLoad
});


const mapDispatchToProps = dispatch=> ({
   handlerFilterList: (value: string)=> {getFilterList(value, dispatch)}
});

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
