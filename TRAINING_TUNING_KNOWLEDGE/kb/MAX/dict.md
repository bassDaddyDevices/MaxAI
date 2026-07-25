---
type: max
name: "dict"
summary: "Create and access dictionaries"
signal: false
url: "https://docs.cycling74.com/reference/dict/"
package: "Max"
see_also: ["Dictionaries", "External Text Editor", "dict.view", "dict.pack", "dict.unpack", "dict.group", "dict.iter", "dict.join", "dict.slice", "dict.print", "dict.route", "dict.strip", "dict.serialize", "dict.deserialize"]
---
# dict

Create and access dictionaries

## Description

Use the [dict](https://docs.cycling74.com/reference/dict) object to create named dictionaries, clone existing dictionaries, and query existing dictionaries to access their data.

## Arguments

### name[symbol] optional

Name to be associated with this dictionary. If no argument is given, then a unique name will be generated.

### filename[symbol] optional

Name of a JSON or YAML file to be imported into this dictionary on load.

## Attributes

### annotation\_name[symbol]:

Info View Title

### embed[int]: 0

Toggles the ability to embed the contents of the [dict](https://docs.cycling74.com/reference/dict) as part of the main paitch. If the embed attribute is set to 1, this overrides this attribute on any other dicts with the same name.

### legacy[int] >= 8.6.0

When enabled (default = off), arrays returned by the  get  method will be output as lists, as they were previous to the introduction of the [array](https://docs.cycling74.com/reference/array) object. New [dict](https://docs.cycling74.com/reference/dict) objects will have this attribute disabled, and will output named array objects.

### name[symbol]

Name associated with the dictionary. All dictionaries are passed by reference using a symbolic name. If you do not provide a name, a unique name will be generated internally.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### quiet[int]: 0 >= 7.0.0

Reduce error checking and reporting when operations are performed on the dict. When an error occurs the result will typically be a silent failure when this option is turned-on.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Send a reference to the dictionary from the first outlet.

### append

Add values to the end of an array associated with the specified key.

Arguments:

- key
  [symbol]
- value
  [list]

### clear

Erase the contents of the dictionary, restoring to a clean state.

### clone

Make a clone of the incoming dictionary. If received at the first inlet, send a reference to this new clone from the first outlet. Otherwise just clone the dictionary and don't send it out.

Arguments:

- name
  [symbol]

### contains

Return a 0 or 1 to the third outlet indicating the specified key exists (or doesn't) in the dictionary.

Arguments:

- key
  [symbol]

### (mouse)

Double-click a [dict](https://docs.cycling74.com/reference/dict) object to open a dictionary editor window.

### dictionary

Make a clone of the incoming dictionary. If received at the first inlet, send a reference to this new clone from the first outlet. Otherwise just clone the dictionary and don't send it out.

Arguments:

- name
  [symbol]

### edit

Open the dictionary editor window.

### export

Write the dictionary contents to a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  export [filename] 0/1 .

Arguments:

- filename
  [symbol]

### get

Return the value associated with a key to the second outlet.

Arguments:

- key
  [symbol]

### getkeys

Return a list of all the keys in a dictionary to the third outlet. By default the keys are sorted according to the order in which keys were added to the dictionary. Use the optional argument to specify alphabetical sorting.

Arguments:

- alphabetize
  [bool]

### getnames

Return a list of all the dictionaries that currently exist to the fourth outlet.

### getsize

Return the number of values associated with a key to the second outlet.

Arguments:

- key
  [symbol]

### gettype >= 7.0.0

Return the type of the values associated with a key to the second outlet.

Arguments:

- key
  [symbol]

### import

Read the dictionary contents from a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  import [filename] 0/1 .

Arguments:

- filename
  [symbol]

### parse >= 7.0.0

Replace the content of a dictionary by providing the new content as JSON.

Arguments:

- key
  [symbol]
- value
  [symbol]

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

### read

Read the dictionary contents from a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  read [filename] 0/1 .

Arguments:

- filename
  [symbol]

### readagain

re-reads an JSON or YAML file previously specified by the  read  or  write  messages. If no file has been previously specified, a standard File Dialog will be presented for the user to manually choose the file to be read. A success/failure notification will be sent to the rightmost outlet in the form  read [filename] 0/1 .

### readany >= 7.0.0

Read the dictionary contents from a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format and extension are not checked. The contents of the file are assumed to be in JSON format. A success/failure notification will be sent to the rightmost outlet in the form  read [filename] 0/1 .

Arguments:

- filename
  [symbol]

### remove

Remove a key and its associated value from the dictionary.

Arguments:

- key
  [symbol]

### replace

Set the value for a key to a specified value. If a heirarchy is specified for the key, and the heirarchy does not exist, then it will be created in the dictionary.

Arguments:

- key
  [symbol]
- value
  [list]

### set

Set the value for a key to a specified value.

Arguments:

- key
  [symbol]
- value
  [list]

### setparse >= 7.0.0

Set the value for a key to dictionary content defined using JSON.

Arguments:

- key
  [symbol]
- value
  [symbol]

### wclose

Close the dictionary editor window if it is open.

### write

Write the dictionary contents to a JSON or YAML file. If no path/filename is provided, a dialog will be presented. The file format is determined from the file name extension, either '.json' or '.yaml'. A success/failure notification will be sent to the rightmost outlet in the form  write [filename] 0/1 .

Arguments:

- filename
  [symbol]

### writeagain

Write the dictionary contents to a JSON or YAML file. The file provided as an argument for the previous 'write' or 'export' message will be used. A success/failure notification will be sent to the rightmost outlet in the form  write [filename] 0/1 .

## See Also

| Name | Description |
| --- | --- |
| [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) | Dictionaries |
| [External Text Editor](https://docs.cycling74.com/userguide/external_text_editor) | External Text Editor |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict.pack](https://docs.cycling74.com/reference/dict.pack) | Create a dictionary and set its values |
| [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) | Extract values from a dictionary |
| [dict.group](https://docs.cycling74.com/reference/dict.group) | Build a dictionary iteratively |
| [dict.iter](https://docs.cycling74.com/reference/dict.iter) | Stream the content of a dictionary |
| [dict.join](https://docs.cycling74.com/reference/dict.join) | Merge the content of two dictionaries |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.print](https://docs.cycling74.com/reference/dict.print) | Post a dictionary to the Max Console |
| [dict.route](https://docs.cycling74.com/reference/dict.route) | Compare dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) | Convert a dictionary's content to text |
| [dict.deserialize](https://docs.cycling74.com/reference/dict.deserialize) | Create a dictionary from text |
