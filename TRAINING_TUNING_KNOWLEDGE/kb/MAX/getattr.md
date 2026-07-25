---
type: max
name: "getattr"
summary: "Query object attributes"
signal: false
url: "https://docs.cycling74.com/reference/getattr/"
package: "Max"
see_also: ["attrui"]
---
# getattr

Query object attributes

## Description

Provides a user interface to query attribute values from an object. You can also retrieve a list of all available attributes for the attached object.

## Arguments

### attribute[symbol] optional

The attribute to access

## Attributes

### attr[symbol]

The attribute to be accessed

### listen[int]

When set to "1", outputs the current attribute value whenever it changes.

### prefix[int]

Adds the attribute name as a prefix to all output values.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Queries the connected object and outputs the current value for the selected attribute.

### getattrlist

Dumps all of the available attributes out the rightmost outlet. The list of attributes is prefaced by the work "attrlist", and can be used to load a menu or verify input.

## See Also

| Name | Description |
| --- | --- |
| [attrui](https://docs.cycling74.com/reference/attrui) | Inspect attributes |
