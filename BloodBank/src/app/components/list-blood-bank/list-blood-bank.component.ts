import { Component, OnInit } from '@angular/core';
import { BloodBankService } from 'src/app/shared_services/blood-bank.service';
import { BloodBank } from 'src/app/classes/blood-bank';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-blood-bank',
  templateUrl: './list-blood-bank.component.html',
  styleUrls: ['./list-blood-bank.component.css']
})
export class ListBloodBankComponent implements OnInit {

  constructor(private _bbService:BloodBankService,private _router:Router) { }

  private bbs:BloodBank[];
  ngOnInit() {
    this._bbService.getBloodBanks().subscribe((bbs)=>{
      console.log(bbs);
      this.bbs=bbs;
    },(error)=>{console.log(error);
    });
  }
  
  // deleteBloodBank(bb){
  //   this._bbService.delete(user.userID).subscribe((data)=>{
  //     this.users.splice(this.users.indexOf(user),1)
  //     },(error)=>{console.log(error);
  //   });
  // }

  updateBloodBank(bb:BloodBank){
    this._bbService.setter(bb);
    this._router.navigate(['/cuBBank']);
  }

  createBloodBank(){
    let bb = new BloodBank();
    this._bbService.setter(bb);
    this._router.navigate(['/cuBBank']);
  }


}
