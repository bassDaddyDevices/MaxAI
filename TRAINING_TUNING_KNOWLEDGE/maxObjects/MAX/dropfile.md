---
type: max
name: "dropfile"
summary: "Drag and drop files"
signal: false
url: "https://docs.cycling74.com/reference/dropfile/"
package: "Max"
see_also: ["absolutepath", "filepath", "folder", "opendialog", "relativepath", "strippath"]
---
# dropfile

Drag and drop files

## Description

[dropfile](https://docs.cycling74.com/reference/dropfile) defines a region for dragging and dropping files into and then outputs the filepath and filetype upon file input.

## Arguments

None.

## Attributes

### border[float]: 2.

Sets the size in pixels of the [dropfile](https://docs.cycling74.com/reference/dropfile) object's border.

### bordercolor[4 floats]

Sets the color of the [dropfile](https://docs.cycling74.com/reference/dropfile) border in RGBA format.

### folderslash[int]: 1

Toggles adding a slash character ( **/** ) at the end of a folder name when output is triggered.

### rounded[float]: 8.

Sets the amount in pixels by which to round the corners of the [dropfile](https://docs.cycling74.com/reference/dropfile) object.

### types[symbol]

The word  types , followed by one or more [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) sets the [dropfile](https://docs.cycling74.com/reference/dropfile) object to search for the specified file type(s) and opens a standard dialog window. Example type codes for files are  TEXT  for text files,  maxb  for Max binary format patcher files, and  AIFF  for AIFF format audio files.  types  with no arguments makes the object accept all file types, which is the default setting.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (drag)

When a file icon is dragged from the Finder or Max File Browser onto a [dropfile](https://docs.cycling74.com/reference/dropfile) object in a locked patcher window, the object checks the file's type against those that it has been told to accept. If the file is of an acceptable type, the outline of the [dropfile](https://docs.cycling74.com/reference/dropfile) box is highlighted. If the mouse button is released while the cursor is inside the [dropfile](https://docs.cycling74.com/reference/dropfile) box, the [dropfile](https://docs.cycling74.com/reference/dropfile) object outputs the type and full pathname of the file out its outlets.

## Output

### any symbol

Out right outlet: The [four-letter filetype code](https://docs.cycling74.com/userguide/filetypes) of the acceptable file is sent out the right outlet.

### symbol

Out left outlet: When an acceptable file icon has been dragged onto [dropfile](https://docs.cycling74.com/reference/dropfile) and the mouse released within its box, the absolute pathname of the file is sent out as a single symbol. The output pathnames contain slash separators.

Absolute pathnames look like this:

"C:/Max Folder/extras/mystuff/mypatch.pat"

The [conformpath](https://docs.cycling74.com/reference/conformpath) object can be used to convert paths of one pathtype and/or pathstyle to another.

When aliases of folders are dragged onto [dropfile](https://docs.cycling74.com/reference/dropfile), the aliases are resolved to create the output path.

If you want to use the [dropfile](https://docs.cycling74.com/reference/dropfile) object to cause a file to be read by another object that accepts the  read  message with a filename argument, put a [prepend read](https://docs.cycling74.com/reference/prepend) object between [dropfile](https://docs.cycling74.com/reference/dropfile) and the object that will open a file, as shown in the example.

## See Also

| Name | Description |
| --- | --- |
| [absolutepath](https://docs.cycling74.com/reference/absolutepath) | Convert a file name to an absolute path |
| [filepath](https://docs.cycling74.com/reference/filepath) | Manage and report on the Max search path |
| [folder](https://docs.cycling74.com/reference/folder) | List the files in a folder |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [relativepath](https://docs.cycling74.com/reference/relativepath) | Convert an absolute to a relative path |
| [strippath](https://docs.cycling74.com/reference/strippath) | Separate filename from a full pathname |
