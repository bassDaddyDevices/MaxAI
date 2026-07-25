---
type: jitter
name: "jit.obref"
summary: "Launch html object reference"
signal: false
url: "https://docs.cycling74.com/reference/jit.obref/"
package: "Jitter"
see_also: ["jit.uldl"]
---
# jit.obref

Launch html object reference

## Description

The [jit.obref](https://docs.cycling74.com/reference/jit.obref) object takes one  *object-name*  argument. When double clicked, the [jit.obref](https://docs.cycling74.com/reference/jit.obref) object will find the html object reference file corresponding to the object specified by  *object-name*  and launch it in Max's Documentation Window. The html object reference file must be located in the Max search path.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Equivalent to double clicking the object.

### anything

Sets the current  *object-name* .

Arguments:

- object-name
  [list]

### (mouse)

When double clicked, the [jit.obref](https://docs.cycling74.com/reference/jit.obref) object will find the html object reference file corresponding to the object specified by  *object-name*  and launch it in Max's Documentation Window. The html object reference file must be located in the Max search path.

## See Also

| Name | Description |
| --- | --- |
| [jit.uldl](https://docs.cycling74.com/reference/jit.uldl) | Internet upload/download |
