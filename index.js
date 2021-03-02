var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

var newObj = Object.assign({}, obj)
function deleteFromObjectByKey(object, key) {
  delete object.key;
}
