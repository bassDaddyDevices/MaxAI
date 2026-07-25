---
type: max
name: "dict.group"
summary: "Build a dictionary iteratively"
signal: false
url: "https://docs.cycling74.com/reference/dict.group/"
package: "Max"
see_also: ["Dictionaries", "dict.compare", "dict.deserialize", "dict.iter", "dict.join", "dict.pack", "dict.print", "dict.route", "dict.serialize", "dict.slice", "dict.strip", "dict.unpack", "dict.view", "dict"]
---
# dict.group

Build a dictionary iteratively

## Description

Use the [dict.group](https://docs.cycling74.com/reference/dict.group) object to build up a dictionary by sending key-value pairs as lists. The key-value pairs will be collected into the dictionary until a 'bang' is received. The 'bang' will send out the dictionary and start the process over again.

#### Discussion

**Note:**  The colon (:) is a reserved character and is not supported in keys or values.

## Arguments

### name[symbol] optional

Name of the dictionary to create

## Attributes

### name[symbol]

Name associated with the created/sent dictionary

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Send out the dictionary and reset the contents

### list

Set a key and its values. The first element of the list is the key, followed by its values. Lists will be collected into the dictionary until a  bang  is received.

Arguments:

- key-value
  [list]

### anything

A key-value pair will add the key/value to the dictionary or use dictionary syntax to add more complex structures.

Arguments:

- dictionary-or-keyvaluepair
  [list]

## See Also

| Name | Description |
| --- | --- |
| [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) | Dictionaries |
| [dict.compare](https://docs.cycling74.com/reference/dict.compare) | Compare two dictionaries for equivalence. |
| [dict.deserialize](https://docs.cycling74.com/reference/dict.deserialize) | Create a dictionary from text |
| [dict.iter](https://docs.cycling74.com/reference/dict.iter) | Stream the content of a dictionary |
| [dict.join](https://docs.cycling74.com/reference/dict.join) | Merge the content of two dictionaries |
| [dict.pack](https://docs.cycling74.com/reference/dict.pack) | Create a dictionary and set its values |
| [dict.print](https://docs.cycling74.com/reference/dict.print) | Post a dictionary to the Max Console |
| [dict.route](https://docs.cycling74.com/reference/dict.route) | Compare dictionaries |
| [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) | Convert a dictionary's content to text |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) | Extract values from a dictionary |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
