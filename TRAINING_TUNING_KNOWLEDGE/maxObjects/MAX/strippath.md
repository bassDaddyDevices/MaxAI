---
type: max
name: "strippath"
summary: "Separate filename from a full pathname"
signal: false
url: "https://docs.cycling74.com/reference/strippath/"
package: "Max"
see_also: ["absolutepath", "conformpath", "dropfile", "opendialog", "relativepath", "savedialog"]
---
# strippath

Separate filename from a full pathname

## Description

Removes path information from a complete file path. [strippath](https://docs.cycling74.com/reference/strippath) also tells you whether the resulting filename is in the search path or not.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

An absolute pathname as a symbol. An absolute pathname looks like this:

"MyDisk:/Max Folder/extras/filename"

Arguments:

- filepath
  [symbol]

## Output

### int

Out right outlet: If the file was found within the current Max search path a  1  is sent out the right outlet. A  0  is sent otherwise.

### symbol

Out left outlet: The file name, with all path information preceding it removed.

## See Also

| Name | Description |
| --- | --- |
| [absolutepath](https://docs.cycling74.com/reference/absolutepath) | Convert a file name to an absolute path |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [dropfile](https://docs.cycling74.com/reference/dropfile) | Drag and drop files |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [relativepath](https://docs.cycling74.com/reference/relativepath) | Convert an absolute to a relative path |
| [savedialog](https://docs.cycling74.com/reference/savedialog) | Open a dialog asking for a filename |
