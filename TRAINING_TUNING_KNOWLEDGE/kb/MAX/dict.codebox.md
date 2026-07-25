---
type: max
name: "dict.codebox"
summary: "Create and access dictionaries"
signal: false
url: "https://docs.cycling74.com/reference/dict.codebox/"
package: "Max"
see_also: ["dict", "coll", "coll.codebox", "osc.codebox"]
---
# dict.codebox

Create and access dictionaries

## Description

The [dict.codebox](https://docs.cycling74.com/reference/dict.codebox) object is a UI object for display and editing of dictionaries. Use the [dict.codebox](https://docs.cycling74.com/reference/dict.codebox) object to create named dictionaries, clone existing dictionaries, and query existing dictionaries to access their data.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the color for the object's background frame.

### editlocked[int]: 0

Allow editing of the codebox text while the patcher is locked.

### embed[int]

Toggles the ability to embed the contents of the text editor with the patcher. Disable to allow for display of changing text contents that will not dirty the patcher, and prompting to save.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### style[symbol]:

Style

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### legacy[int] >= 9.0.0

When enabled (default = off), arrays returned by the  get  method will be output as lists, as they were previous to the introduction of the [array](https://docs.cycling74.com/reference/array) object. New [dict](https://docs.cycling74.com/reference/dict) objects will have this attribute disabled, and will output named array objects.

### name[symbol]

Name associated with the dictionary. All dictionaries are passed by reference using a symbolic name. If you do not provide a name, a unique name will be generated internally.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### quiet[int]

Reduce error checking and reporting when operations are performed on the dict. When an error occurs the result will typically be a silent failure when this option is turned-on.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Send a reference to the dictionary from the first outlet.

### clear

Erase the contents of the dictionary, restoring to a clean state.

### remove

Remove a key and its associated value from the dictionary.

Arguments:

- key
  [symbol]

### getkeys

Return a list of all the keys in a dictionary to the third outlet. By default the keys are sorted according to the order in which keys were added to the dictionary. Use the optional argument to specify alphabetical sorting.

Arguments:

- alphabetize
  [bool]

### contains

Return a 0 or 1 to the third outlet indicating the specified key exists (or doesn't) in the dictionary.

Arguments:

- key
  [symbol]

### getnames

Return a list of all the dictionaries that currently exist to the fourth outlet.

### getsize

Return the number of values associated with a key to the second outlet.

Arguments:

- key
  [symbol]

### gettype

Return the type of the values associated with a key to the second outlet.

Arguments:

- key
  [symbol]

### get

Return the value associated with a key to the second outlet.

Arguments:

- key
  [symbol]

### set

Set the value for a key to a specified value.

Arguments:

- key
  [symbol]
- value
  [list]

### append

Add values to the end of an array associated with the specified key.

Arguments:

- key
  [symbol]
- value
  [list]

### replace

Set the value for a key to a specified value. If a heirarchy is specified for the key, and the heirarchy does not exist, then it will be created in the dictionary.

Arguments:

- key
  [symbol]
- value
  [list]

### setparse

Set the value for a key to dictionary content defined using JSON.

Arguments:

- key
  [symbol]
- value
  [symbol]

### parse

Replace the content of a dictionary by providing the new content as JSON.

Arguments:

- key
  [symbol]
- value
  [symbol]

### clone

Make a clone of the incoming dictionary. If received at the first inlet, send a reference to this new clone from the first outlet. Otherwise just clone the dictionary and don't send it out.

Arguments:

- name
  [symbol]

### dictionary

Make a clone of the incoming dictionary. If received at the first inlet, send a reference to this new clone from the first outlet. Otherwise just clone the dictionary and don't send it out.

Arguments:

- name
  [symbol]

### read

Read the dictionary contents from a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  read [filename] 0/1 .

Arguments:

- filename
  [symbol]

### readagain

re-reads an JSON or YAML file previously specified by the  read  or  write  messages. If no file has been previously specified, a standard File Dialog will be presented for the user to manually choose the file to be read. A success/failure notification will be sent to the rightmost outlet in the form  read [filename] 0/1 .

### import

Read the dictionary contents from a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  import [filename] 0/1 .

Arguments:

- filename
  [symbol]

### readany

Read the dictionary contents from a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format and extension are not checked. The contents of the file are assumed to be in JSON format. A success/failure notification will be sent to the rightmost outlet in the form  read [filename] 0/1 .

Arguments:

- filename
  [symbol]

### write

Write the dictionary contents to a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  write [filename] 0/1 .

Arguments:

- filename
  [symbol]

### export

Write the dictionary contents to a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  export [filename] 0/1 .

Arguments:

- filename
  [symbol]

### writeagain

Write the dictionary contents to a JSON or YAML file. The file provided as an argument for the previous 'write' or 'export' message will be used. A success/failure notification will be sent to the rightmost outlet in the form  write [filename] 0/1 .

### (mouse)

Double-click a [dict](https://docs.cycling74.com/reference/dict) object to open a dictionary editor window.

### edit

Open the dictionary editor window.

### wclose

Close the dictionary editor window if it is open.

### pull\_from\_coll

Pull the content of a named coll object into the dictionary. The indices in the coll will become the keys, and the values for those indices the values for the dictionary's keys.

Arguments:

- coll-name
  [symbol]

### push\_to\_coll

Push the dictionary's content into a named coll object. The keys in the dictionary will become the indices in the coll, and the values for those indices the values of the dictionary's keys.

Arguments:

- coll-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [coll.codebox](https://docs.cycling74.com/reference/coll.codebox) | Store and edit a collection of data |
| [osc.codebox](https://docs.cycling74.com/reference/osc.codebox) | Display OSC packets as Dictionaries |
