import { StockDetails } from './StockDetails';
export class SelectedStock
{
   public dateofBuy:Date;

    constructor(public stockInfo:StockDetails,
        public units:number,
        public totalCost:number,
        )
        {
            this.dateofBuy = new Date();
        }
}