export let name = 'John Doe';

let x = 1,
	y = 2;
export {x, y};

let z = 3;

export function getSum() {
	return z + x;
}

let obj = {
	x: x,
	y: y
}
export {obj};

//-------------------------------------------------------------------------//
let $studentsList = $('#students-list'),
	$formUpdate = $('#form-update'),
	$btnDelete = $('#btn-delete'),
	$formCreate = $('#form-create');

export {
	$studentsList,
	$formUpdate,
	$btnDelete,
	$formCreate
};