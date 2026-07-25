---
type: max
name: "folder"
summary: "List the files in a folder"
signal: false
url: "https://docs.cycling74.com/reference/folder/"
package: "Max"
see_also: ["conformpath", "dropfile", "filein", "filepath", "opendialog", "pcontrol", "umenu"]
---
# folder

List the files in a folder

## Description

Outputs all of the file names in a given folder. This can be especially useful for loading a [umenu](https://docs.cycling74.com/reference/umenu).

#### Discussion

The forward-slash character ( **/** ) is used as a path delineator. An initial slash at the beginning of a path indicates the boot volume. The Max application folder is referred to by using period-slash (e.g.: "./Cycling '74/max-help"), and the Cycling '74 folder may be referred to by using C74. A path on Macintosh systems is preceded by the name of the machine and a colon:

"Macintosh HD:/Users/Documents/max stuff/Desktop/phase\_vocoder.pat"

On Windows systems, a path is preceded by a drive letter

"C:/Documents/max stuff/Desktop/phase\_vocoder.pat"

## Arguments

### pathname[symbol] optional

The absolute path to a folder

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Gets the names of all files of a specific type within a specific folder, and outputs those names to be placed in a [message](https://docs.cycling74.com/reference/message) object or a pop-up [umenu](https://docs.cycling74.com/reference/umenu) object.

### int

See the  bang  entry.

Arguments:

- input
  [int]

### anything

See the  symbol  entry.

Arguments:

- pathname
  [list]

### symbol

Specifies the pathname of a folder in the search path, and causes the contents of that folder to be output for storage in a [umenu](https://docs.cycling74.com/reference/umenu) or a [message](https://docs.cycling74.com/reference/message). Input pathnames can contain slashes, colons, or backslashes as separators.

Arguments:

- pathname
  [symbol]

### types

The word  types , followed by one or more [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) sets the file types that the [folder](https://docs.cycling74.com/reference/folder) object will look for in the specified folder.

Arguments:

- typecode
  [list]

## Output

### append

Out left outlet: Immediately following the  clear  message, each filename in the specified folder is sent out in alphabetical order preceded by the word  append .

### clear

Out left outlet: When a pathname or a bang is received in the inlet, the first message that is sent out the left outlet is  clear , which is intended to erase the contents of a receiving [message](https://docs.cycling74.com/reference/message) or [umenu](https://docs.cycling74.com/reference/umenu) object.

### int

Out right outlet: When a pathname or a bang is received in the inlet, the number of items in the folder is sent out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [dropfile](https://docs.cycling74.com/reference/dropfile) | Drag and drop files |
| [filein](https://docs.cycling74.com/reference/filein) | Read and access a file of binary data |
| [filepath](https://docs.cycling74.com/reference/filepath) | Manage and report on the Max search path |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [pcontrol](https://docs.cycling74.com/reference/pcontrol) | Open and close subwindows |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |
