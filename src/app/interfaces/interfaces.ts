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
