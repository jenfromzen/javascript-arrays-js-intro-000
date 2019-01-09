var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function AddElementToBeginningOfArray (array, element) {
  array[0] = ...element
  newArray = array
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}