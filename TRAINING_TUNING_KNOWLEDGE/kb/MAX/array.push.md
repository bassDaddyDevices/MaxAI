---
type: max
name: "array.push"
summary: "Add one or more elements to the end of an array"
signal: false
url: "https://docs.cycling74.com/reference/array.push/"
package: "Max"
see_also: ["array", "array.concat", "array.pop", "array.shift", "array.unshift", "zl.queue", "zl.stack"]
---
# array.push

Add one or more elements to the end of an array

## Description

The base array is sent to the right inlet, which clears any elements sent to the left inlet. Additional elements are sent to the left inlet, and can be repeatedly placed at the end of the output array, without the user needing to update the array in the right inlet. Unlike the JavaScript implementation, the input array is not changed in place.

## Arguments

None.

## Attributes

### wrapmode[int]: 0

When enabled, elements arriving at the left inlet will be wrapped in an array before being pushed. By default, elements are pushed unwrapped.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

In the left inlet, the integer value will be added to the end of the base array and the result will be output. In the right inlet, convert an incoming integer to an array and replace the base array.

### float

In the left inlet, the floating-point value will be added to the end of the base array and the result will be output. In the right inlet, convert an incoming floating-point value to an array and replace the base array.

### list

In the left inlet, the list will be added to the end of the base array and the result will be output. In the right inlet, convert an incoming list to an array and replace the base array.

### anything

In the left inlet, the list will be added to the end of the base array and the result will be output. In the right inlet, convert an incoming list to an array and replace the base array.

### array

In the left inlet, the array will be added to the end of the base array and the result will be output. In the right inlet, replace the base array with the incoming array.

### clear

All internal arrays will be cleared.

### dictionary

In the left inlet, the dictionary will be added to the end of the base array and the result will be output. In the right inlet, wrap the dictionary in an array, and replace the base array.

### string

In the left inlet, the string will be added to the end of the base array and the result will be output. In the right inlet, wrap the string in an array, and replace the base array.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.concat](https://docs.cycling74.com/reference/array.concat) | Concatenate two array objects |
| [array.pop](https://docs.cycling74.com/reference/array.pop) | Remove an element from the end of an array |
| [array.shift](https://docs.cycling74.com/reference/array.shift) | Remove an element from the beginning of an array |
| [array.unshift](https://docs.cycling74.com/reference/array.unshift) | Add one or more elements to the beginning of an array |
| [zl.queue](https://docs.cycling74.com/reference/zl.queue) | Output elements of a list in the order they are received |
| [zl.stack](https://docs.cycling74.com/reference/zl.stack) | Output elements of a list in reverse order |
