---
type: max
name: "savedialog"
summary: "Open a dialog asking for a filename"
signal: false
url: "https://docs.cycling74.com/reference/savedialog/"
package: "Max"
see_also: ["conformpath", "dialog", "filedate", "filein", "filepath", "opendialog"]
---
# savedialog

Open a dialog asking for a filename

## Description

Opens a file dialog for selection or entry of a filename to write. [savedialog](https://docs.cycling74.com/reference/savedialog) takes a list of one or more file types and allows you to save a file and choose a type for it.

#### Discussion

To choose a folder, use the "fold" type. [savedialog](https://docs.cycling74.com/reference/savedialog) reports the entire pathname of the file or folder chosen, which can be passed to any Max object after the word  write  or  save .

## Arguments

### filetypes[symbol] optional

Sets one or more file types that will be displayed as choices for the user. The symbol  fold  specifies that the dialog box should let the user choose only folders.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes a standard  Save As  dialog box to appear, allowing the user to type in a filename and choose a folder location. The resulting location and filename are output as a symbol.

### anything

One or more [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) sets the list of types displayed in the dialog box. Example type codes for files are  TEXT  for text files,  maxb  for Max binary format patcher files, and  AIFF  for AIFF format audio files. The symbol  fold  specifies that the dialog box should let the user choose only folders.

Arguments:

- filetype
  [list]

### name

The word  name , followed by a symbol, specifies a default file name.

Arguments:

- filename
  [symbol]

### path

Opens a a standard dialog window to the specified path, if valid, and caches the path for any subsequent opening via the  bang  message. Omitting the  filepath  argument unsets any path previously set.

Arguments:

- filepath
  [symbol]

### set

The word  set , followed by a [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes), sets the [savedialog](https://docs.cycling74.com/reference/savedialog) object to display the desired file type without opening the dialog box. The chosen file type is sent out the middle outlet when the user chooses Save in the dialog box.

Arguments:

- filetype
  [list]

### setpath

Specifies a directory path to use when the standard dialog window is opened with the  bang  message, if the path is valid. Omitting the  filepath  argument unsets any path previously set.

Arguments:

- filepath
  [symbol]

## Output

### bang

Out right outlet: If the user chooses Cancel in the dialog box, or an error occurs, a bang is sent out.

### symbol

Out left outlet: The absolute pathname of the file as a symbol. The output pathnames contain slash separators.

Absolute pathnames look like this:

"C:/Max Folder/extras/mystuff/mypatch.pat"

The [conformpath](https://docs.cycling74.com/reference/conformpath) object can be used to convert paths of one pathtype and/or pathstyle to another.

### symbol

Out middle outlet: The [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) which specifies the filetype currently selected.

## See Also

| Name | Description |
| --- | --- |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [dialog](https://docs.cycling74.com/reference/dialog) | Open a dialog box |
| [filedate](https://docs.cycling74.com/reference/filedate) | Report the modification date of a file |
| [filein](https://docs.cycling74.com/reference/filein) | Read and access a file of binary data |
| [filepath](https://docs.cycling74.com/reference/filepath) | Manage and report on the Max search path |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
