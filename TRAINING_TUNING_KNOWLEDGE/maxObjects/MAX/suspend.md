---
type: max
name: "suspend"
summary: "Reports when the application is in the background or foreground"
signal: false
url: "https://docs.cycling74.com/reference/suspend/"
package: "Max"
see_also: ["active", "gestalt"]
---
# suspend

Reports when the application is in the background or foreground

## Description

Outputs a 0 when the application is in the background, and a 1 when the application is in the foreground.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Output

### int

Out left outlet: When the application is in the background, a  0  is output. When the application is in the foreground), a  1  is output.

## See Also

| Name | Description |
| --- | --- |
| [active](https://docs.cycling74.com/reference/active) | Send 1 when patcher window is active, 0 when inactive |
| [gestalt](https://docs.cycling74.com/reference/gestalt) | Retrieve system information |
