import { Component, OnInit } from '@angular/core';
import { Plan, VotedOn } from 'src/models/Plan';
import { myPlanList } from '../mock-data/PlanList';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  
  planList: Plan[] = myPlanList;

  votedOn: VotedOn[] = [];

  constructor() { }
  
  vote(plan: Plan, type: boolean){
    const thePlan = this.planList.find(voted => voted.id === plan.id);
    if(thePlan){
      type ? thePlan.rating++ : thePlan.rating--;
    }
    
  }
  
  ngOnInit(): void {
  }

}
