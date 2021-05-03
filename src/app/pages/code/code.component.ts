import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ClassMapperService } from '../../services/class-mapper.service';
import { Module } from '../../model/module.class';

@Component({
	selector: 'app-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
	modules: Module[] = [];
	showAddModule: boolean = false;
	newModule: Module = new Module();

	constructor(private as: ApiService, private cms: ClassMapperService) {}

	ngOnInit(): void {
		this.as.getModules().subscribe(result => {
			this.modules = this.cms.getModules(result.list);
			console.log(this.modules);
		});
	}
	
	openAddModule(): void {
		this.showAddModule = true;
	}
	
	closeAddModule(ev: MouseEvent): void {
		ev && ev.preventDefault();
		this.showAddModule = false;
	}
}
