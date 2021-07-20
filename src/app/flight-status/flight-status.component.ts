import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Status } from '../model/status';
import { FlightStatusService } from '../flight-status.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css']
})

export class FlightStatusComponent implements OnInit {
  baseUrl:string = 'https://api.airfranceklm.com/opendata/flightstatus/?origin=AMS';
  token:string = '6v7p4zdr3aztawevneaqdb6r';
  displayedColumns: string[] = ['flightDate', 'flightId', 'flightCarrier', 'flightNumber','flightStatus'];
  dataSource: MatTableDataSource<Status>;
  dataSourceVal: Status[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator ;  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private flightService : FlightStatusService) { 
  
  this.flightService.allStatusDetails(this.baseUrl,this.token).subscribe(data => {
  if(data){
    this.dataSourceVal = data.operationalFlights.map(item => {
      return {
        flightScheduleDate : item.flightScheduleDate,
        id : item.id,
        name : item.airline.name,
        flightNumber : item.flightNumber,
        flightStatusPublicLangTransl : item.flightStatusPublicLangTransl
      }
  });
     this.dataSource = new MatTableDataSource(this.dataSourceVal);   
  if(this.dataSource){
  this.dataSource.paginator = this.paginator;  
  this.dataSource.sort = this.sort; 
   }
  }
  }, 
  (err: HttpErrorResponse) => {
        console.log(err.message);
    }
  );
  }

  ngOnInit(): void {
    if(this.dataSource){
    this.dataSource.paginator = this.paginator;  
    this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {  
    if(this.dataSource){
    this.dataSource.filter = filterValue.trim().toLowerCase();  
    if (this.dataSource.paginator) {  
      this.dataSource.paginator.firstPage();  
    }  
  }
  }  

}
