import { Component, OnInit } from '@angular/core';
import { SelectedStock } from './../SelectedStock';
import { StockDetails } from './../StockDetails';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {
  status:boolean = false;
  stockArr:StockDetails[] = [];
  selectedStockArr:SelectedStock[] = [];
  totalPortfolioValue:number = 0;

  constructor() { 
    let stock1 = new StockDetails("Infosys",1700,40);
    let stock2 = new StockDetails("Wipro",700,45);
    let stock3 = new StockDetails("Reliance",2700,50);


    this.stockArr.push(stock1);
    this.stockArr.push(stock2);
    this.stockArr.push(stock3);
    this.stockArr.push(new StockDetails("HCL Tech",1200,40));
    this.stockArr.push(new StockDetails("Tata Power",210,40));
    this.stockArr.push(new StockDetails("ABC",200,10));
  }

  ngOnInit(): void {
  }

  addStock(stock:StockDetails,units:string)
  {
    let unitsToBuy = parseInt(units);
    
    let totalCost = stock.stockPrice*unitsToBuy;
    console.log("inside add stock "+stock.stockPrice+" - "+unitsToBuy+" - "+totalCost);
    let selStock = new SelectedStock(stock,unitsToBuy,totalCost); // DTO class
    this.selectedStockArr.push(selStock);  // pending
    this.totalPortfolioValue += totalCost;
    console.log("Total Portfolio cost "+this.totalPortfolioValue);
  }

}
