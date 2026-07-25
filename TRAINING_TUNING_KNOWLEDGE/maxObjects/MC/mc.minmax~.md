---
type: mc
name: "mc.minmax~"
summary: "Compute minimum/maximum signal values (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.minmax~/"
package: "MC"
see_also: ["meter~", "peakamp~", "snapshot~"]
---
# mc.minmax~

Compute minimum/maximum signal values (multichannel)

## Description

[minmax~](https://docs.cycling74.com/reference/minmax~) computes the minimum and maximum values of an input signal and outputs signals which are the maximum signal and the minimum signal as well as outputs of the minimum and maximum floats.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends floating-point values corresponding to the minimum and maximum signal values out the 3rd and 4th outputs.

### reset

Resets the current minimum and maximum values to the default (0).

### signal

In left inlet: signal to be evaluated for minimum and maximum values.

In right inlet: A non-zero signal value will reset the current minimum and maximum.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### float

Out 3rd outlet: When [minmax~](https://docs.cycling74.com/reference/minmax~) receives a  bang  message, a floating-point value which corresponds to the minimum signal value received since startup or the last  reset  message is output.

Out 4th outlet: When [minmax~](https://docs.cycling74.com/reference/minmax~) receives a  bang  message, a floating-point value which corresponds to the maximum signal value received since startup or the last  reset  message is output.

### signal

Out 1st outlet: Signal value which corresponds to the minimum signal value received since startup or the last  reset  message.

Out 2nd outlet: Signal value which corresponds to the maximum signal value received since startup or the last  reset  message.

## See Also

| Name | Description |
| --- | --- |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [peakamp~](https://docs.cycling74.com/reference/peakamp~) | Report the maximum amplitude of a signal |
| [snapshot~](https://docs.cycling74.com/reference/snapshot~) | Convert signal values to numbers |
