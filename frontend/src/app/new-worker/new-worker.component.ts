import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent implements OnInit {

	male = 'Férfi';
	female = 'Nő';
	sex = 'Válassz';

	setSex(sex)
	{
		
		this.sex = sex;	
	}

	ngOnInit() {
		$('#dropdownTitle').click(function() 
		{
			$('#options').slideToggle(500);
		});

		$('#cancelButton').click(function()
		{
			$('#popupOuter').hide();
		});
	}

}
