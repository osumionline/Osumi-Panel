export interface DataShareGlobals {
  [key: string]: any;
}

export interface LoginResult {
  status: string;
  token: string;
}

export interface StatusResult {
  status: string;
}

export interface MenuOption {
  id: string;
  url: string;
  name: string;
}

export interface ModuleMethodInterface {
  name: string;
  url: string;
  type: string;
  filters: string[];
  layout: string;
}

export interface ModuleInterface {
  name: string;
  prefix: string;
  methods: ModuleMethodInterface[];
}

export interface ModulesResult {
  status: string;
  list: ModuleInterface[];
}
