---
type: max
name: "array.map"
summary: "Perform an operation on every element of an array object, replacing elements in-place"
signal: false
url: "https://docs.cycling74.com/reference/array.map/"
package: "Max"
see_also: ["array", "array.filter", "array.reduce"]
---
# array.map

Perform an operation on every element of an array object, replacing elements in-place

## Description

Each element of an incoming array will be output sequentially. After processing the element, it should be passed back into the right inlet of the [array.map](https://docs.cycling74.com/reference/array.map) object, replacing the element in the array. When iteration is complete, the substituted array will be output.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

In the left inlet, convert an incoming integer to an array, then process as described for the  array  message. In the right inlet, the incoming value will replace the last-output array element and either trigger the next phase of the iteration, or, if the iteration is complete, cause output of the mapped array.

### float

In the left inlet, convert an incoming floating-point number to an array, then process as described for the  array  message. In the right inlet, the incoming value will replace the last-output array element and either trigger the next phase of the iteration, or, if the iteration is complete, cause output of the mapped array.

### list

In the left inlet, convert an incoming list to an array, then process as described for the  array  message. In the right inlet, the incoming value will replace the last-output array element and either trigger the next phase of the iteration, or, if the iteration is complete, cause output of the mapped array.

### anything

In the left inlet, convert an incoming list to an array, then process as described for the  array  message. In the right inlet, the incoming value will replace the last-output array element and either trigger the next phase of the iteration, or, if the iteration is complete, cause output of the mapped array.

### array

In the left inlet, an incoming array will trigger the output of each element sequentially, as a series of individual messages. The element index will be output from the rightmost outlet, and the element value from the middle outlet.

Each of these messages can be processed (synchronously or asynchronously) and then returned to the [array.map](https://docs.cycling74.com/reference/array.map) object's right inlet. In the right inlet, the incoming value will replace the last-output array element and either trigger the next phase of the iteration, or, if the iteration is complete, cause output of the mapped array.

### cancel

Cancels the currently active mapping operation. The [array.map](https://docs.cycling74.com/reference/array.map) object will now be ready to start mapping a new array.

### dictionary

In the left inlet, wrap an incoming dictionary object in an array, then process as described for the  array  message. In the right inlet, the incoming value will replace the last-output array element and either trigger the next phase of the iteration, or, if the iteration is complete, cause output of the mapped array.

### string

In the left inlet, wrap a string object in an array, then process as described for the  array  message. In the right inlet, the incoming value will replace the last-output array element and either trigger the next phase of the iteration, or, if the iteration is complete, cause output of the mapped array.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.filter](https://docs.cycling74.com/reference/array.filter) | Output elements of an array matching a condition |
| [array.reduce](https://docs.cycling74.com/reference/array.reduce) | Combine array elements based on a custom function |
