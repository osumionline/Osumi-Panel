import { ModuleMethod } from './module-method.class';

export class Module {
	constructor(
		public name: string,
		public prefix: string,
		public methods: ModuleMethod[]
	){}
}
