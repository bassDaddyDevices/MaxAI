---
type: ableton
name: "live.map"
summary: "Simplify the process of selecting Live interface elements for use with the Live API."
signal: false
url: "https://docs.cycling74.com/reference/live.map/"
package: "Max for Live"
see_also: ["bogus"]
---
# live.map

Simplify the process of selecting Live interface elements for use with the Live API.

## Description

The [live.map](https://docs.cycling74.com/reference/live.map) object encapsulates the process of using the mouse to select Live user interface elements to determine their LOM paths and IDs.

## Arguments

None.

## Attributes

### mapping[int]

When enabled ( 1 ), the  live.map  object is listening for mouse selection of Live user interface elements. When disabled ( 0 ), the object is not listening.

### strict[int]

When enabled ( 1 ), the [live.map](https://docs.cycling74.com/reference/live.map) object will ignore mouse clicks on Live user interface elements inside the same device as the  live.map  object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Begin the process of listening for mouse clicks for Live user interface element selection. Selecting a Live user interface element will automatically stop mapping after outputting the path and ID of the selected element.

### int

1  in the left inlet of the object will begin the process of listening for mouse clicks for Live user interface element selection. Selecting a Live user interface element will automatically stop mapping after outputting the path and ID of the selected element. A  0  will manually stop mapping, whether or not a Live user interface element was selected.

Arguments:

- enable
  [int]

### cancel

Stop mapping if it was started.

### getdefault

Output the default value of the mapped Live user interface element, preceded by the word  default , from the rightmost outlet of the object.

### getrange

Output the range of the mapped Live user interface element, preceded by the word  range , from the rightmost outlet of the object.

### unmap

If an element was previously mapped, clear the internal state of the  live.map  object, as well as any information about default value, range, etc.

## Output

### Outlets

The  live.map  object's outlets send, from right to left:

- dumpout : outputs the response to the  getdefault  and  getrange  methods, as well as any attribute value queries
- mapping : outputs the current mapping state ( 0  or  1 )
- name : output the element name when mapped (when unmapped, the name  <none>  will be output)
- id : output the element LOM ID when mapped (when unmapped, the ID  0  will be output)
- path : output the element LOM path when mapped (when unmapped, the path  <none>  will be output)

## See Also

| Name | Description |
| --- | --- |
| [bogus](https://docs.cycling74.com/reference/bogus) |  |
