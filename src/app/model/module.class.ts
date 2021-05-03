import { ModuleMethod } from './module-method.class';
import {
	ModuleInterface,
	ModuleMethodInterface
} from '../interfaces/interfaces';

export class Module {
	constructor(
		public name: string = '',
		public prefix: string = '',
		public methods: ModuleMethod[] = []
	){}
	
	public toInterface(): ModuleInterface {
		const module: ModuleInterface = {
			name: this.name,
			prefix: this.prefix,
			methods: []
		};
		
		this.methods.forEach((method: ModuleMethod) => {
			module.methods.push( method.toInterface() );
		});
		
		return module;
	}
}
