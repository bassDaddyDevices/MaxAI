---
type: max
name: "screensize"
summary: "Output the monitor size"
signal: false
url: "https://docs.cycling74.com/reference/screensize/"
package: "Max"
see_also: ["gestalt", "jit.displays", "menubar", "thispatcher", "zmap"]
---
# screensize

Output the monitor size

## Description

Reports the resolution to which the computer's monitor is currently set.

#### Discussion

**Note:**  The [screensize](https://docs.cycling74.com/reference/screensize) object on Windows now behaves as it does on the Macintosh - it outputs the screen's size rather than its bounding coordinates. While this may cause off-by-one errors in patches that use the [screensize](https://docs.cycling74.com/reference/screensize) object on Windows, fixing them will guarantee cross-platform compatibility for your patches.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Triggers the output of the main screen size and total multi-monitor screen bounding rectangle out the outlets.

## Output

### list

Out left outlet: The bounding coordinates of the main screen: left is first, followed by top, right, and bottom.

Out right outlet: The bounding coordinates of all monitors. If there is only one monitor, the output will be the same as with the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [gestalt](https://docs.cycling74.com/reference/gestalt) | Retrieve system information |
| [jit.displays](https://docs.cycling74.com/reference/jit.displays) | Set and query monitor attributes |
| [menubar](https://docs.cycling74.com/reference/menubar) | Put up a custom menu bar |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
| [zmap](https://docs.cycling74.com/reference/zmap) | Maps input range of values to output range |
