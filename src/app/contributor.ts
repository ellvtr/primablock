export class Contributor {
  
  constructor(address:string, balance:number){
    this.address = address;
    this.balance = balance;
    this.whitelisted = this.isWhiteListed();
  }

  address: string;
  balance: number;
  whitelisted: boolean;

  isWhiteListed(){
    if(Math.random()>0.5) return true;
    else return false;
  }
}
