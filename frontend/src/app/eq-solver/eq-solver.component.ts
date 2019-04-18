import { Component, OnInit } from '@angular/core';
import { resolveReflectiveProviders } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-eq-solver',
  templateUrl: './eq-solver.component.html',
  styleUrls: ['./eq-solver.component.css']
})
export class EqSolverComponent implements OnInit {
	a:number;
	b:number; 
	c:number; 
	x1:number; 
	x2:number; 
	solve1:any;
	solve2:any; 
	d:number;

	szamolj()
	{
		console.log('x')

		//let d = (this.b * this.b - 4 * this.a * this.c);
		this.d = this.computeD(this.a, this.b, this.c);

		if (this.d > 0)
		{
			this.resolver();
			this.solve1 = this.x1;
			this.solve2 = this.x2;
		}
		else if(this.d == 0)
		{
			this.resolver();
			this.solve1 = this.x1;
			this.solve2 = undefined;
			
		}
		else
		{
			this.solve1 = 'Nincs megoldás.';
			this.solve2 = undefined;
		}
	}

	resolver()
	{
		this.x1=(- this.b + Math.sqrt((this.b * this.b)-4 * this.a * this.c))/(2 * this.a);
		this.x2=(-1 * this.b - Math.sqrt((this.b * this.b)-4 * this.a * this.c))/(2 * this.a);
	}

	computeD(alpha, beta, gamma)
	{
		let d = (beta * beta - 4 * alpha * gamma);
		return d;
	}

  ngOnInit() {
  }

}
