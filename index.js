const employee = {
    name: 'Jim',
    streetAddress: 69,
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObject = {...object};
    newObject[key] = value;

    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    //const newObject = {...object};
    object[key] = value;

    return object;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee }; 
    delete newEmployee[key];
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee
}
