---
type: max
name: "dict.compare"
summary: "Compare two dictionaries for equivalence."
signal: false
url: "https://docs.cycling74.com/reference/dict.compare/"
package: "Max"
see_also: ["dict.deserialize", "dict.group", "dict.iter", "dict.join", "dict.pack", "dict.print", "dict.route", "dict.serialize", "dict.slice", "dict.strip", "dict.unpack", "dict.view", "dict"]
---
# dict.compare

Compare two dictionaries for equivalence.

## Description

Dictionaries are considered equivalent if they contain the identical keys, and if those keys contain identical data.

## Arguments

None.

## Attributes

### unordered[int]: 0

When enabled, only the contents of arrays will be tested for equivalence, and the order of those contents will be ignored. When disabled (default), both order and contents will be taken into account.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Repeat the comparison and output a  1  if the dictionaries are equivalent, or a  0  if not.

### dictionary

In the left inlet, compare to any dictionary previously sent to the right inlet and output the comparison result from the outlet. In the right inlet, set the dictionary for future comparison (without output).

Arguments:

- name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [dict.deserialize](https://docs.cycling74.com/reference/dict.deserialize) | Create a dictionary from text |
| [dict.group](https://docs.cycling74.com/reference/dict.group) | Build a dictionary iteratively |
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
