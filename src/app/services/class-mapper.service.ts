import { Injectable }   from '@angular/core';
import { Module }       from '../model/module.class';
import { ModuleMethod } from '../model/module-method.class';
import {
	ModuleMethodInterface,
	ModuleInterface
} from '../interfaces/interfaces';
import { Utils } from '../model/utils.class';

@Injectable({
	providedIn: 'root'
})
export class ClassMapperService {
	constructor() {}

	getModuleMethod(mm: ModuleMethodInterface): ModuleMethod {
		return new ModuleMethod(
			Utils.urldecode(mm.name),
			Utils.urldecode(mm.url),
			mm.type,
			mm.filter,
			mm.layout
		);
	}

	getModuleMethods(mms: ModuleMethodInterface[]): ModuleMethod[] {
		let moduleMethods: ModuleMethod[] = [];

		for (let mm of mms) {
			moduleMethods.push(this.getModuleMethod(mm));
		}

		return moduleMethods;
	}

	getModule(m: ModuleInterface): Module {
		return new Module(
			m.name,
			m.prefix,
			this.getModuleMethods(m.methods)
		);
	}

	getModules(ms: ModuleInterface[]): Module[] {
		let modules: Module[] = [];

		for (let m of ms) {
			modules.push(this.getModule(m));
		}

		return modules;
	}
}
