---
type: max
name: "repl"
summary: "Send, receive and output Max Console commands"
signal: false
url: "https://docs.cycling74.com/reference/repl/"
package: "Max"
see_also: ["REPL", "console"]
---
# repl

Send, receive and output Max Console commands

## Description

The [repl](https://docs.cycling74.com/reference/repl) object creates a named destination ("target") for commands you type into the Max Console window, creating a way to control patchers with a command line interface. (REPL is an acronym for Read Evaluate Print Loop.) Targets are either global -- receiving commands from any Max Console window -- or local to the patcher for which a Max Console is in the right sidebar. You can send a response to a command back to the user by sending any message to the inlet of [repl](https://docs.cycling74.com/reference/repl).

You can also use [repl](https://docs.cycling74.com/reference/repl) as a way to evalate commands as if they were typed into the Max Console window as well as print to the console.

## Arguments

### OBJARG\_NAME[OBJARG\_TYPE] optional

If an argument is supplied it is assigned to the target name. A unique generated name will be used by default.

## Attributes

### defer[int]: 0

Defer Commands

### exec[int]: 0

Execute Commands

### global[int]: 0

When the global attribute is 1, the [repl](https://docs.cycling74.com/reference/repl) object is available as a target in any Max Console window. When global is 0, the object is only available as a target in the patcher whose Max Console is open in the right sidebar.

### mirror[int]: 0

When mirror is enabled, any result generated from evaluating a message sent to the [repl](https://docs.cycling74.com/reference/repl) inlet will be echoed to the right outlet. Sending an expression to the  js  target or a .js  sub-target of a [v8](https://docs.cycling74.com/reference/v8) object will typically cause a result although that result may be equal to  undefined . For example, if both mirror and exec are enabled, sending  js 3 + 4  to [repl](https://docs.cycling74.com/reference/repl) will cause  7  to be sent out the right outlet. If  js let x = 3 + 4  is sent to [repl](https://docs.cycling74.com/reference/repl),  undefined  will be sent out the right outlet, because assigning a value to a variable has an undefined result in JavaScript.

### name[symbol]

The name of the target; users must precede a message with this name or the name followed by a period and additional text.

### print[int]: 1

When print is enabled, any message received by [repl](https://docs.cycling74.com/reference/repl) will be posted to the Max Console preceded by the value of the name attribute. You can use this to simulate "responses" to user commands received by [repl](https://docs.cycling74.com/reference/repl).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

If the print attribute is enabled, any message received is echoed to the Max Console window labeled with the target name as the source. If the exec attribute is enabled, any message received is evalulated as if it were typed into the Max Console.

Arguments:

- any message
  [list]

### array

When an array is sent to the inlet of [repl](https://docs.cycling74.com/reference/repl), its contents will be printed and/or evaluated according to the current state of the print and exec attributes. Elements of the array that are strings, symbols, or numbers will be evaluated or printed. Array elements are handled in ascending order by index.

Arguments:

- name
  [symbol]

### string

When a string is sent to the inlet of [repl](https://docs.cycling74.com/reference/repl), its text will be printed and/or evaluated according to the current state of the print and exec attributes

Arguments:

- name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [REPL](https://docs.cycling74.com/userguide/repl) | REPL |
| [console](https://docs.cycling74.com/reference/console) | Console Output in Patcher |
