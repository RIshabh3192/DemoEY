import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   constructor() { }

   ngOnInit(): void {}
  title = 'Ernst and Young';
  editingIndex: number = -1;
  demo: Demo = new Demo();
  targetPotentialArray: Demo[]= [{ status: "Research", companyInfo: "Banking", keyContacts: "Rishabh", financialPerformance: "A+" },
  { status: "Approved", companyInfo: "IT", keyContacts: "Aggarwal", financialPerformance: "B+" },{ status: "Declined", companyInfo: "Networking", keyContacts: "Rishabh", financialPerformance: "C+" }]


  editTargetPotential(index) {
    this.editingIndex = index;
    this.demo = this.targetPotentialArray[index]
  }

  deleteTargetPotential(index: number)
  {
     this.targetPotentialArray.splice(index, 1);
     this.demo = new Demo()
  }

  postTargetPotential() {
    if (this.editingIndex == -1) {
      var demoTemp = new Demo();
      demoTemp = this.demo;
      this.targetPotentialArray.push(demoTemp);
      this.demo = new Demo();
    }
    else {
      var demoTemp = new Demo();
      demoTemp =  this.demo;
      this.targetPotentialArray.splice(this.editingIndex, 0, demoTemp);
      this.targetPotentialArray.splice(this.editingIndex + 1, 1);
      this.demo = new Demo()
      this.editingIndex = -1;
    }
  }
}


export class Demo {
  status: string;
  companyInfo: string
  keyContacts: string
  financialPerformance: string

  constructor() { }
}
