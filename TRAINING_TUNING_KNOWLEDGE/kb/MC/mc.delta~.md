---
type: mc
name: "mc.delta~"
summary: "Signal of sample differences  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.delta~/"
package: "MC"
see_also: ["average~", "avg~"]
---
# mc.delta~

Signal of sample differences (multichannel)

## Description

[delta~](https://docs.cycling74.com/reference/delta~) outputs a signal which represents the differences between each incoming sample value in the input signal.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Input signal to be evaluated.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The output consists of samples that are the difference between the current input sample and the previous input sample. For example, if the input  signal  contained 1,.5,2,.5, the output would be 1,-.5,1.5,-1.5.

## See Also

| Name | Description |
| --- | --- |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [avg~](https://docs.cycling74.com/reference/avg~) | Signal average |
