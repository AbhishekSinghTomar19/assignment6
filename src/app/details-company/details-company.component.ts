import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details-company',
  templateUrl: './details-company.component.html',
  styleUrls: ['./details-company.component.css']
})
export class DetailsCompanyComponent implements OnInit {
  task: {Employee: string, Designation: string}[] = [];

  constructor(private dataService: DataService ,private router: Router, private route: ActivatedRoute){
  }

  ngOnInit() {
   this.task = this.dataService.tasks;
    console.log(this.task);
 }



 reloadComp() {
   this.router.navigate(['/detail'], {relativeTo: this.route});
 }

}
