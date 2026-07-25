---
type: max
name: "array"
summary: "Create or duplicate an array object"
signal: false
url: "https://docs.cycling74.com/reference/array/"
package: "Max"
see_also: ["dict", "string", "array.change", "array.compare", "array.concat", "array.every", "array.filter", "array.flatten", "array.foreach", "array.frombuffer", "array.group", "array.index", "array.indexmap", "array.indexof", "array.iter", "array.join", "array.length", "array.map", "array.pop", "array.push", "array.reduce", "array.remove", "array.reverse", "array.rotate", "array.routepass", "array.scramble", "array.sect", "array.shift", "array.slice", "array.some", "array.sort", "array.split", "array.stream", "array.subarray", "array.thin", "array.tobuffer", "array.tolist", "array.tostring", "array.tosymbol", "array.tuplewise", "array.union", "array.unique", "array.unshift", "array.wrap"]
---
# array

Create or duplicate an array object

## Description

Create or duplicate a named array object.

## Arguments

### value[atoms] optional

The initial contents of the array can be supplied as a Max list.

## Attributes

### name[symbol]

Like dictionary and string objects, or like Jitter matrices, [array](https://docs.cycling74.com/reference/array) objects can have names. These can be used to reference them from Javascript or from another [array](https://docs.cycling74.com/reference/array) object.

### parameter\_enable[int]

Parameter Mode Enable

### parameter\_mappable[int]: 1

Visible to Mapping

### size[int] read-only

The size refers to the number of elements in the array.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the current array.

### int

Convert an integer to an array. The integer will be placed inside of an array, which will be sent to the outlet.

Arguments:

- value
  [int]

### float

Convert a floating-point number to an array. The floating-point number will be placed inside of an array, which will be sent to the outlet.

Arguments:

- value
  [float]

### list

Convert a list to an array. The contents of the list will be placed inside the array, which will be sent to the outlet.

Arguments:

- list-value
  [list]

### anything

Convert a list to an array. The contents of the list will be placed inside the array, which will be sent to the outlet.

Arguments:

- list-value
  [list]

### append

Append a value to the end of the current array. The array will not be output in response to this message. Use  bang  to force output.

Arguments:

- value
  [list]

### array

Make a copy of an array. The incoming array will be cloned and passed to the outlet.

### atoms

Output the current array as a list out of the  array  objects middle outlet. The elements of the array will be output as a Max list.

### clear

Clear the current array. The (now empty) array will not be output in response to this message. Use  bang  to force output.

### delete

Delete an entry in the array. The indexed element will be removed from the array (indices are 0-based). The array will not be output in response to this message. Use  bang  to force output.

Arguments:

- index
  [int]

### dictionary

Wrap a dictionary in an array. The dictionary will be placed inside of an array, which will be sent to the outlet.

Arguments:

- dictionary-value
  [list]

### get

Get an array element. The element will be passed to the rightmost outlet in the form  get [index] [value] .

Arguments:

- index
  [int]

### insert

Insert a value into the current array. A new array element will be created at the index provided, with the supplied value. Any existing array elements will be shifted to make room for the new element. The array will not be output in response to this message. Use  bang  to force output.

Arguments:

- index
  [int]
- value
  [list]

### prepend

Place a new entry at the start of the current array. The array will not be output in response to this message. Use  bang  to force output.

Arguments:

- value
  [list]

### replace

Replace a value in the current array at an existing index. The array will not be output in response to this message. Use  bang  to force output.

Arguments:

- index
  [int]
- value
  [list]

### reserve

Reserve memory for a provided number of entries (doesn't resize array). This is rarely needed, as the object manages its own memory and grows as necessary. If the desired array size is known, and re-allocation of the array needs to be avoided, this message can be used to ensure that the [array](https://docs.cycling74.com/reference/array) object is pre-allocated to the desired size.

Arguments:

- number-of-entries
  [int]

### shrink

Reduce memory usage to the current array object length. This is rarely needed. The [array](https://docs.cycling74.com/reference/array) object does not automatically shrink if its contents are removed or cleared, this message can be used to ensure that the object doesn't use more resources than necessary.

### string

Wrap a string in an array. The string will be placed inside of an array, which will be sent to the outlet.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [array.change](https://docs.cycling74.com/reference/array.change) | Detect array changes |
| [array.compare](https://docs.cycling74.com/reference/array.compare) | Compare two arrays for equality |
| [array.concat](https://docs.cycling74.com/reference/array.concat) | Concatenate two array objects |
| [array.every](https://docs.cycling74.com/reference/array.every) | Tests all elements in the array |
| [array.filter](https://docs.cycling74.com/reference/array.filter) | Output elements of an array matching a condition |
| [array.flatten](https://docs.cycling74.com/reference/array.flatten) | Flatten a multi-dimensional array object to a single dimension |
| [array.foreach](https://docs.cycling74.com/reference/array.foreach) | Iterate the elements of an array |
| [array.frombuffer](https://docs.cycling74.com/reference/array.frombuffer) | Read audio buffer values into an array object |
| [array.group](https://docs.cycling74.com/reference/array.group) | Output an array when it reaches a certain size |
| [array.index](https://docs.cycling74.com/reference/array.index) | Output the indexed element of an array object |
| [array.indexmap](https://docs.cycling74.com/reference/array.indexmap) | Reorder the elements of an array object based on an indexed map |
| [array.indexof](https://docs.cycling74.com/reference/array.indexof) | Search for the index of an array element |
| [array.iter](https://docs.cycling74.com/reference/array.iter) | Iterate every element of an array object |
| [array.join](https://docs.cycling74.com/reference/array.join) | Convert an array object to a string object with an optional separator string |
| [array.length](https://docs.cycling74.com/reference/array.length) | Determine the length of an array object |
| [array.map](https://docs.cycling74.com/reference/array.map) | Perform an operation on every element of an array object, replacing elements in-place |
| [array.pop](https://docs.cycling74.com/reference/array.pop) | Remove an element from the end of an array |
| [array.push](https://docs.cycling74.com/reference/array.push) | Add one or more elements to the end of an array |
| [array.reduce](https://docs.cycling74.com/reference/array.reduce) | Combine array elements based on a custom function |
| [array.remove](https://docs.cycling74.com/reference/array.remove) | Remove a range of elements from an array object |
| [array.reverse](https://docs.cycling74.com/reference/array.reverse) | Reverse the order of elements in an array object |
| [array.rotate](https://docs.cycling74.com/reference/array.rotate) | Rotate the elements in any array object |
| [array.routepass](https://docs.cycling74.com/reference/array.routepass) | Route a complete input array object based on input matching |
| [array.scramble](https://docs.cycling74.com/reference/array.scramble) | Randomize the order of elements in an array object |
| [array.sect](https://docs.cycling74.com/reference/array.sect) | Return the elements of an array object which intersect with another array object |
| [array.shift](https://docs.cycling74.com/reference/array.shift) | Remove an element from the beginning of an array |
| [array.slice](https://docs.cycling74.com/reference/array.slice) | Output a range of elements of an array object as a new array object |
| [array.some](https://docs.cycling74.com/reference/array.some) | Test the elements of an array object for a matching condition |
| [array.sort](https://docs.cycling74.com/reference/array.sort) | Sort the elements of an array object according to a test |
| [array.split](https://docs.cycling74.com/reference/array.split) | Split an array object into two new array objects at a specified index |
| [array.stream](https://docs.cycling74.com/reference/array.stream) | Make an array of a certain size |
| [array.subarray](https://docs.cycling74.com/reference/array.subarray) | Output a range of elements of an array object as a new array object |
| [array.thin](https://docs.cycling74.com/reference/array.thin) | Remove duplicated entries from an array object |
| [array.tobuffer](https://docs.cycling74.com/reference/array.tobuffer) | Write array object values to an audio buffer |
| [array.tolist](https://docs.cycling74.com/reference/array.tolist) | Convert an array object to a list |
| [array.tostring](https://docs.cycling74.com/reference/array.tostring) | Convert an array object to a string object |
| [array.tosymbol](https://docs.cycling74.com/reference/array.tosymbol) | Convert an array object to a symbol |
| [array.tuplewise](https://docs.cycling74.com/reference/array.tuplewise) | Make an array of a certain size (counting iterations) |
| [array.union](https://docs.cycling74.com/reference/array.union) | Combine two arrays into a new array object containing non-duplicate entries of both arrays |
| [array.unique](https://docs.cycling74.com/reference/array.unique) | Filtering duplicates and subtract arrays |
| [array.unshift](https://docs.cycling74.com/reference/array.unshift) | Add one or more elements to the beginning of an array |
| [array.wrap](https://docs.cycling74.com/reference/array.wrap) | Wrap an array inside of an array |
