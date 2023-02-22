import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  longText = `Bitcoin (BTC) is a type of cryptocurrency or virtual currency, created in 2009. Unlike conventional currencies,
  bitcoin does not have a central bank that controls its appreciation and devaluation, which follows the direction of the market 
  - in the law of supply and demand - and waves of investment and news of its speculative value. "On the other hand, its proponents
   argue that bitcoin represents the future of the use of money in the world and that its adoption is merely the accompaniment of
  a worldwide trend, in which the use of virtual money in the form of credit cards and online transfers is increasingly common."`;

  text2 = `An alternative way is to conduct a sale or any business by charging in bitcoins. Thus, after selling a computer or
   performing some type of service, payment can be made using cryptocurrency. There are cases of mansions sold in bitcoins,
    as well as other businesses that are slowly becoming more popular. There are some establishments in Brazil and around 
    the world that already receive payment from their customers in this currency, where operations involve the use of applications
     on the cell phones of customers and vendors.`;

  text3 = `The simplest way is to purchase by exchanging "real currency" for bitcoins on the Internet. In this process,
      you exchange bitcoin according to the current market rate. The more bitcoin appreciates in value, the more money you
       will have to spend to acquire it. Purchases and sales are executed on the same website where you created your wallet,
        the blockchain, or in ATMs specifically created for this purpose, which are still very rare and almost non-existent 
        in Brazil..`;

   text4 = `All transactions made in bitcoin are recorded and publicly controlled from the blockchain portal, which is operated
    and maintained by thousands of "miners" around the world. Therefore, mining bitcoins means using your computer's capacity 
    to assist the general server, i.e. to keep the network structure running. So as "payment" or compensation for your contribution,
     you receive some bitcoins in return.`;
 

}
