import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModulesResult } from 'src/app/interfaces/interfaces';
import { Module } from 'src/app/model/module.class';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';
import { MenuComponent } from 'src/app/modules/shared/components/menu/menu.component';
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';

@Component({
  standalone: true,
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HeaderComponent,
    MenuComponent,
  ],
})
export default class CodeComponent implements OnInit {
  modules: Module[] = [];
  showAddModule: boolean = false;
  newModule: Module = new Module();

  constructor(private as: ApiService, private cms: ClassMapperService) {}

  ngOnInit(): void {
    this.as.getModules().subscribe((result: ModulesResult): void => {
      this.modules = this.cms.getModules(result.list);
    });
  }

  openAddModule(): void {
    this.newModule = new Module();
    this.showAddModule = true;
  }

  closeAddModule(ev: MouseEvent): void {
    ev && ev.preventDefault();
    this.showAddModule = false;
  }
}
