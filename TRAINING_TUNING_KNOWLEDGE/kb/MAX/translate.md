---
type: max
name: "translate"
summary: "Convert between different time formats"
signal: false
url: "https://docs.cycling74.com/reference/translate/"
package: "Max"
see_also: ["metro", "timepoint", "transport", "when"]
---
# translate

Convert between different time formats

## Description

The [translate](https://docs.cycling74.com/reference/translate) object converts from any of the fixed or relative Max [time values](https://docs.cycling74.com/userguide/time_value_syntax) to any other fixed or relative time value.

## Arguments

### input-format[symbol] optional

The first argument sets the input format to expect. These arguments are a shortcut for setting the attributes of this object which do the same thing. Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

### output-format[symbol] optional

The second argument sets the format to output. These arguments are a shortcut for setting the attributes of this object which do the same thing. Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

## Attributes

### in[symbol]: bbu

Sets the time format of the input to be translated.

Possible values:

'ticks'

'ms'

'bars.beats.units'

'samples'

'hz'

'notevalues'

'hh:mm:ss'

### listen[int]: 1

When listen is enabled, [transport](https://docs.cycling74.com/reference/transport) will output new values for the most recent input when the transport tempo or time signature changes. listen is enabled by default.

### listmode[int]: 0

When listmode is enabled, incoming lists are treated as a series of single values to translate one-by-one, producing a list of translated time values. However, list conversion only happens when both the input and output time formats are single-valued. When listmode is disabled or the input or output time formats are multi-valued, an input list will be treated as describing a single time value with multiple elements.

### mode[symbol]: interval

Sets the mode for time values. The [translate](https://docs.cycling74.com/reference/translate) object can output time values in either  *position*  relative to the system start value of 1.1.0 or  *interval* , where a value of 1.1.0 would indicate one bar, one beat, and no units (2400 ticks at 4/4 in the default resolution).

Note: this attribute may not apply, depending on the type of unit conversion.

Possible values:

'interval'
(
Value represents a time interval
)
'position'
(
Value represents a position in time
)

### out[symbol]: ticks

Set the time format to use for output

Possible values:

'ticks'

'ms'

'bars.beats.units'

'samples'

'hz'

'notevalues'

'hh:mm:ss'

### transport[symbol]

The name of a [transport](https://docs.cycling74.com/reference/transport) object to use for tempo information. The default value is the global 'internal' transport.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The last time passed in is converted into the output type specified. Where appropriate, the input type of the last time passed in will be re-assessed by checking the in attribute.

### int

The time value is converted from the input to output time format and sent out the outlet.

Arguments:

- time
  [int]

### float

The time value is converted from the input to output time format and sent out the outlet.

Arguments:

- time
  [float]

### list

When listmode is enabled and the input and output time formats are single valued, list items are translated individually and produce a corresponding output list. For example, if the input format is  ticks  and the output format is  ms  at a tempo of 120 BPM, the input list  480 240 120  will produce an output of  500 250 125 .
When listmode is disabled or the input or output time formats are multi-valued, an input list will be treated as describing a single time value with multiple elements.

Arguments:

- time
  [list]

### anything

The time value is converted from the input to output time format and sent out the outlet.

Arguments:

- time
  [list]

## See Also

| Name | Description |
| --- | --- |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [timepoint](https://docs.cycling74.com/reference/timepoint) | Bang at a specific time |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [when](https://docs.cycling74.com/reference/when) | Report the current transport time |
