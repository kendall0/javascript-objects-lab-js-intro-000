var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes.assign({}, object, {[key]: value});
}
