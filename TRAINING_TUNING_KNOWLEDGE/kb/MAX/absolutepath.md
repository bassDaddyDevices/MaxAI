---
type: max
name: "absolutepath"
summary: "Convert a file name to an absolute path"
signal: false
url: "https://docs.cycling74.com/reference/absolutepath/"
package: "Max"
see_also: ["Search Path", "conformpath", "opendialog", "relativepath", "savedialog", "strippath"]
---
# absolutepath

Convert a file name to an absolute path

## Description

Converts a file name or path to an absolute path. If the file is not found, the symbol  notfound  is output.

#### Discussion

Converts a file name or path to an absolute path. If the file is not found, the symbol  notfound  is output.

In addition to the standard Max path syntax ( Drive:/path/to/file ), [absolutepath](https://docs.cycling74.com/reference/absolutepath) supports the following additional path prefixes:

- ~: - path relative to the user's home folder
- C74: - path relative to the Cycling '74 resources folder (on macOS, this is inside the application bundle  *Max.app/Contents/Resources/C74/* ; on Windows, this is the  *resources*  folder next to the  *Max.exe*  executable
- Usermax: - path relative to the  *Max 9*  folder in the user's  *Documents*  folder
- Desktop: - path relative to the user's  *Desktop*  folder
- Tempfolder: - path relative to Max's temp folder (this folder will be automatically emptied when Max quits)
- Package:/<package-name>/ - path relative to the package specified in  package-name
- Project: - path relative to the project (if any) containing the [absolutepath](https://docs.cycling74.com/reference/absolutepath) object
- Patcher: - path relative to the patcher (if any) containing the [absolutepath](https://docs.cycling74.com/reference/absolutepath) object

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

A file name or path as a symbol. Input pathnames can contain slashes, colons, or backslashes as separators.

Arguments:

- pathname
  [symbol]

### types

The  types  message followed by a list of [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) will designate the types of files which [absolutepath](https://docs.cycling74.com/reference/absolutepath) can recognize.

Arguments:

- filetypes
  [list]

## Output

### any symbol

If the incoming file name or path is found, the output is an absolute path. The output pathnames contain slash separators.

Absolute pathnames look like this:

"C:/Max Folder/extras/mystuff/mypatch.pat"

## See Also

| Name | Description |
| --- | --- |
| [Search Path](https://docs.cycling74.com/userguide/search_path) | Search Path |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [relativepath](https://docs.cycling74.com/reference/relativepath) | Convert an absolute to a relative path |
| [savedialog](https://docs.cycling74.com/reference/savedialog) | Open a dialog asking for a filename |
| [strippath](https://docs.cycling74.com/reference/strippath) | Separate filename from a full pathname |
