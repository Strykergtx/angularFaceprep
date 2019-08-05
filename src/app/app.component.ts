import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { SearchService } from './search.service';
import { Search } from './Search';
import { SEARCH } from './Search-Stock';
import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Stockproj';
  //mystring ="Yo Mama";
  LineChart=[];
  private CurrentSearchValue : Search;
  private pastSearchValue : Search[] = []
  constructor(private searchservice: SearchService) { }

  getClick(SearchElement : string): void {
  	this.CurrentSearchValue = this.searchservice.getClick(SearchElement);
    //storing Search Results
    this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
    this.pastSearchValue.push(this.CurrentSearchValue);
  }

  ngOnInit()
  {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
    data: {
     labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
     datasets: [{
         label: 'Number of Items Sold in Months',
         data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }
}

