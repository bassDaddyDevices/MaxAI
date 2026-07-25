---
type: max
name: "text"
summary: "Format messages as a text file"
signal: false
url: "https://docs.cycling74.com/reference/text/"
package: "Max"
see_also: ["External Text Editor", "capture", "filein", "itable", "spell", "sprintf", "table", "textedit"]
---
# text

Format messages as a text file

## Description

Collects and formats incoming messages as text to be output as lines of text.

## Arguments

### filename[symbol] optional

Names a text file to be read in when the object is loaded.

## Attributes

### precision[int]

The number of decimal places for converted floating point values.

### stringout[int]

Output Lines As String Object

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Stores the integer within [text](https://docs.cycling74.com/reference/text).

Arguments:

- input
  [int]

### float

Stores the float within [text](https://docs.cycling74.com/reference/text).

Arguments:

- input
  [float]

### list

Stores the list within [text](https://docs.cycling74.com/reference/text).

Arguments:

- input
  [list]

### anything

The message is stored in the [text](https://docs.cycling74.com/reference/text) object, placed after any previously stored messages, and is followed by a space.

Arguments:

- input
  [list]

### clear

Erases the contents of [text](https://docs.cycling74.com/reference/text).

### cr

Puts a carriage return at the end of the contents of [text](https://docs.cycling74.com/reference/text), to start a new line. If the last character in [text](https://docs.cycling74.com/reference/text) is a space, the carriage return replaces that space.

### (mouse)

Double-clicking with the mouse on the [text](https://docs.cycling74.com/reference/text) object (when the patcher window is locked) opens an editing window in which the contents of text can be viewed and edited. The [text](https://docs.cycling74.com/reference/text) object ignores messages to change its text while the editing window is open. Unlike the [capture](https://docs.cycling74.com/reference/capture) object, changes made in the editing window of [text](https://docs.cycling74.com/reference/text) actually alter the contents of the object.

### dump

The word  dump  causes [text](https://docs.cycling74.com/reference/text) to send its contents out of the object's left outlet.

### filetype

The word  filetype , followed by a symbol, sets the file types which can be read and written into the [text](https://docs.cycling74.com/reference/text) object. File types are specified using the standard [four-letter filetype codes](https://docs.cycling74.com/userguide/filetypes) (e.g. filetype ffoo). The message  filetype  with no arguments restores the default file behavior -- either Max binary or text file formats. File types are mapped to filename extensions on Windows based on the messages to max contained in the file max-fileformats.txt in the init folder, which is loaded on startup. If you are defining your own filetype, you may want to include your own text file in the init folder in order to specify a mapping between an extension and your four-letter type code.

Arguments:

- filetype-code (four letters)
  [symbol]

### line

The word  line , followed by a number, causes [text](https://docs.cycling74.com/reference/text) to send out the contents of that line number (up to 256 characters) with the word  set  prepended (for setting the contents of a [message](https://docs.cycling74.com/reference/message) box). Lines are numbered beginning with 1; any line number message less than 1 is converted to  line 1 . If a nonexistent line number is requested, nothing is sent out.

Arguments:

- index
  [int]

### open

Opens the object's text window for editing. Double-clicking on the [text](https://docs.cycling74.com/reference/text) object in a locked patcher has the same effect. The [text](https://docs.cycling74.com/reference/text) object ignores messages to change its text while the editing window is open. Unlike the [capture](https://docs.cycling74.com/reference/capture) object, changes made in the editing window of [text](https://docs.cycling74.com/reference/text) actually alter the contents of the object. However, these changes will not be saved or communicated to the [text](https://docs.cycling74.com/reference/text) object until the editing window is closed.

### query

The word  query  sends a number that specifies the number of lines stored in the [text](https://docs.cycling74.com/reference/text) object out the object's right outlet.

### read

The word  read , followed by a symbol that specifies a filename, will read the contents of a text file. If no filename or pathname is specified, the  read  message will call up the standard Open Document dialog box, so that a text file can be specified. Use the filetype message to use a custom filetype with this object.

Arguments:

- filename
  [symbol]

### settitle

The word  settitle , followed by any word, sets the title of the text window. If you want more than one word to appear as the default text, you must enclose the words in double quotes or precede the spaces with a backslash ( \ ).

Arguments:

- window-name
  [symbol]

### symbol

The word  symbol , followed by any word, stores that word at the end of the contents of [text](https://docs.cycling74.com/reference/text). This is useful if you want to store a word that would otherwise be understood as a specific message by [text](https://docs.cycling74.com/reference/text). For example,  symbol clear  stores the word  clear , followed by a space, at the end of the contents of [text](https://docs.cycling74.com/reference/text), rather than erasing the contents.

Arguments:

- any symbol
  [symbol]

### t\_symbol

Stores the symbol within [text](https://docs.cycling74.com/reference/text).

Arguments:

- input
  [symbol]

### tab

Puts a tab stop at the end of the contents of [text](https://docs.cycling74.com/reference/text). If the last character in [text](https://docs.cycling74.com/reference/text) is a space, the tab stop replaces that space.

### wclose

Closes the window associated with the [text](https://docs.cycling74.com/reference/text) object.

### write

The word  write , followed by a symbol that specifies a filename, will save the contents of [text](https://docs.cycling74.com/reference/text) as a text file in the current default folder unless the file is specified with an absolute pathname. If no filename or pathname is specified, the  write  message will open up a standard Save As dialog box, so that the contents of [text](https://docs.cycling74.com/reference/text) can be saved in a separate text file. Use the filetype message to use a custom filetype with this object.

Please note that changes to the [text](https://docs.cycling74.com/reference/text) object will not be saved until the editing window is closed.

Arguments:

- filename
  [symbol]

## Output

### bang

Out middle outlet: When a file has finished loading in response to a  read  message, a  bang  is sent out the middle outlet.

### int

Out right outlet: In response to a  query  message, a number corresponding to the number of lines of text stored in the [text](https://docs.cycling74.com/reference/text) object is sent out the right outlet.

### symbol

Out left outlet: When a  line  message is received, the text of the specified line number is sent out preceded by the word  set . The message can be used to set the contents of a [message](https://docs.cycling74.com/reference/message) box (or can be sent to any other object for which that particular  set  message is appropriate).

## See Also

| Name | Description |
| --- | --- |
| [External Text Editor](https://docs.cycling74.com/userguide/external_text_editor) | External Text Editor |
| [capture](https://docs.cycling74.com/reference/capture) | Store values to view or edit |
| [filein](https://docs.cycling74.com/reference/filein) | Read and access a file of binary data |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
| [textedit](https://docs.cycling74.com/reference/textedit) | Enter text |
