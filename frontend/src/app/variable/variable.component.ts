import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {

  constructor() { }

  memberVar = 1;

  szamolj()
  {
	  console.log('memberVar: ' + this.memberVar);
	  this.memberVar++;
	  let localVar = 1;
	  console.log('localVar: ' + localVar);
	  localVar++;
	  this.fuggvenyNev(1);
	  this.fuggvenyNev(this.memberVar);
	  this.fuggvenyNev(localVar);
	  console.log('memberVar: ' + this.memberVar);
	  console.log('localVar: ' + localVar);
  }

  szamolj2()
  {
	//console.log('localVar: ' + localVar); 

  }

  fuggvenyNev(param)
  {
	console.log('param: ' + param);
	param++;
	console.log('param: ' + param);
  }

  ngOnInit() {
  }

}
