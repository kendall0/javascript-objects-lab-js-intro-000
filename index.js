var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

var recipes = {key: 'value'}
var newObj = Object.assign({}, recipes)
function deleteFromObjectByKey(object, key){
  delete newObj.key;
}
