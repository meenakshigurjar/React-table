import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject,Page,Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import './App.css';
export default class App extends React.Component {
  onLoad() {
    let gridElement = document.getElementById('grid');
    if (gridElement && gridElement.ej2_instances[0]) {
        let gridInstance = gridElement.ej2_instances[0];
        /** height of the each row */
        const rowHeight = gridInstance.getRowHeight();
        /** Grid height */
        const gridHeight = gridInstance.height;
        /** initial page size */
        const pageSize = gridInstance.pageSettings.pageSize;
        /** new page size is obtained here */
        const pageResize = (gridHeight - (pageSize * rowHeight)) / rowHeight;
        gridInstance.pageSettings.pageSize = pageSize + Math.round(pageResize);
    }
}
    constructor() {
        super(...arguments);
        this.FilterOptions = {
            type: 'Menu'
        };
        this.pageOptions = {
          pageSize: 8, pageSizes: true
      };
    }
    render() {
        return <GridComponent dataSource={data} filterSettings={this.FilterOptions} allowFiltering={true} height={273} allowPaging={true} pageSettings={this.pageOptions} allowSorting={true} >
          <ColumnsDirective>
              <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='100'/>
              <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
              <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
              <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
          <Inject services={[Filter,Page,Sort]}/>
      </GridComponent>;
    }
}
;
