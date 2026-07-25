---
type: max
name: "pattrmarker"
summary: "Provide pattr communication between patchers"
signal: false
url: "https://docs.cycling74.com/reference/pattrmarker/"
package: "Max"
see_also: ["autopattr", "pattr", "pattrforward", "pattrhub", "pattrstorage"]
---
# pattrmarker

Provide pattr communication between patchers

## Description

The [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) object associates a patcher with a global name, which can be used when looking up named objects. This permits, among other conveniences, name lookup and communication between two or more independent patcher hierarchies.

#### Discussion

The [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) object provides the same basic functionality of the globalpatchername attribute of the [patcher](https://docs.cycling74.com/reference/patcher) object.

## Arguments

### name[symbol] optional

The name for the parent patcher of the [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) object in the [pattr](https://docs.cycling74.com/reference/pattr) global namespace.

## Attributes

### invisible[int]

When enabled, the name of this [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) object will not appear in the list reported by the  getmarkerlist  message.

### name[symbol]

The global name of the parent patcher of the [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### getmarkerlist

Reports a list of all registered names in the [pattr](https://docs.cycling74.com/reference/pattr) global namespace from the [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) object's outlet, prepended by the word  markerlist . These names are reported whether they were registered via [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) objects or via the globalpatchername attribute of the [patcher](https://docs.cycling74.com/reference/patcher) object. With no argument, or an argument of  0 , the names of [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) objects with the invisible attribute enabled  **will not**  appear in the reported list. With an argument of  1 , all names, regardless of the invisible status, will be reported.

Arguments:

- all
  [int]

### reveal

Opens a view of the patcher referred to by the  global name  argument.

Arguments:

- name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [autopattr](https://docs.cycling74.com/reference/autopattr) | Expose multiple objects to the pattr system |
| [pattr](https://docs.cycling74.com/reference/pattr) | Provide an alias with a named data wrapper |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [pattrhub](https://docs.cycling74.com/reference/pattrhub) | Access all pattr objects in a patcher |
| [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) | Save and recall pattr presets |
