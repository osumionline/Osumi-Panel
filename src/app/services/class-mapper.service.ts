import { Injectable } from '@angular/core';
import {
  ModuleInterface,
  ModuleMethodInterface,
} from 'src/app/interfaces/interfaces';
import { ModuleMethod } from 'src/app/model/module-method.class';
import { Module } from 'src/app/model/module.class';

@Injectable({
  providedIn: 'root',
})
export class ClassMapperService {
  getModuleMethod(mm: ModuleMethodInterface): ModuleMethod {
    return new ModuleMethod().fromInterface(mm);
  }

  getModuleMethods(mms: ModuleMethodInterface[]): ModuleMethod[] {
    return mms.map((mm: ModuleMethodInterface): ModuleMethod => {
      return this.getModuleMethod(mm);
    });
  }

  getModule(m: ModuleInterface): Module {
    return new Module().fromInterface(m);
  }

  getModules(ms: ModuleInterface[]): Module[] {
    return ms.map((m: ModuleInterface): Module => {
      return this.getModule(m);
    });
  }
}
