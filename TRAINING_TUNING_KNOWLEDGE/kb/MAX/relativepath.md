---
type: max
name: "relativepath"
summary: "Convert an absolute to a relative path"
signal: false
url: "https://docs.cycling74.com/reference/relativepath/"
package: "Max"
see_also: ["absolutepath", "conformpath", "opendialog", "strippath"]
---
# relativepath

Convert an absolute to a relative path

## Description

Converts an absolute path to one that is relative to the Max application folder.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

An absolute pathname of a folder or file as a symbol. An absolute pathname looks like this:

'MyDisk:/Max Folder/extras/filename'

Arguments:

- pathname
  [symbol]

## Output

### symbol

The pathname of the folder or file relative to the Max application folder as a symbol. If the input pathname is within the Max application folder, the path is changed to start with a dot-slash (./) followed by the folder names of the path. Otherwise, the input is repeated to the output.

## See Also

| Name | Description |
| --- | --- |
| [absolutepath](https://docs.cycling74.com/reference/absolutepath) | Convert a file name to an absolute path |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [strippath](https://docs.cycling74.com/reference/strippath) | Separate filename from a full pathname |
