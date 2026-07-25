---
type: max
name: "text.codebox"
summary: "Display and edit text"
signal: false
url: "https://docs.cycling74.com/reference/text.codebox/"
package: "Max"
see_also: ["coll.codebox", "dict.codebox", "string", "text", "textedit"]
---
# text.codebox

Display and edit text

## Description

The [dict.codebox](https://docs.cycling74.com/reference/dict.codebox) object is a UI object for display and editing of text, optionally backed by a file on disk. Clicking on the hammer icon will output the text as a string and optionally write the file back to disk (autowrite must be enabled). Beware of losing work when enabling autowrite. It can use a syntax highlighting style (.js, .json, ,jxs, .coll, .genexpr, .lua, or .cpp)

## Arguments

None.

## Attributes

### autowatch[int]: 1

Automatically reload the text file when it is changed outside of Max.

### autowrite[int]: 0

Automatically write the contents of the text editor to the specified file when the codebox contents are changed. WARNING: enabling this attribute will cause the file contents to be overwritten and you may lose data.

### bgcolor[4 floats]

Sets the color for the object's background frame.

### editlocked[int]: 0

Allow editing of the codebox text while the patcher is locked.

### embed[int]: 1

Toggles the ability to embed the contents of the text editor with the patcher. Disable to allow for display of changing text contents that will not dirty the patcher, and prompting to save.

### filename[symbol]: none

File path to a text file to be loaded into the codebox.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### style[symbol]:

Style

### syntax[symbol]:

Filename extension that determines the syntax highlighting rules to be applied to the text. For example, setting this attribute to ".js" will apply JavaScript syntax highlighting. Current supported syntax higlighting rules include ".json", ".js", ".jxs", ".coll", ".genexpr", ".cpp", and ".lua"

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### length[int] read-only

Get the length of the string.

### name[symbol]

Similar to an array, dictionary, or matrix, all string objects have a name. If no name is given, a unique one is assigned automatically. If two string objects share the same name, they also share the same memory, so updating one will update the other.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received values and trigger output.

### int

Convert an incoming integer to a string, then output the string.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to a string, then output the string.

Arguments:

- value
  [float]

### list

Convert an incoming list to a string, then output the string.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to a string, then output the string.

Arguments:

- list-value
  [list]

### append

Convert a list to a string, then append it to the currently stored string value.

### atoms

Separate the string on every space character, then send the list out the middle outlet. Commas and other special characters are escaped. If you want to separate on another character, use [string.tolist](https://docs.cycling74.com/reference/string.tolist).

### clear

After clearing, the contents of the string object will be the empty string.

### prepend

Convert a list to a string, then add it to the beginninng of the currently stored string value.

### string

The contents of the received string are copied to the internal string. The internal string is not renamed.

## See Also

| Name | Description |
| --- | --- |
| [coll.codebox](https://docs.cycling74.com/reference/coll.codebox) | Store and edit a collection of data |
| [dict.codebox](https://docs.cycling74.com/reference/dict.codebox) | Create and access dictionaries |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |
| [textedit](https://docs.cycling74.com/reference/textedit) | Enter text |
