---
type: max
name: "togedge"
summary: "Report zero/non-zero transitions"
signal: false
url: "https://docs.cycling74.com/reference/togedge/"
package: "Max"
see_also: ["change", "led", "toggle"]
---
# togedge

Report zero/non-zero transitions

## Description

Output bangs for 0-to-1 transitions out the left outlet, and bangs the right outlet for 1-to-0 transitions. Outlets alternate output when bangs are received.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Switches the value stored in [togedge](https://docs.cycling74.com/reference/togedge) from 0 to non-zero, or vice versa, and reports the change by sending a  bang  out one of the outlets.

### int

The number is stored in [togedge](https://docs.cycling74.com/reference/togedge). If it is not 0, and the previously stored number was  0 , [togedge](https://docs.cycling74.com/reference/togedge) sends a  bang  out the left outlet. If the number is  0 , and the previously stored number was not 0, [togedge](https://docs.cycling74.com/reference/togedge) sends a  bang  out the right outlet. Otherwise, [togedge](https://docs.cycling74.com/reference/togedge) sends no output.

Arguments:

- input
  [int]

## Output

### bang

Out left outlet: If the stored value is changed from 0 to not 0.

Out right outlet: If the stored value is changed from not 0 to 0.

## See Also

| Name | Description |
| --- | --- |
| [change](https://docs.cycling74.com/reference/change) | Filter out repetitions of a number |
| [led](https://docs.cycling74.com/reference/led) | Color on/off button |
| [toggle](https://docs.cycling74.com/reference/toggle) | Switch between off and on (0 and 1) |
