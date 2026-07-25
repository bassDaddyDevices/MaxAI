---
type: max
name: "string"
summary: "Create or duplicate a string object"
signal: false
url: "https://docs.cycling74.com/reference/string/"
package: "Max"
see_also: ["string.append", "string.bytes", "string.change", "string.compare", "string.concat", "string.contains", "string.endswith", "string.frombytes", "string.fromsymlist", "string.fromutf8", "string.index", "string.indexof", "string.iter", "string.length", "string.passcmp", "string.prepend", "string.remove", "string.replace", "string.replaceall", "string.reverse", "string.rotate", "string.slice", "string.split", "string.startswith", "string.substring", "string.toarray", "string.tolist", "string.tolower", "string.tosymbol", "string.toupper", "string.trim", "string.trimend", "string.trimstart", "string.utf8"]
---
# string

Create or duplicate a string object

## Description

Create a string, a block of text in memory that is not stored in Max's symbol table.

#### Discussion

Because strings are not stored in Max's symbol table, it can be more efficient to work with strings when the text contents change frequently. String objects are also more efficient than symbols for operations like splitting, replacing, substring searching, etc.

## Arguments

None.

## Attributes

### length[int] read-only

Get the length of the string.

### name[symbol]

Similar to an array, dictionary, or matrix, all string objects have a name. If no name is given, a unique one is assigned automatically. If two string objects share the same name, they also share the same memory, so updating one will update the other.

### parameter\_enable[int]

Parameter Mode Enable

### parameter\_mappable[int]: 1

Visible to Mapping

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
| [string.append](https://docs.cycling74.com/reference/string.append) | Append a string to another string object, with an optional separator |
| [string.bytes](https://docs.cycling74.com/reference/string.bytes) | Iterate the UTF-8 data in a string as bytes (ints) |
| [string.change](https://docs.cycling74.com/reference/string.change) | Detect string changes |
| [string.compare](https://docs.cycling74.com/reference/string.compare) | Compare two string objects for equality |
| [string.concat](https://docs.cycling74.com/reference/string.concat) | Concatenate two string objects |
| [string.contains](https://docs.cycling74.com/reference/string.contains) | Test whether a string object contains another string |
| [string.endswith](https://docs.cycling74.com/reference/string.endswith) | Test whether a string object ends with a substring |
| [string.frombytes](https://docs.cycling74.com/reference/string.frombytes) | Construct a new string object from bytes (ints) |
| [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) | Construct a new string from a list of symbols |
| [string.fromutf8](https://docs.cycling74.com/reference/string.fromutf8) | Construct a new string object from UTF-8 characters, as integer values |
| [string.index](https://docs.cycling74.com/reference/string.index) | Output the character at an index in a string object (0-based) |
| [string.indexof](https://docs.cycling74.com/reference/string.indexof) | Search for the index of a string |
| [string.iter](https://docs.cycling74.com/reference/string.iter) | Iterate the UTF-8 characters of a string object as individual symbols |
| [string.length](https://docs.cycling74.com/reference/string.length) | Determine the length of a string object |
| [string.passcmp](https://docs.cycling74.com/reference/string.passcmp) |  |
| [string.prepend](https://docs.cycling74.com/reference/string.prepend) | Prepend a string to another string object, with an optional separator |
| [string.remove](https://docs.cycling74.com/reference/string.remove) | Remove a range of characters from a string object |
| [string.replace](https://docs.cycling74.com/reference/string.replace) | Replace the first instance of a substring with a substitution string |
| [string.replaceall](https://docs.cycling74.com/reference/string.replaceall) | Replace all instances of a substring with a substitution string |
| [string.reverse](https://docs.cycling74.com/reference/string.reverse) | Reverse a string |
| [string.rotate](https://docs.cycling74.com/reference/string.rotate) | Rotate the characters within a string object |
| [string.slice](https://docs.cycling74.com/reference/string.slice) | Generate a new string from a range of characters in an incoming string |
| [string.split](https://docs.cycling74.com/reference/string.split) | Split a string object |
| [string.startswith](https://docs.cycling74.com/reference/string.startswith) | Test whether a string object starts with a substring |
| [string.substring](https://docs.cycling74.com/reference/string.substring) | Generate a new string from a range of characters in an incoming string |
| [string.toarray](https://docs.cycling74.com/reference/string.toarray) | Construct a new array object from a string object |
| [string.tolist](https://docs.cycling74.com/reference/string.tolist) | Construct a new list from a string object |
| [string.tolower](https://docs.cycling74.com/reference/string.tolower) | Convert uppercase characters in a string object to lowercase |
| [string.tosymbol](https://docs.cycling74.com/reference/string.tosymbol) | Convert a string to a symbol |
| [string.toupper](https://docs.cycling74.com/reference/string.toupper) | Convert lowercase characters in a string object to uppercase |
| [string.trim](https://docs.cycling74.com/reference/string.trim) | Trim whitespace from the beginning and end of a string object |
| [string.trimend](https://docs.cycling74.com/reference/string.trimend) | Trim whitespace from the end of a string object |
| [string.trimstart](https://docs.cycling74.com/reference/string.trimstart) | Remove whitespace from the beginning of a string object |
| [string.utf8](https://docs.cycling74.com/reference/string.utf8) | Iterate the UTF-8 characters in a string as integers |
