---
type: msp
name: "cascade~"
summary: "Cascaded series of biquad filters"
signal: true
url: "https://docs.cycling74.com/reference/cascade~/"
package: "MSP"
see_also: ["biquad~", "buffir~", "comb~", "filtergraph~", "lores~", "onepole~", "reson~", "teeth~"]
---
# cascade~

Cascaded series of biquad filters

## Description

Use the [cascade~](https://docs.cycling74.com/reference/cascade~) to filter an input signal using a series of biquad filters.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

The filter coefficients can be provided as a  list  in the left or right inlet. The coefficients should be in sets of five, each set corresponding to a second-order section or biquad. The first five coefficients in the  list  are used for the first second-order section in the series, the next five for the second, and so on.

Arguments:

- filter-coefficients
  [list]

### bypass

The word  bypass  followed by a nonzero number will turn bypass mode on and cause the dry unfiltered signal to pass through to the object's outlet; followed by a 0 will output the filtered signal.

Arguments:

- operational-flag
  [int]

### clear

Resets all coefficients and sample-memory to 0.

### dictionary

The word  dictionary , followed by a symbol that references a named [filterdesign](https://docs.cycling74.com/reference/filterdesign) object dictionary (set via the  name  attribute), will cause the [cascade~](https://docs.cycling74.com/reference/cascade~) object to use the dictionary values for filter coefficients.

Arguments:

- dictionary-name
  [symbol]

### signal

In left inlet: Signal to be filtered. The signal is filtered by a series of two-pole two-zero (i.e. biquad) filters, often referred to as "second order sections".

### zero

The word  zero  followed by a nonzero number will cause the filtered signal to be muted; followed by a 0 will output the filtered signal (this will not prevent the unfiltered signal from appearing at the outlet when bypass mode is turned on).

Arguments:

- operational-flag
  [int]

## Output

### signal

The filtered signal.

## See Also

| Name | Description |
| --- | --- |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
| [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) | Filter editor |
| [lores~](https://docs.cycling74.com/reference/lores~) | Resonant lowpass filter |
| [onepole~](https://docs.cycling74.com/reference/onepole~) | Single-pole lowpass filter |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [teeth~](https://docs.cycling74.com/reference/teeth~) | Comb filter with feedforward and feedback delay control |
