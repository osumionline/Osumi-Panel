import { ModuleMethodInterface } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/shared/utils.class';

export class ModuleMethod {
  constructor(
    public name: string = '',
    public url: string = '',
    public type: string = '',
    public filter: string = '',
    public layout: string = ''
  ) {}

  fromInterface(mm: ModuleMethodInterface): ModuleMethod {
    this.name = Utils.urldecode(mm.name);
    this.url = Utils.urldecode(mm.url);
    this.type = Utils.urldecode(mm.type);
    this.filter = Utils.urldecode(mm.filter);
    this.layout = Utils.urldecode(mm.layout);

    return this;
  }

  public toInterface(): ModuleMethodInterface {
    return {
      name: Utils.urlencode(this.name),
      url: Utils.urlencode(this.url),
      type: Utils.urlencode(this.type),
      filter: Utils.urlencode(this.filter),
      layout: Utils.urlencode(this.layout),
    };
  }
}
