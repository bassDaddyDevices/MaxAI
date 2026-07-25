---
type: mc
name: "mc.change~"
summary: "Report signal direction  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.change~/"
package: "MC"
see_also: ["edge~", "thresh~", "zerox~"]
---
# mc.change~

Report signal direction (multichannel)

## Description

Use the [change](https://docs.cycling74.com/reference/change) object to monitor increase, decrease, or no change in a signal value.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

You can set the value stored with a  float .

Arguments:

- input
  [float]

### signal

Any signal to be watched for changed and unchanged values.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

When the current sample is greater in value than the previous sample, [change~](https://docs.cycling74.com/reference/change~) outputs a sample of 1. When the current sample is the same as the previous sample, [change~](https://docs.cycling74.com/reference/change~) outputs a sample of 0. When the current sample is less than the previous sample, [change~](https://docs.cycling74.com/reference/change~) outputs a sample of -1.

## See Also

| Name | Description |
| --- | --- |
| [edge~](https://docs.cycling74.com/reference/edge~) | Detect logical signal transitions |
| [thresh~](https://docs.cycling74.com/reference/thresh~) | Detect signal above a set level |
| [zerox~](https://docs.cycling74.com/reference/zerox~) | Detect zero crossings |
