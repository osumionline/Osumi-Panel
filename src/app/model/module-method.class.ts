import { ModuleMethodInterface } from '../interfaces/interfaces';

export class ModuleMethod {
	constructor(
		public name: string = '',
		public url: string = '',
		public type: string = '',
		public filter: string = '',
		public layout: string = ''
	){}
	
	public toInterface(): ModuleMethodInterface {
		return {
			name: this.name,
			url: this.url,
			type: this.type,
			filter: this.filter,
			layout: this.layout
		};
	}
}
