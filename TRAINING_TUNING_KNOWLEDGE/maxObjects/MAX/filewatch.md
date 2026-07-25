---
type: max
name: "filewatch"
summary: "Watch a file for changes"
signal: false
url: "https://docs.cycling74.com/reference/filewatch/"
package: "Max"
see_also: ["absolutepath", "opendialog", "relativepath", "savedialog"]
---
# filewatch

Watch a file for changes

## Description

Watch a specific file and reports a bang whenever that file is altered.

## Arguments

### filename[symbol] optional

An optional symbol argument specifies the file name to watch.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

See the  int  entry.

### int

Turns on the [filewatch](https://docs.cycling74.com/reference/filewatch) object. Sending a non-zero number causes the [filewatch](https://docs.cycling74.com/reference/filewatch) object to commence watching the file for changes. Sending a 0 causes the object to ignore changes to the file.

Arguments:

- flag
  [int]

### anything

A filepath or filename within the Max search path will set which file is to be watched by [filepath](https://docs.cycling74.com/reference/filepath).

Arguments:

- filepath
  [list]

### stop

The  stop  message functions the same as sending a 0, causing the object to ignore any file changes.

## Output

### bang

When the [filewatch](https://docs.cycling74.com/reference/filewatch) object is active, any change to the specified file will cause [filewatch](https://docs.cycling74.com/reference/filewatch) to output a  bang .

## See Also

| Name | Description |
| --- | --- |
| [absolutepath](https://docs.cycling74.com/reference/absolutepath) | Convert a file name to an absolute path |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [relativepath](https://docs.cycling74.com/reference/relativepath) | Convert an absolute to a relative path |
| [savedialog](https://docs.cycling74.com/reference/savedialog) | Open a dialog asking for a filename |
