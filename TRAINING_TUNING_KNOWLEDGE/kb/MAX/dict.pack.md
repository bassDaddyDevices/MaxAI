---
type: max
name: "dict.pack"
summary: "Create a dictionary and set its values"
signal: false
url: "https://docs.cycling74.com/reference/dict.pack/"
package: "Max"
see_also: ["Dictionaries", "dict.compare", "dict.deserialize", "dict.group", "dict.iter", "dict.join", "dict.print", "dict.route", "dict.serialize", "dict.slice", "dict.strip", "dict.unpack", "dict.view", "dict"]
---
# dict.pack

Create a dictionary and set its values

## Description

Use the [dict.pack](https://docs.cycling74.com/reference/dict.pack) object to create a dictionary and set its values using dedicated inlets.

#### Discussion

**Note:**  The colon (:) is a reserved character and is not supported in keys or values.

## Arguments

### name[symbol] optional

Name of the dictionary to create

### default-values[list] optional

Dictionary syntax specifying initial keys and values composing the dictionary. See [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) for more information on dictionary syntax.

## Attributes

### keys[256 symbols]

List of keys associated with the inlets

### name[symbol]

Name associated with the created/sent dictionary

### triggers[256 ints]

List of inlets that trigger output of the dictionary

### unmatched[int]: 1

Add Unmatched Inlet

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Send out the dictionary

### int

Define the value for the key associated with the inlet

Arguments:

- value
  [int]

### float

Define the value for the key associated with the inlet

Arguments:

- value
  [float]

### list

Define the value for the key associated with the inlet

Arguments:

- value
  [list]

### anything

Define the value for the key associated with the inlet

Arguments:

- value
  [list]

### array

TEXT\_HERE

### dictionary

Define the value for the key associated with the inlet

Arguments:

- value
  [symbol]

### string

TEXT\_HERE

## See Also

| Name | Description |
| --- | --- |
| [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) | Dictionaries |
| [dict.compare](https://docs.cycling74.com/reference/dict.compare) | Compare two dictionaries for equivalence. |
| [dict.deserialize](https://docs.cycling74.com/reference/dict.deserialize) | Create a dictionary from text |
| [dict.group](https://docs.cycling74.com/reference/dict.group) | Build a dictionary iteratively |
| [dict.iter](https://docs.cycling74.com/reference/dict.iter) | Stream the content of a dictionary |
| [dict.join](https://docs.cycling74.com/reference/dict.join) | Merge the content of two dictionaries |
| [dict.print](https://docs.cycling74.com/reference/dict.print) | Post a dictionary to the Max Console |
| [dict.route](https://docs.cycling74.com/reference/dict.route) | Compare dictionaries |
| [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) | Convert a dictionary's content to text |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) | Extract values from a dictionary |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
