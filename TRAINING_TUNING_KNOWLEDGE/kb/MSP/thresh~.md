---
type: msp
name: "thresh~"
summary: "Detect signal above a set level"
signal: true
url: "https://docs.cycling74.com/reference/thresh~/"
package: "MSP"
see_also: [">~", "change~", "edge~"]
---
# thresh~

Detect signal above a set level

## Description

Use the [thresh~](https://docs.cycling74.com/reference/thresh~) object to detect signals which exceed a specified level.

#### Discussion

[thresh~](https://docs.cycling74.com/reference/thresh~) initially outputs a signal of 0. It outputs a signal of 1 when the input is equal or greater than a set "high" threshold, until it goes below the reset or "low" threshold, at which point the 0 signal is output again. If the low and high thresholds are the same, a reset occurs when the signal is less than the threshold value. Otherwise, a reset occurs when the signal is less than or equal to the low threshold. The low and high thresholds can be specified as arguments, via floats in the middle and right inlets, or as signals in the middle and right inlets.

## Arguments

### low/reset-threshold[float] optional

The first argument specifies the reset or low threshold level. If no argument is present, the reset level is  0 .

If only one argument is present, it specifies the reset level, and the set level is  0 .

### high/set-threshold[float] optional

The second argument specifies the set or high threshold level. If no argument is present, the set level is  0 .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

TEXT\_HERE

### float

In middle inlet: Sets the lower ("reset") threshold level for the input signal. When a sample in the input signal is greater than or equal to the upper ("set") level, [thresh~](https://docs.cycling74.com/reference/thresh~) sends out a signal of  1  until a sample in the input signal is less than or equal to this reset level.

In right inlet: Sets the upper ("set") threshold level for the input signal. When the input is equal to or greater than this value, [thresh~](https://docs.cycling74.com/reference/thresh~) sends out a signal of  1 .

Arguments:

- reset/set-threshold
  [float]

### list

A two element list of floats sent to the middle inlet will set the value of the low and high thresholds.

Arguments:

- reset/set-thresholds
  [float]

### signal

In left inlet: A signal whose level you want to detect.

## Output

### signal

When a sample in the input signal is greater than or equal to the upper threshold level, the output is  1 . The output continues to be  1  until a sample in the input signal is equal to or less than the reset level. If the set level and the reset level are the same, the output is  1  until a sample in the input signal is less than the reset level.

## See Also

| Name | Description |
| --- | --- |
| [>~](https://docs.cycling74.com/reference/greaterthan~) | Is greater than, comparison of two signals |
| [change~](https://docs.cycling74.com/reference/change~) | Report signal direction |
| [edge~](https://docs.cycling74.com/reference/edge~) | Detect logical signal transitions |
