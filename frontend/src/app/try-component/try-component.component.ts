import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-try-component',
  templateUrl: './try-component.component.html',
  styleUrls: ['./try-component.component.css']
})
export class TryComponent implements OnInit {

	title = 'frontend';
	results = [];
	inputText = "";
	inputPassword = "";
	valtozo = false;
	inputId = null;
	check = false;
	constructor(private http: HttpClient )
	{
  
	}
  
	async gombnyomas()
	{
	  this.valtozo = true;
	  console.log('test');
	  let result = await this.http.post('http://127.0.0.1:5000/listaz', {}).toPromise();
	  this.results = result as [];
	  //console.log(result);
	}
  
	async kuld()
	{
		if(this.check == true)
		{
			if (this.inputId == null)
			{
				//console.log('test');
				if(this.inputPassword !== "")
				{
					let result = await this.http.post('http://127.0.0.1:5000/kuld', {text:this.inputText, password:this.inputPassword}).toPromise();
					this.gombnyomas();
					//console.log(result);
				}
				else
				{
					alert('A jelszó mező nem lehet üres!');
				}
			}
			else
			{
				if(this.inputPassword !== "")
				{
					//console.log('UPDATE');
					let result = await this.http.post('http://127.0.0.1:5000/modosit', {id:this.inputId, text:this.inputText, password:this.inputPassword}).toPromise();
					this.inputText = "";
					this.inputPassword = "";
					this.gombnyomas();
					this.inputId = null;
				}
				else
				{
					alert('A jelszó mező nem lehet üres!');
				}
			}
		}
		else
		{
			alert('Mondtam,hogy kötelező kipipálni!!!!');
		}
		this.check = false;
	}

	async modosit(item)
	{
		console.log('test');
		this.inputText = item.text;
		this.inputPassword = item.password;
		this.inputId = item.id;

	}

	async torles(item)
	{
		console.log('deleted');
		let result = await this.http.post('http://127.0.0.1:5000/torles', {id:item.id}).toPromise();
		this.gombnyomas();
	}

	printIt(divName)
	{
		window.print();
	}
  

  ngOnInit() {
	  
  }

}
