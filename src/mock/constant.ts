const Constant = {
	GUID: 1,
	RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
	RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
	RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g,
}

export default Constant;