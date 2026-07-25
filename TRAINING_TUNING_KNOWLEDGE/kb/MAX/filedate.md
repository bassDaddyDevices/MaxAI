---
type: max
name: "filedate"
summary: "Report the modification date of a file"
signal: false
url: "https://docs.cycling74.com/reference/filedate/"
package: "Max"
see_also: ["date", "filein", "filepath", "folder", "opendialog"]
---
# filedate

Report the modification date of a file

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Outputs the modification date of a provided file path.

Arguments:

- pathname
  [list]

## Output

### list

Sends the date that the file was last changed as a list (month, day, year, hours, minutes and seconds).

## See Also

| Name | Description |
| --- | --- |
| [date](https://docs.cycling74.com/reference/date) | Report current date and time |
| [filein](https://docs.cycling74.com/reference/filein) | Read and access a file of binary data |
| [filepath](https://docs.cycling74.com/reference/filepath) | Manage and report on the Max search path |
| [folder](https://docs.cycling74.com/reference/folder) | List the files in a folder |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
