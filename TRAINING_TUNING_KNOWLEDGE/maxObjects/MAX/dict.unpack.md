---
type: max
name: "dict.unpack"
summary: "Extract values from a dictionary"
signal: false
url: "https://docs.cycling74.com/reference/dict.unpack/"
package: "Max"
see_also: ["Dictionaries", "dict.compare", "dict.deserialize", "dict.group", "dict.iter", "dict.join", "dict.pack", "dict.print", "dict.route", "dict.serialize", "dict.slice", "dict.strip", "dict.view", "dict"]
---
# dict.unpack

Extract values from a dictionary

## Description

Use the [dict.unpack](https://docs.cycling74.com/reference/dict.unpack) object to return the values of specified keys through dedicated outlets.

#### Discussion

**Note:**  The colon (:) is a reserved character and is not supported in keys or values.

## Arguments

### name[symbol] optional

Initial name of the dictionary to unpack when receiving a  bang  message. This will be replaced by the name of any dictionaries received at the object's inlet.

### default-values[list] optional

Dictionary syntax specifying initial keys and values to be fetched. See [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) for more information on dictionary syntax.

## Attributes

### keys[256 symbols]

List of keys from the incoming dictionary from which to fetch values and send to outlets

### legacy[int] >= 9.0.0

Legacy output mode for arrays

### unmatched[int]: 1

Add Unmatched Outlet

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Re-fetch the values from the dictionary last received

### array

TEXT\_HERE

### dictionary

Name of a dictionary from which to fetch values for output

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
| [dict.serialize](https://docs.cycling74.com/reference/dict.serialize) | Convert a dictionary's content to text |
| [dict.slice](https://docs.cycling74.com/reference/dict.slice) | Split a dictionary into two dictionaries |
| [dict.strip](https://docs.cycling74.com/reference/dict.strip) | Remove keys from a dictionary |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
