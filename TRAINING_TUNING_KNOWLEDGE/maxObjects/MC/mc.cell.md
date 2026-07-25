---
type: mc
name: "mc.cell"
summary: "Format messages from a  jit.cellblock for use with MC objects"
signal: false
url: "https://docs.cycling74.com/reference/mc.cell/"
package: "MC"
see_also: ["MC", "jit.cellblock"]
---
# mc.cell

Format messages from a [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) for use with MC objects

## Description

The [mc.cell](https://docs.cycling74.com/reference/mc.cell) objects takes a <column row value> message from the left outlet of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object and produces a corresponding  setvalue  message for use with MC objects to set a value for a specific channel. Since [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) column numbers are 0-relative and MC channel numbers are 1-relative, [mc.cell](https://docs.cycling74.com/reference/mc.cell) adds 1 to the incoming column number.

## Arguments

None.

## Attributes

### columns[int]

Offsets the cell values for each row after the first by the specified number of columns. Typically this should be set to the same number of columns as the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) feeding [mc.cell](https://docs.cycling74.com/reference/mc.cell). The default value for columns is 0, which causes no offset.

### constant[int]

When set, applies the specified channel to any incoming data, overriding the channel supplied by the input list.

### message[symbol]

Inserts any message after the column and before the value of all lists output by [mc.cell](https://docs.cycling74.com/reference/mc.cell). Useful for setting the value of an interal attribute of an MC object. Output lists are formatted as  setvalue  <olumn message value>.

### numeric[int]: 1

Enable the numeric attribute to filter out non-numeric text (defaults to on). When off, cells will pass non-numeric values as well. Non-numeric text could be useful for entering the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object or media file.

### row[int]

Use the row attribute to specify a row to read into the [mc.cell](https://docs.cycling74.com/reference/mc.cell) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

[mc.cell](https://docs.cycling74.com/reference/mc.cell) accepts a list in the form <col-number row-number value> and outputs a message in the form  setvalue  <col-number+1 value>.

Arguments:

- column
  [int]
- row
  [int]
- value
  [number]

## See Also

| Name | Description |
| --- | --- |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) | Edit rows and columns of data |
