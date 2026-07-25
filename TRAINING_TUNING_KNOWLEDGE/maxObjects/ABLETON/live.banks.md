---
type: ableton
name: "live.banks"
summary: "Manage Max for Live Device banks for Push controllers."
signal: false
url: "https://docs.cycling74.com/reference/live.banks/"
package: "Max for Live"
see_also: ["live.arrows", "live.button", "live.dial", "live.drop", "live.gain", "live.line", "live.numbox", "live.slider", "live.tab", "live.toggle"]
---
# live.banks

Manage Max for Live Device banks for Push controllers.

## Description

Create, edit and delete Max for Live Device parameter banks, as displayed on Ableton's Push controllers. Banks are saved with the device, but can be modified in real-time to cause updates on the Push display. For instance, you might want to reveal or hide particular parameters within a bank depending on device state.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-click to open the Parameter Banks window. Only available in the editor, this feature is disabled inside of Live.

### delete

Delete a parameter bank. Deleting a bank will decrement the index of the banks with higher indices.

Arguments:

- bank\_id
  [int]

### edit

Edit a parameter bank, specified by  *bank\_id*  (0-indexed). To change the bank name, pass a new name as  *bank\_name* , or pass -  (minus) to use the existing name. The optional list of parameters should be a list of index/name pairs in the form  *parameter\_index*   *parameter\_name* . For instance,  edit 0 newname 0 foo 2 bar 4 - 5 bap  would change the name of bank 0 to  *newname*  and modify parameter encoder slot 0 to use the parameter  *foo* , slot 2 to use the parameter  *bar* , eliminate the parameter in slot 4, and assign slot 5 to the parameter named  *bap* .

To add button assignments, add the word  @buttons  after the list of encoder assignments, followed by a list of parameters using the same format as above.

Arguments:

- bank\_id
  [int]
- bank\_name
  [symbol]
- bank\_parameters
  [list]

### getcount

Sends the  count  message from the outlet, followed by the number of banks.

### getname

Sends the  name  message from the outlet, followed by the index (int) and name (symbol) of the specified bank.

Arguments:

- bank\_id
  [int]

### getparameters

Sends the  parameters  message from the outlet, followed by the index (int) of and a list of parameter names (symbol) in the specified bank.

Arguments:

- bank\_id
  [int]

### new

Create a bank at the index specified by  *bank\_id*  (0-indexed). If a bank already exists at that index, the new bank will be inserted at the specified index and all higher-indexed banks will have their indices incremented. The bank requires a name, specified by  *bank\_name* . The list of parameters should be a list of up to 8 symbols, specifying the parameter name for bank encoder slots 0-7. A -  (minus) can be used to indicate that a slot should have no parameter associated with it.

To add button assignments, add the word  @buttons  after the list of encoder assignments, followed by a list of parameters using the same format as above.

Note: when creating banks, it is possible to specify indices higher than the bank count. That is, one could start with an empty set of banks and create bank 3 first. In that case, dummy banks will be created in slots 0, 1 and 2. Dummy banks are displayed with grey text in the Parameter Banks window. Editing a dummy bank will cause it to become a 'real' bank. Creating a new bank at the index occupied by a dummy bank will replace the dummy bank in-place, rather than performing an insert.

Arguments:

- bank\_id
  [int]
- bank\_name
  [symbol]
- bank\_parameters
  [list]

## See Also

| Name | Description |
| --- | --- |
| [live.arrows](https://docs.cycling74.com/reference/live.arrows) | Vectorized arrow(s) user interface object |
| [live.button](https://docs.cycling74.com/reference/live.button) | Flash on any message, send a bang |
| [live.dial](https://docs.cycling74.com/reference/live.dial) | Output numbers by moving a dial onscreen |
| [live.drop](https://docs.cycling74.com/reference/live.drop) | Define a region for dragging and dropping a file |
| [live.gain](https://docs.cycling74.com/reference/live.gain) |  |
| [live.line](https://docs.cycling74.com/reference/live.line) | Straight line |
| [live.numbox](https://docs.cycling74.com/reference/live.numbox) | Display and output a number |
| [live.slider](https://docs.cycling74.com/reference/live.slider) | Output numbers by moving a slider onscreen |
| [live.tab](https://docs.cycling74.com/reference/live.tab) | A user interface tab/multiple button object in the style of Ableton Live. |
| [live.toggle](https://docs.cycling74.com/reference/live.toggle) | Switch between off and on (0/1) |
