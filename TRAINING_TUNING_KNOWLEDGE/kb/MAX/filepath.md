---
type: max
name: "filepath"
summary: "Manage and report on the Max search path"
signal: false
url: "https://docs.cycling74.com/reference/filepath/"
package: "Max"
see_also: ["conformpath", "filedate", "folder", "opendialog"]
---
# filepath

Manage and report on the Max search path

## Description

Provides access to the Max search path, and allows modification to the search path used by a patch.

#### Discussion

The [filepath](https://docs.cycling74.com/reference/filepath) object is used in the File Preferences patcher to report and change the various folders Max uses to look for files at certain times. It can assist with managing search paths in the File Preferences patcher or manage paths specific to a single patch.

## Arguments

### path-type[symbol] optional

Specifies one of the Max search path types ( search ,  startup ,  help ,  action , or  default )

### preference[int] optional

A number greater than zero specifies a slot in the Preferences file. If the argument is  0  or no number is supplied, the path will not be saved in the Preferences file.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  causes the currently saved path name(s) to be output as a list.

### append

The word  append , followed by a symbol which specifies a folder, adds the folder to the list of paths (but does not save it in the Preferences file). An optional integer subfolder flag will also add any subfolders when set to 1.

Arguments:

- folder
  [list]
- subfolder-flag
  [int]

### clear

This method is obsolete. Currently, it has no effect.

Arguments:

- input
  [int]

### revert

Causes the pathnames to be reset to the last set of Max file preferences to be saved.

### set

The word  set , followed by the name of a Max search path type ( search ,  startup ,  help ,  action , or  default ), sets the current search path to the type specified. An optional integer subfolder flag will also add any subfolders when set to 1.

Arguments:

- pathtype
  [list]
- subfolder-flag
  [int]

## Output

### symbol

The currently stored path name in response to a  bang .

## See Also

| Name | Description |
| --- | --- |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [filedate](https://docs.cycling74.com/reference/filedate) | Report the modification date of a file |
| [folder](https://docs.cycling74.com/reference/folder) | List the files in a folder |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
