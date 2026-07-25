---
type: max
name: "dict.join"
summary: "Merge the content of two dictionaries"
signal: false
url: "https://docs.cycling74.com/reference/dict.join/"
package: "Max"
see_also: ["Dictionaries", "dict.compare", "dict.deserialize", "dict.group", "dict.iter", "dict.pack", "dict.print", "dict.route", "dict.serialize", "dict.slice", "dict.strip", "dict.unpack", "dict.view", "dict"]
---
# dict.join

Merge the content of two dictionaries

## Description

Use the [dict.join](https://docs.cycling74.com/reference/dict.join) object to merge the content of two dictionaries together into a single dictionary.

#### Discussion

**Note:**  The colon (:) is a reserved character and is not supported in keys or values.

## Arguments

### default-values[list] optional

Dictionary syntax composing a dictionary to be joined with the object's input. See [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) for more information on dictionary syntax. This dictionary will be replaced by any dictionaries received at the object's right inlet.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Resend the most recently combined dictionary

### array

TEXT\_HERE

### dictionary

Dictionary from the second inlet is combined with the dictionary from the first inlet and a new dictionary is sent

Arguments:

- name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) | Dictionaries |
| [dict.compare](https://docs.cycling74.com/reference/dict.compare) | Compare two dictionaries for equivalence. |
| [dict.deserialize](https://docs.cycling74.com/reference/dict.deserialize) | Create a dictionary from text |
| [dict.group](https://docs.cycling74.com/reference/dict.group) | Build a dictionary iteratively |
| [dict.iter](https://docs.cycling74.com/reference/dict.iter) | Stream the content of a dictionary |
| [dict.pack](https://docs.cycling74.com/reference/dict.pack) | Create a dictionary and set its values |
| [dict.print](https://docs.cycling74.com/reference/dict.print) | Post a dictionary to the Max Console |
| [dict.route](https://docs.cycling74.com/reference/dict.route) | Compare dictionaries |
| [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) | Convert a dictionary's content to text |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) | Extract values from a dictionary |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
