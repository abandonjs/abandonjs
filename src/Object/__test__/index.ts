import * as _ from '../index'
import { logGroup } from '../../Util'


function Foo() {
	this.a = 1;
}

function Bar() {
	this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

// logGroup('assign',
// _.assign({ 'a': 0 }, new Foo, new Bar), // => { 'a': 1, 'c': 3 }
// )
logGroup('assignIn',
	_.assignIn({ 'a': 0 }, new Foo, new Bar), // => { 'a': 1, 'c': 3 }
)