import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../service/rest.service';
//import { HttpClient } from "@angular/common/http";
import { MatTableDataSource  } from "@angular/material/table";
import { CovidInfo } from '../model/Covidinfo';
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  coviddata : CovidInfo[];
  dataSource = new MatTableDataSource<CovidInfo>(this.coviddata);
  displayedColumns : string[] = ['Pais', 'Casos'];

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private _SERVICEREST: RestService ) { }

  ngOnInit(): void {
    this.getValue();

    // **********  REST API METODO SENCILLO *****************

    // this._http.get("https://corona.lmao.ninja/countries")
    // .subscribe((data)=>{
    //   console.log(data);
    // })

    // **********  REST API METODO SENCILLO *****************
  }
  public getValue(){
    let values = this._SERVICEREST.getInfoCovid();
    values.subscribe((val) => {
    this.dataSource.data = val as CovidInfo[];
    this.dataSource.paginator = this.paginator;
  })
  }

}
