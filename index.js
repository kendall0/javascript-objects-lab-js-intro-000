var recipes = {prop: 1, prop2: 2};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = 'new value';
  return recipes;
}
