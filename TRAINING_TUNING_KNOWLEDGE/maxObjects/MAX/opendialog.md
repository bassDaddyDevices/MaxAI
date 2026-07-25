---
type: max
name: "opendialog"
summary: "Open a dialog to ask for a file or folder"
signal: false
url: "https://docs.cycling74.com/reference/opendialog/"
package: "Max"
see_also: ["conformpath", "dialog", "dropfile", "date", "filedate", "filein", "filepath", "folder", "savedialog", "strippath"]
---
# opendialog

Open a dialog to ask for a file or folder

## Description

Use the [opendialog](https://docs.cycling74.com/reference/opendialog) object to select a file of a specific type or folder from a standard dialog window. To choose a folder, use the "fold" type. [opendialog](https://docs.cycling74.com/reference/opendialog) reports the entire pathname of the file or folder chosen, which can be passed to any Max object after the word  read  or  load .

## Arguments

### folder[symbol] optional

Sets [opendialog](https://docs.cycling74.com/reference/opendialog) to choose folders only

### soundfile[symbol] optional

Use this argument to list audio files (AIFF, NeXT/Sun, and WAV, along with some generic data file types). Jitter Appendix A lists all the files that can be opened.

### file-types[symbol] optional

One or more symbols set the list of file types or file extensions (beginning with '.') that determine which files are listed by the [opendialog](https://docs.cycling74.com/reference/opendialog) object.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Opens a standard Open Document dialog window for choosing a file or folder.

### anything

One or more symbols are interpreted as one or more type codes used to determine which files are listed by the [opendialog](https://docs.cycling74.com/reference/opendialog) object. Example type codes for files are  TEXT  for text files,  maxb  for Max binary format patcher files, .maxpat  for modern Max patcher files, and  AIFF  for AIFF format audio files.  types  with no arguments makes the object accept all file types, which is the default setting.

Arguments:

- filetype
  [list]

### path

Opens a a standard dialog window to the specified path, if valid, and caches the path for any subsequent opening via the  bang  message. Omitting the  filepath  argument unsets any path previously set.

Arguments:

- filepath
  [symbol]

### set

The word  set , followed by one or more [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) or file extensions (beginning with '.') sets the [opendialog](https://docs.cycling74.com/reference/opendialog) object to search for the specified file type(s) or extension(s) without opening a dialog window. Example type codes for files are  TEXT  for text files,  maxb  for Max binary format patcher files, .maxpat  for modern Max patcher files, and  AIFF  for AIFF format audio files.  set  with no arguments makes the object accept all file types, which is the default setting.

Arguments:

- filetype
  [list]

### setpath

Specifies a directory path to use when the standard dialog window is opened with the  bang  message, if the path is valid. Omitting the  filepath  argument unsets any path previously set.

Arguments:

- filepath
  [symbol]

### sound

Sets [opendialog](https://docs.cycling74.com/reference/opendialog) to list audio files (AIFF, NeXT/Sun, and WAV, along with some generic data file types) and opens a standard dialog window. Jitter Appendix A lists all the files that can be opened.

### types

The word  types , followed by one or more [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) sets the [opendialog](https://docs.cycling74.com/reference/opendialog) object to search for the specified file type(s) or extension(s) and opens a standard dialog window. Example type codes for files are  TEXT  for text files,  maxb  for Max binary format patcher files, .maxpat  for modern Max patcher files, and  AIFF  for AIFF format audio files.  types  with no arguments makes the object accept all file types, which is the default setting.

Arguments:

- filetype
  [list]

## Output

### bang

If the dialog box is cancelled by the user, a  bang  message is sent out the right outlet.

### symbol

Out left outlet: The absolute pathname of the file chosen by the user as a symbol. The output pathnames contain slash separators.

Absolute pathnames look like this:

"C:/Max Folder/extras/mystuff/mypatch.pat"

The [conformpath](https://docs.cycling74.com/reference/conformpath) object can be used to convert paths of one pathtype and/or pathstyle to another.

## See Also

| Name | Description |
| --- | --- |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [dialog](https://docs.cycling74.com/reference/dialog) | Open a dialog box |
| [dropfile](https://docs.cycling74.com/reference/dropfile) | Drag and drop files |
| [date](https://docs.cycling74.com/reference/date) | Report current date and time |
| [filedate](https://docs.cycling74.com/reference/filedate) | Report the modification date of a file |
| [filein](https://docs.cycling74.com/reference/filein) | Read and access a file of binary data |
| [filepath](https://docs.cycling74.com/reference/filepath) | Manage and report on the Max search path |
| [folder](https://docs.cycling74.com/reference/folder) | List the files in a folder |
| [savedialog](https://docs.cycling74.com/reference/savedialog) | Open a dialog asking for a filename |
| [strippath](https://docs.cycling74.com/reference/strippath) | Separate filename from a full pathname |
