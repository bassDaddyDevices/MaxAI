---
type: max
name: "array.some"
summary: "Test the elements of an array object for a matching condition"
signal: false
url: "https://docs.cycling74.com/reference/array.some/"
package: "Max"
see_also: ["array", "array.every", "array.filter"]
---
# array.some

Test the elements of an array object for a matching condition

## Description

Each element of an incoming array will be output sequentially. Each element can be tested and a  0  or  1  passed back into the right inlet of the [array.some](https://docs.cycling74.com/reference/array.some) object, indicating whether the element passed the test. When iteration is complete, either a  0  or  1  will be output, signalling whether some elements of the array matched the testing condition.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### (inlet1)

0  (test failed) or a  1  (test passed) should be sent to this inlet for each iterated element.

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

In the left inlet, an incoming array will trigger the output of each element sequentially, as a series of individual messages. The element index will be output from the rightmost outlet, and the element value from the middle outlet.

Each of these messages can be tested (synchronously or asynchronously) and the result of that test (a  0  (failed) or a  1  (passed)) returned to the [array.some](https://docs.cycling74.com/reference/array.some) object's right inlet. When iteration is complete, and a result for each element has been sent to the object's right inlet, a  0  (no elements passed the test) or a  1  (some elements passed the test) will be sent from the object's left outlet.

### cancel

Cancels the currently active iteration and testing. The [array.some](https://docs.cycling74.com/reference/array.some) object will now be ready to start testing a new array.

### dictionary

In the left inlet, wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

In the left inlet, wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.every](https://docs.cycling74.com/reference/array.every) | Tests all elements in the array |
| [array.filter](https://docs.cycling74.com/reference/array.filter) | Output elements of an array matching a condition |
