import * as React from 'react';
import {myData, MyData} from '../models/modelTitle';

interface InputAppProps {
	handlerClick?: (string) => void;
	handlerTable: (string) => void;
	handlerFilterList: (string) => void;
	filterTitle?: MyData[];
	status_load?: string;
}

interface InputAppState {
	InputValue?: string;  
	showData?: boolean;
	allTitle?: MyData[];
	filterTitle?: MyData[];
}

class InputApp extends React.Component<InputAppProps, InputAppState> {
  constructor(props, context) {
    super(props, context);
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerFocus = this.handlerFocus.bind(this);
    this.handlerBlur = this.handlerBlur.bind(this);
    this.elemClick = this.elemClick.bind(this);
    let initState:InputAppState = {InputValue:'', showData: false, allTitle: myData, filterTitle: myData };
    this.state = initState;  
  }
  handlerClick(e){
  	let value = this.state.InputValue;
  	this.props.handlerTable(value);

  }
  handlerChange(e){
  	this.setState({InputValue: e.target.value});
  	let value = e.target.value;
  	this.props.handlerFilterList(value);
  }

  handlerFocus(e){
  	this.setState({showData: true});
  	let value = e.target.value;
  	this.props.handlerFilterList(value);
  }
  handlerBlur(e){
  	// this.setState({showData: false});
  }
  elemClick(e){
  	this.setState({InputValue: e.target.innerText});
  	let value = e.target.innerText;
  	this.props.handlerFilterList(value);
  }
  render() {	   
    return (
        <div className = 'inputApp'>
        	<input className="input_app" value = {this.state.InputValue} 
        	 onBlur={this.handlerBlur} onFocus={this.handlerFocus} onChange={this.handlerChange} type="text" placeholder="Search Notes" />
           	<div id="id" className="spinner"></div>
            {
            	this.state.showData?
            	<ul className="output_app">
            		{this.props.filterTitle.map((elem, i) => {
                		return <li onClick={this.elemClick} key={i}>{elem.company}</li>
              		})}
	            </ul>:' '
        	}
        	{
        		this.props.status_load==="LOAD_START"? <p>{document.getElementById('id').classList.add('class')}</p>: 
        		this.props.status_load==="LOAD_FINISHED"? <p>{document.getElementById('id').classList.remove('class')}</p>:
        		""
        	}
        </div>
    );
  }
}

export default InputApp;   