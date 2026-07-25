---
type: max
name: "dict.serialize"
summary: "Convert a dictionary's content to text"
signal: false
url: "https://docs.cycling74.com/reference/dict.serialize/"
package: "Max"
see_also: ["Dictionaries", "dict.compare", "dict.deserialize", "dict.group", "dict.iter", "dict.join", "dict.pack", "dict.print", "dict.route", "dict.slice", "dict.strip", "dict.unpack", "dict.view", "dict"]
---
# dict.serialize

Convert a dictionary's content to text

## Description

Use the [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) object to output a serialized form of the contents of dictionary in text format. The text may be Dictionary Syntax, JSON, or Base64-compressed forms of these formats.

#### Discussion

**Note:**  The colon (:) is a reserved character and is not supported in keys or values.

Different formats of serialization may be accessed by changing attributes to this object. However, these attributes should be used carefully.

- the mode attribute may choose between JSON and dictionary syntax
- the compress attribute will apply a compression algorithm

The non-default options all result in a single max symbol as output. This symbolization has the potential to bloat max's symbol table and thus degrade the overall performance of the max environment. Therefore it is recommended that you use the default (dictionary) mode with no compression.

## Arguments

None.

## Attributes

### compress[int]

Apply compression to the serialized dictionary

### mode[symbol]

Switch between dictionary syntax and JSON format

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### dictionary

Name of a dictionary whose content will be serialized

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
| [dict.route](https://docs.cycling74.com/reference/dict.route) | Compare dictionaries |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) | Extract values from a dictionary |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
