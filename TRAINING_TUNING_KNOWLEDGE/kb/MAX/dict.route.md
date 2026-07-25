---
type: max
name: "dict.route"
summary: "Compare dictionaries"
signal: false
url: "https://docs.cycling74.com/reference/dict.route/"
package: "Max"
see_also: ["Dictionaries", "dict.compare", "dict.deserialize", "dict.group", "dict.iter", "dict.join", "dict.pack", "dict.print", "dict.serialize", "dict.slice", "dict.strip", "dict.unpack", "dict.view", "dict"]
---
# dict.route

Compare dictionaries

## Description

Use the [dict.route](https://docs.cycling74.com/reference/dict.route) object to compare two dictionaries. If the dictionary received at the left inlet meets the specifications set by the dictionary at the right inlet, then pass the dictionary through the left outlet. Otherwise passes the dictionary through the right outlet.

#### Discussion

**Note:**  The colon (:) is a reserved character and is not supported in keys or values.

## Arguments

### default-values[list] optional

Dictionary syntax composing a dictionary to be compared with the object's input. See [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) for more information on dictionary syntax. This dictionary will be replaced by any dictionaries received at the object's right inlet.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### dictionary

Dictionary in the first inlet is compared with the reference. Dictionary in the second inlet sets the reference.

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
| [dict.join](https://docs.cycling74.com/reference/dict.join) | Merge the content of two dictionaries |
| [dict.pack](https://docs.cycling74.com/reference/dict.pack) | Create a dictionary and set its values |
| [dict.print](https://docs.cycling74.com/reference/dict.print) | Post a dictionary to the Max Console |
| [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) | Convert a dictionary's content to text |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) | Extract values from a dictionary |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
