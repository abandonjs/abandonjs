
export type tChildTemplate = {
	[key: string]: tChildTemplate;
}

export type tRule = {
	key: string;
	min?: number;
	max?: number;
	count?: number;
	range?: any[];
}

export type tTemplate =
	string | undefined
	| tChildTemplate;

export type tContext {
	type: string;
	template: tTemplate;
	name: string;
	rule?: tRule;
	context?: tContext;
}

export interface iHandler {
	generate: (template: tTemplate) => tTemplate;
	generateString: (template: string) => tTemplate;
	generateObject: (template: { [key: string]: any }) => tTemplate;
}