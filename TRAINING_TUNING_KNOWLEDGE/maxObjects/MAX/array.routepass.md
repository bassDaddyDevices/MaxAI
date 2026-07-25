---
type: max
name: "array.routepass"
summary: "Route a complete input array object based on input matching"
signal: false
url: "https://docs.cycling74.com/reference/array.routepass/"
package: "Max"
see_also: ["array", "routepass", "select"]
---
# array.routepass

Route a complete input array object based on input matching

## Description

Like [routepass](https://docs.cycling74.com/reference/routepass), but for array objects.

## Arguments

### match keys[list] optional

Determines the number of outlets. The object will route arrays to the associated outlet if the first element of the array matches the argument key. Unmatched arrays are routed through the rightmost outlet. The special keys  emptystring  and  emptyarray  match the empty string and empty array, and the key  <empty>  matches the empty symbol.

## Attributes

### match[int]

By default [array.routepass](https://docs.cycling74.com/reference/array.routepass) will attempt to match starting at the beginning of the input array. However, some options are available.

Possible values:

0 = 'Start'
(
Match at the beginning (the first element)
)
1 = 'End'
(
Match at the end (the last element)
)
2 = 'Contains (Anywhere)'
(
Match any element
)
3 = 'Contains (Exclusive Start)'
(
Match any element except the first
)
4 = 'Contains (Exclusive End)'
(
Match any element expect the last
)
5 = 'Contains (Exclusive Start and End)'
(
Match any element except the first or last
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received arrays and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### array

The arguments to [array.routepass](https://docs.cycling74.com/reference/array.routepass) determine the number of outlets, as well as how array inputs will be routed. If the first element of the input array does not match any of the arguments, the whole array is sent out of the last outlet. Like the [routepass](https://docs.cycling74.com/reference/routepass) object, the input is routed without being altered.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

Arguments:

- dictionary-value
  [list]

### string

Wrap a string object in an array, then process as described for the  array  message.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [routepass](https://docs.cycling74.com/reference/routepass) | Route a complete incoming message based on input matching |
| [select](https://docs.cycling74.com/reference/select) | Output bangs based on input matching |
