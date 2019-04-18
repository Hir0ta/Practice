import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sequence',
	templateUrl: './sequence.component.html',
	styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit
{
	count: number;
	tomb = [];
	bool = false;
	counter = 0;
	index = -1

	constructor() { }

	build()
	{
		this.tomb = [];

		for (let i = 0; i < this.count; i++)
		{
			this.tomb[i] = Math.floor(Math.random() * 10);
		}
		console.log(this.tomb);
	}

	sum()
	{
		let sumVar = 0;
		for (let i = 0; i < this.count; i++)
		{
			sumVar += this.tomb[i]
		}
		console.log(sumVar);
	}

	biggerThan(x, y)
	{
		return x > y;
	}

	decision()
	{
		this.bool = false;

		for (let i = 0; i < this.count; i++)
		{
			if (this.biggerThan(this.tomb[i], 5))
			{
				this.bool = true;
				break;
			}
		}

		console.log(this.bool);
	}

	counting()
	{
		this.counter = 0;
		for (let i = 0; i < this.count; i++)
		{
			if (this.biggerThan(this.tomb[i], 5))
			{
				++this.counter;
			}
		}
		console.log(this.counter);
	}

	max()
	{
		this.index = -1;
		for (let i = 0; i < this.count; i++)
		{
			if (this.index != -1)
			{
				if (this.tomb[i] > this.tomb[this.index])
				{
					this.index = i;
				}
			}
			else
			{
				this.index = i;
			}

		}
		let max = this.tomb[this.index];
		console.log(this.index);
		console.log(max);
	}

	ngOnInit()
	{
	}

}
