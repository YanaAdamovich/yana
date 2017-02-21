import * as React from 'react';

interface TableProps {
  table: string[]
}

interface TableState {
  table: string[]
}

class Table extends React.Component<TableProps, TableState> {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    return (
          <div className = 'table'>
          {
             this.props.table.map(function (elem, i){
                return <p key={i}>{elem}</p>
              })
          }
          </div>
    );
  }
}

export default Table;   