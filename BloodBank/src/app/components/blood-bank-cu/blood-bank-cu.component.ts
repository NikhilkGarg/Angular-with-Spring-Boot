import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/classes/blood-bank';
import { BloodBankService } from 'src/app/shared_services/blood-bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blood-bank-cu',
  templateUrl: './blood-bank-cu.component.html',
  styleUrls: ['./blood-bank-cu.component.css']
})
export class BloodBankCUComponent implements OnInit {

  private bb:BloodBank;
  constructor(private _bbService:BloodBankService,private _router:Router) { }

  ngOnInit() {
    this.bb=this._bbService.getter();
    console.log(this.bb);
  }

  processForm(){
    if(this.bb.bloodSerialNo==undefined){
      this._bbService.createBloodBank(this.bb).subscribe((bb)=>{
        console.log(bb);
        this._router.navigate(['/listBBanks']);
      },
      (error)=>{
        console.log(error);
      });
    }else
    {
      this._bbService.updateBloodBank(this.bb).subscribe((bb)=>{
        console.log(bb);
        this._router.navigate(['/listBBanks']);
      },
      (error)=>{
        console.log(error);
      });
    }
  }

}
