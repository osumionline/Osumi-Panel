import {
  ModuleInterface,
  ModuleMethodInterface,
} from 'src/app/interfaces/interfaces';
import { ModuleMethod } from 'src/app/model/module-method.class';
import { Utils } from 'src/app/shared/utils.class';

export class Module {
  constructor(
    public name: string = '',
    public prefix: string = '',
    public methods: ModuleMethod[] = []
  ) {}

  fromInterface(m: ModuleInterface): Module {
    this.name = Utils.urldecode(m.name);
    this.prefix = Utils.urldecode(m.prefix);
    this.methods = m.methods.map((m: ModuleMethodInterface): ModuleMethod => {
      return new ModuleMethod().fromInterface(m);
    });

    return this;
  }

  public toInterface(): ModuleInterface {
    return {
      name: Utils.urlencode(this.name),
      prefix: Utils.urlencode(this.prefix),
      methods: this.methods.map((m: ModuleMethod): ModuleMethodInterface => {
        return m.toInterface();
      }),
    };
  }
}
