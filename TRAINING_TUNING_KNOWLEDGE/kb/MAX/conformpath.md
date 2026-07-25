---
type: max
name: "conformpath"
summary: "Convert file paths styles"
signal: false
url: "https://docs.cycling74.com/reference/conformpath/"
package: "Max"
see_also: ["absolutepath", "opendialog", "relativepath", "savedialog", "strippath"]
---
# conformpath

Convert file paths styles

## Description

Converts paths between the older colon style formats and the current slash style. It can also be used to conform paths to either absolute, relative, boot volume relative, or Cycling 74 folder relative types.

#### Discussion

[conformpath](https://docs.cycling74.com/reference/conformpath) can be used to convert paths between the old colon style format and the new slash style--these are the "pathstyles". It can also be used to conform paths to either absolute, relative, boot volume relative, or Cycling 74 folder relative--these are the "pathtypes".

The "max" style will use whatever style the currently running version of Max uses to pass paths between objects. The "native" style will use whatever format is used by the currently running operating system to specify paths. There is only an explicit "native\_win" pathstyle since the native Macintosh pathstyle is the same as the "colon" path style. Note that when working with native paths, only absolute paths will be valid for the operating system.

The default pathstyle is "max", and the default pathtype is "ignore".

In addition to the standard Max path syntax ( Drive:/path/to/file ), [conformpath](https://docs.cycling74.com/reference/conformpath) supports the following additional path prefixes:

- ~: - path relative to the user's home folder
- C74: - path relative to the Cycling '74 resources folder (on macOS, this is inside the application bundle  *Max.app/Contents/Resources/C74/* ; on Windows, this is the  *resources*  folder next to the  *Max.exe*  executable
- Usermax: - path relative to the  *Max 9*  folder in the user's  *Documents*  folder
- Desktop: - path relative to the user's  *Desktop*  folder
- Tempfolder: - path relative to Max's temp folder (this folder will be automatically emptied when Max quits)
- Package:/<package-name>/ - path relative to the package specified in  package-name
- Project: - path relative to the project (if any) containing the [conformpath](https://docs.cycling74.com/reference/conformpath) object
- Patcher: - path relative to the patcher (if any) containing the [conformpath](https://docs.cycling74.com/reference/conformpath) object

## Arguments

### pathstyle[symbol] optional

An optional symbol argument specifies the pathstyle to be used as output. The possible pathstyle arguments are:

colon: Specifies that the colon pathstyle is used for output.

max: Specifies that the max pathstyle is used for output.

native: Specifies that the native pathstyle is used for output.

native\_win: Specifies that the native\_win pathstyle is used for output (See description of the  pathstyle  method for more details).

Note: The use of the native\_win style paths is not advised except for display purposes.

slash: Specifies that the slash pathstyle is used for output.

(See the description of the  pathstyle  method for more details).

### pathtype[symbol] optional

An optional symbol argument specifies the pathtype to be used as output. The possible pathtype arguments are:

absolute: Specifies the output of the absolute pathname of the file or folder as a symbol.

boot: Specifies the output of the pathname of the file or folder relative to the boot volume as a symbol.

C74: Specifies the output of the pathname of the file or folder relative to the Cycling 74 folder as a symbol.

relative: Specifies the output of the pathname of the file or folder relative to the Max application folder as a symbol.

ignore: Specifies that no pathtype conversion is performed.

(See description of the  pathtype  method for more details).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

A file name or path as a symbol. The [conformpath](https://docs.cycling74.com/reference/conformpath) object converts paths of one pathstyle (i.e., file paths that use colons or slashes as separators) and/or pathtype (paths that are absolute, relative, boot volume-relative, or Cycling 74 folder-relative) to another. It provides a superset of the functionality of the [absolutepath](https://docs.cycling74.com/reference/absolutepath) and [relativepath](https://docs.cycling74.com/reference/relativepath) objects.

Arguments:

- filepath
  [symbol]

### pathstyle

The word  pathstyle , followed by a word that specifies a pathstyle, will conform the output pathname to the chosen styles. The possible styles are:

 colon : The  colon  style will use colons as separators when passing paths between objects. This style was used in Max versions 4.2 and earlier on Macintoshes Note: Since the native Macintosh pathstyle is the same as the colon path style, there is no native\_mac pathstyle.

 max : (default) The  max  style will use whatever style the currently running version of Max uses to pass paths between objects.

 native : The  native  style will use whatever format is used by the currently running operating system to specify paths. Note: When working with native paths, only absolute paths will be valid for the operating system.

 native\_win : The  native\_win  style will use native Windows OS format (i.e., backslashes as separators) to specify paths. Note:  The use of the native\_win style paths is not advised except for display purposes - In Max, the backslash character is used as an escape character and could lead to problems if used in conjunction with message boxes, [sprintf](https://docs.cycling74.com/reference/sprintf), [coll](https://docs.cycling74.com/reference/coll), and other objects which parse text into atoms.

 slash : The  slash  style will use slashes as separators when passing paths between objects.

Arguments:

- pathstyle
  [symbol]

### pathtype

The word  pathtype , followed by a word that specifies a pathtype, will conform the output pathname to the chosen type. The possible types are:

 absolute : The  absolute  type will output the absolute pathname of the file or folder as a symbol.

 boot : The  boot  type will output the pathname of the file or folder relative to the boot volume as a symbol. If the file is not relative to the boot file, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 C74 : The  C74  type will output the pathname of the file or folder relative to the Cycling 74 folder as a symbol. If the file is not relative to the Cycling 74 folder, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 relative : The  relative  type will output the pathname of the file or folder relative to the Max application folder as a symbol. If the file is not relative to the Max application folder, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 tilde : The  tilde  type will attempt to output the pathname of the file or folder relative to the current user's home folder. If the file is not in the current user's home folder, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 desktop : The  desktop  type will output the pathname of the file or folder relative to the current user's Desktop folder. If the file is not in the current user's Desktop folder, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 tempfolder : The  tempfolder  type will output the pathname of the file or folder relative to Max's temporary folder. If the file is not in Max's temporary folder, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 usermax : The  usermax  type will output the pathname of the file or folder relative to user's Max 9 folder (in the Documents folder). If the file is not in the Max 9 folder, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 package : The  package  type will output the pathname of the file or folder relative to an active package (e.g.  Package:/VIDDLL/patchers ). If the file is not in a package, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 plugin : The  plugin  type will output the pathname to a plugin file as a Max-specific plugin path (e.g.  C74\_VST3:/PluginName ). If this is not possible, the [conformpath](https://docs.cycling74.com/reference/conformpath) object will send a zero out the right outlet and send the output path out the left outlet unchanged.

 ignore : (default) The  ignore  type will perform no path type conversion.

Arguments:

- pathtype
  [symbol]

## Output

### int

Out right outlet: If the input file or folder is conformed to specified pathtype and/ or pathtype, the output is  1 . if the filepath cannot be conformed (e.g., if the file is not relative to a requested path type), the output is  0 .

### symbol

The pathname of the folder or file conformed to the specified pathstyle and/or pathtype.

## See Also

| Name | Description |
| --- | --- |
| [absolutepath](https://docs.cycling74.com/reference/absolutepath) | Convert a file name to an absolute path |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [relativepath](https://docs.cycling74.com/reference/relativepath) | Convert an absolute to a relative path |
| [savedialog](https://docs.cycling74.com/reference/savedialog) | Open a dialog asking for a filename |
| [strippath](https://docs.cycling74.com/reference/strippath) | Separate filename from a full pathname |
