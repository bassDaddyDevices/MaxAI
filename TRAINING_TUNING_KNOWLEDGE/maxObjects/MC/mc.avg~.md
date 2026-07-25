---
type: mc
name: "mc.avg~"
summary: "Signal average  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.avg~/"
package: "MC"
see_also: ["average~", "meter~"]
---
# mc.avg~

Signal average (multichannel)

## Description

Use the [avg~](https://docs.cycling74.com/reference/avg~) object to keep track of the average (absolute) amplitude of the input signal received over a specified time interval.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Triggers a report of the average (absolute) amplitude of the signal received since the previous  bang , and clears the [avg~](https://docs.cycling74.com/reference/avg~) object's memory in preparation for the next report.

### signal

The signal to be averaged.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### float

When  bang  is received in the inlet, [avg~](https://docs.cycling74.com/reference/avg~) reports the average amplitude of the signal received since the previous  bang .

## See Also

| Name | Description |
| --- | --- |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
