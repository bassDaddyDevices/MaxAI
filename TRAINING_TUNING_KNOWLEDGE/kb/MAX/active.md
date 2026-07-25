---
type: max
name: "active"
summary: "Send 1 when patcher window is active, 0 when inactive"
signal: false
url: "https://docs.cycling74.com/reference/active/"
package: "Max"
see_also: ["closebang", "loadbang", "loadmess", "savebang"]
---
# active

Send 1 when patcher window is active, 0 when inactive

## Description

[active](https://docs.cycling74.com/reference/active) will output a 1 when the Patcher window becomes active (i.e., it is the front-most window and its title bar is highlighted), and output a 0 when the Patcher window becomes inactive. You can use this to change the user interface of your window. For example, messages from the [key](https://docs.cycling74.com/reference/key) object can be turned off when the window is made inactive.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

There are no inlets. Output is triggered automatically when the patcher window is activated or deactivated.

Arguments:

- internal-messaging
  [int]

## Output

### int

When the patcher window that contains [active](https://docs.cycling74.com/reference/active) is activated, [active](https://docs.cycling74.com/reference/active) sends out  1 . When the window is made inactive, [active](https://docs.cycling74.com/reference/active) sends out  0 .

## See Also

| Name | Description |
| --- | --- |
| [closebang](https://docs.cycling74.com/reference/closebang) | Send a bang on close |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
| [loadmess](https://docs.cycling74.com/reference/loadmess) | Send a message when a patch is loaded |
| [savebang](https://docs.cycling74.com/reference/savebang) | Send a bang on save |
