---
type: mc
name: "mc.table~"
summary: "Signal Table Lookup (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.table~/"
package: "MC"
see_also: ["buffer~", "index~", "itable", "lookup~", "table"]
---
# mc.table~

Signal Table Lookup (multichannel)

## Description

Use [table~](https://docs.cycling74.com/reference/table~) to remap incoming signal values with a [table](https://docs.cycling74.com/reference/table) object.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### embed[int]: 1

When the embed attribute is enabled, table values are saved in a patcher file and restored when it is reopened.

### extend[int]

The extend attribute controls how [table~](https://docs.cycling74.com/reference/table~) responds when an input index value (either signal or float) is less than zero or greater than the table size.

Possible values:

0 = 'Zero'
(
Output zero
)
When extend is Zero (0), a zero signal is output when the index is outside the table bounds.

1 = 'Extend'
(
Output lowest or highest table values
)
When extend is set to Extend (1), [table~](https://docs.cycling74.com/reference/table~) outputs the value at index 0 is output when the input index less than zero. It outputs the value at the highest table index is when the input index is greater than the table size.

2 = 'Wrap'
(
Wrap index
)
When extend is set to Wrap (2), [table~](https://docs.cycling74.com/reference/table~) performs a modulo operation on the input index. Example: if the table size is 128 and the input is 130, the value at index 2 (130 mod 128) will be output.

3 = 'Ignore'
(
Don't change output
)
When extend is set to Ignore (3), any input index outside the table size is ignored and does not change the output.

### inmap[atom]

The inmap attribute specifies a range of input samples to map to table indices. For instance if your input signal will be between 0 and 1, you can use an inmap of  0 1 , which will scale to the current size of the table. If the table changes size, the current input map adjusts automatically. To clear the current inmap, use a value of  none  or  0 0 .

### inputmode[int]

The inputmode attribute determines how input values produce output values.

Possible values:

0 = 'Lookup'
(
Lookup
)
When inputmode is set to Lookup (0), an incoming value is used as an index into the table.

1 = 'Increment Index'
(
Increment Index
)
When inputmode is set to Increment Index (1), a change event in the input signal (according to the setting of the triggermode attribute) causes the table to output the value at the next index.

2 = 'Random Distribution'
(
Random Distribution
)
When inputmode is set to Random Distribution (2), a change event in the input signal (according to the setting of the triggermode attribute) causes the table to output a value based on using the table data as a probability distribution. See the  bang  message for more details.

### interp[int]

The interp attribute determines how input values between integer table indices produce output.

Possible values:

0 = 'None'
(
Truncate Index
)
When interp is set to None (0), an incoming value is truncated to its integer value before the lookup. No interpolation is performed.

1 = 'Linear'
(
Linear Interpolation
)
When interp is set to Linear (1), the output for any input value between two table indices is linearly interpolated between the table values at those two indices. For example, an input of 1.5 -- with table values of 5 at index 1 and 10 at index 2 -- produces an output of 7.5.

2 = 'Round'
(
Round Index
)
When interp is set to Round (2), an incoming value is rounded to the nearest integer value before the lookup. No interpolation is performed.

### name[symbol]

The name attribute permits table data to be shared among multiple table objects ([table~](https://docs.cycling74.com/reference/table~), [table](https://docs.cycling74.com/reference/table), or [itable](https://docs.cycling74.com/reference/itable)) with the same name. Changing the name switches the table used for lookup.

### outscale[atom]

The outscale attribute specifies a range of output samples. The current range of the table will map to the specified range. For example, if you want the output of [table~](https://docs.cycling74.com/reference/table~) to range from 0 - 1, set outscale to  0 1 . The output scaling adjusts automatically to keep output values in the specified range even if the table range changes. To clear the current outscale use a value of  none  or  0 0 .

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### range[int]

Sets the range of table values. If the signed attribute is not enabled, the maximum table value is one less than the range. For example if the range is 128, table values range from 0 to 127. If signed is enabled, table values range from +/- the range value. For example if the range is 128, table values will be -128 to 128.

### signed[int]: 0

If the signed attribute is enabled, table values range from +/- the range value. For example if the range is 128, table values will be -128 to 128. Changing the state of signed attribute does not modify table values.

### size[int]

Sets the number of elements in the table. Indices range from 0 to one less than the size.

### triggermode[int]

The triggermode attribute determines how input values are interpret as change events for triggering either an incremented index or random probability output according to the setting of the inputmode attribute. When inputmode is set to 0 (Lookup), the triggermode attribute has no effect and is disabled.

Possible values:

0 = 'Zero to Non-Zero'
(
Zero to Non-Zero
)
When triggermode is set to Zero to Non-Zero (0), a non-zero sample value in the input that follows a zero sample value causes a change event to occur.

1 = 'Change'
(
Change
)
When triggermode is set to Change (1), a sample value in the input that differs from the previous value causes a change event to occur.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The  bang  message treats the table as a probability distribution and outputs a signal corresponding to a randomly chosen index within the table. A location in the table with a higher value is more likely to have its index selected.

### int

See description for  float

### float

When a signal is not connected to the inlet of [table~](https://docs.cycling74.com/reference/table~), a number sets the index to use for table lookup output. If the number contains a fractional part and interp is set to Linear, the output will be interpolated between two table values. The number is also mapped to an index according to the current setting of the inmap attribute and the table value is scaled according to the outscale attribute.

### (mouse)

Double-clicking on a [table~](https://docs.cycling74.com/reference/table~) object opens a window where you can edit the values of the lookup table.

### goto

The word  goto , followed by a table index, sets the next table index used by either the  prev  or  next  messages as they increment or decrement through the table. Unlike a  float  or  int ,  goto  itself does not change the output of the [table~](https://docs.cycling74.com/reference/table~) object and its index is not modified by the inmap attribute.

### next

When a signal is not connected to the inlet of [table~](https://docs.cycling74.com/reference/table~), the  next  message adds one to the most recent table index set by the  int , or  float , then causes the [table~](https://docs.cycling74.com/reference/table~) to output the value at this index as a signal. If a  goto  message immediately preceded  next , the value at the specified index is output. Note that  next  does not force the table index to an integer value, so it preserves any fractional part of the index caused by a previous  float  message. When  next  increments the index and it is larger than the table size, it wraps around to zero.

### prev

When a signal is not connected to the inlet of [table~](https://docs.cycling74.com/reference/table~), the  prev  message subtracts one from the most recent table index set by the  int , or  float , then causes the [table~](https://docs.cycling74.com/reference/table~) to output the value at this index as a signal. If a  goto  message immediately preceded  prev , the value at the specified index is output. Note that  prev  does not force the table index to an integer value, so it preserves any fractional part of the index caused by a previous  float  message. When  prev  decrements the index and it becomes less than zero, it will wrap around to the end of the table.

### signal

Incoming signal values are used as indices for table lookup.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [index~](https://docs.cycling74.com/reference/index~) | Read from a buffer~ with no interpolation |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [lookup~](https://docs.cycling74.com/reference/lookup~) | Transfer function lookup table |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
