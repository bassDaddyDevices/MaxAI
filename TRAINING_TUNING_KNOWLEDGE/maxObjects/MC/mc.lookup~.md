---
type: mc
name: "mc.lookup~"
summary: "Transfer function lookup table  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.lookup~/"
package: "MC"
see_also: ["buffer~", "peek~"]
---
# mc.lookup~

Transfer function lookup table (multichannel)

## Description

[lookup~](https://docs.cycling74.com/reference/lookup~) allows you to use a table of samples ([buffer~](https://docs.cycling74.com/reference/buffer~) object) to do waveshaping on a signal, in which the Y values of an input signal are used as X values to look up new signal values. Input values of -1 to +1 are mapped to table values between 0 (or the specified sample offset) and the size of the table.

## Arguments

### buffer-name[symbol] optional

Names the [buffer~](https://docs.cycling74.com/reference/buffer~) object whose sample memory is used by [lookup~](https://docs.cycling74.com/reference/lookup~) for table lookup.

### sample-offset[int] optional

After the [buffer~](https://docs.cycling74.com/reference/buffer~) name, you may specify the sample offset in the sample memory of the [buffer~](https://docs.cycling74.com/reference/buffer~) used  for a signal value of -1. The default offset is 0. The offset value is followed by an optional table size that defaults to 512. Note that the actual [lookup~](https://docs.cycling74.com/reference/lookup~) table size is equal to the table size (set using the second argument) minus the offset (set using first argument), so raising the offset value will decrease the table size. The [lookup~](https://docs.cycling74.com/reference/lookup~) object always uses the first channel in a multi-channel [buffer~](https://docs.cycling74.com/reference/buffer~). The

## Attributes

### chan[int]

Buffer Channel Offset

### offset[int]

Buffer Sample Frame Offset

### size[int]

Lookup Table Size

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The settings of offset and table size can be changed with a number in the middle or right inlets. If a signal is connected to one of these inlets, a number in the corresponding inlet is ignored.

Arguments:

- offset
  [int]
- table-size
  [int]

### float

The settings of offset and table size can be changed with an number in the middle or right inlets. If a signal is connected to one of these inlets, a number in the corresponding inlet is ignored.

Arguments:

- offset
  [int]
- table-size
  [int]

### (mouse)

Double-clicking on [lookup~](https://docs.cycling74.com/reference/lookup~) opens an editing window where you can vieW the contents of its associated [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### set

The word  set , followed by a  symbol , changes the associated [buffer~](https://docs.cycling74.com/reference/buffer~) object.

Arguments:

- buffer-name
  [symbol]

### signal

In left inlet: Signal values are mapped by amplitude to values stored in a [buffer~](https://docs.cycling74.com/reference/buffer~). Each sample in the incoming signal within the range -1 to 1 is mapped to a corresponding value in the current table size number of samples of the [buffer~](https://docs.cycling74.com/reference/buffer~). Signal values between -1 and 0 are mapped to the first half of the total number of samples after the current sample offset. Signal values between 0 and 1 are mapped to the next half of the samples. Input amplitude exceeding the range from -1 to 1 results in an output of 0.

In middle inlet: Sets the offset into the sample memory of a [buffer~](https://docs.cycling74.com/reference/buffer~) used to map samples coming in the left inlet. The sample at the specified offset corresponds to an input value of -1.

In right inlet: Sets the number of samples in a [buffer~](https://docs.cycling74.com/reference/buffer~) used for the table. Samples coming in the left inlet between -1 and 1 will be mapped by amplitude to the specified range of samples. The default value is 512. [lookup~](https://docs.cycling74.com/reference/lookup~) changes the table size before it computes each vector but not within a vector. It uses the first sample in a signal vector coming in the right inlet as the table size.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Each sample in the incoming signal within the range -1 to 1 is mapped to a corresponding position in the current table size number of samples of the named [buffer~](https://docs.cycling74.com/reference/buffer~) object, and the stored value is sent out.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
