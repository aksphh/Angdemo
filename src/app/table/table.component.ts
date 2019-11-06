import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { DataModal } from '../DataModal';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;
  datalist:DataModal[];
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //displayedColumns = ['id', 'name'];

  constructor(private _service:DataService){    
  }
  ngOnInit(){
    this._service.getData()
    .subscribe(res => 
      {
        console.log(res);
        this.datalist=res;
      });
  }
  
  ngAfterViewInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort);

  }
}
