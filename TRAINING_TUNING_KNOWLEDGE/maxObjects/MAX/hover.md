---
type: max
name: "hover"
summary: "Report object scripting names"
signal: false
url: "https://docs.cycling74.com/reference/hover/"
package: "Max"
see_also: ["thispatcher"]
---
# hover

Report object scripting names

## Description

Sends out the scripting names of any object over which the cursor is hovering.

#### Discussion

The [hover](https://docs.cycling74.com/reference/hover) object does not output anything when the mouse is over objects that do not respond to mouse clicks. This includes the [panel](https://docs.cycling74.com/reference/panel) and [comment](https://docs.cycling74.com/reference/comment) objects as well as any object whose  *Ignore Click*  attribute is set. In addition, the [hover](https://docs.cycling74.com/reference/hover) object uses the [front-to-back ordering](https://docs.cycling74.com/userguide/patching#object-ordering) of objects in a patcher to determine the top-most object under the mouse.

## Arguments

None.

## Attributes

### mode[int]

When this attribute is set to 1, [hover](https://docs.cycling74.com/reference/hover) will output exit notifications even when an object is obscured.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Output

### symbol

Out left outlet: When the mouse enters the space over an object with a scripting name, hover outputs the scripting name of the object out the left outlet.

Out second outlet: When the mouse enters the space over an object without a scripting name, hover outputs the symbol none out the second outlet.

Out third outlet: When the mouse leaves the space over an object with a scripting name, hover outputs the scripting name of the object out the third outlet

Out right outlet: When the mouse leaves the space over an object without a scripting name, hover outputs the symbol none out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
