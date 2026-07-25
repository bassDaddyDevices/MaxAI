---
type: max
name: "dict.print"
summary: "Post a dictionary to the Max Console"
signal: false
url: "https://docs.cycling74.com/reference/dict.print/"
package: "Max"
see_also: ["Dictionaries", "dict.compare", "dict.deserialize", "dict.group", "dict.iter", "dict.join", "dict.pack", "dict.route", "dict.serialize", "dict.slice", "dict.strip", "dict.unpack", "dict.view", "dict"]
---
# dict.print

Post a dictionary to the Max Console

## Description

Use the [dict.print](https://docs.cycling74.com/reference/dict.print) object to post the content of a dictionary to the Max Console. For more control over how the printing is formatted, use [dict.iter](https://docs.cycling74.com/reference/dict.iter) and [print](https://docs.cycling74.com/reference/print).

#### Discussion

**Note:**  The colon (:) is a reserved character and is not supported in keys or values.

## Arguments

### identifier[anything] optional

The argument is an identifier for the [dict.print](https://docs.cycling74.com/reference/dict.print) object. Each message printed in the Max Console is preceded by the name of the [dict.print](https://docs.cycling74.com/reference/dict.print) object. If there is no argument, the name is  dict.print .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### array

TEXT\_HERE

### dictionary

Dictionary whose contents will be posted to the Max Console

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
| [dict.route](https://docs.cycling74.com/reference/dict.route) | Compare dictionaries |
| [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) | Convert a dictionary's content to text |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) | Extract values from a dictionary |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
