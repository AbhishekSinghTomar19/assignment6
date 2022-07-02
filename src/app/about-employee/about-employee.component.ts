import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about-employee',
  templateUrl: './about-employee.component.html',
  styleUrls: ['./about-employee.component.css']
})
export class AboutEmployeeComponent implements OnInit {
  user!: { Id: number; Employee: string; Designation: number; };

  public newDesignation='';
  constructor(private dataService: DataService,private router: Router,private route:ActivatedRoute){}

  ngOnInit():void{
     this.user={
      Id:this.route.snapshot.params['Id'],
      Employee:this.route.snapshot.params['Employee'],
      Designation:this.route.snapshot.params['Designation']

     };
  }

  onEdit(i:number,Designation:string){
    this.dataService.changeDesignation({index:i, NewDesignation: Designation});

    this.router.navigate(['/detail']);
  }

}
