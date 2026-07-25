---
type: max
name: "dialog"
summary: "Open a dialog box"
signal: false
url: "https://docs.cycling74.com/reference/dialog/"
package: "Max"
see_also: ["message", "opendialog", "savedialog", "sprintf"]
---
# dialog

Open a dialog box

## Description

Displays a dialog box with a selection of appearance modes. In Default mode, the [dialog](https://docs.cycling74.com/reference/dialog) object permits entry of a symbol (as text) and sends it out the outlet when you click on the "OK" button in the dialog box. In the other modes, the [dialog](https://docs.cycling74.com/reference/dialog) object displays text, but doesn't permit data entry.

#### Discussion

Note that the output of a dialog object is not directly "caused" by sending the object a message, so you can't count on it happening by a certain time.

## Arguments

### label[symbol] optional

Sets the prompt which will appear above the text entry box in the dialog window. In Alert, Confirmation and Extended modes (mode = 1, 2, 3 or 4), the prompt is displayed as a title above the default text. See label.

## Attributes

### label[atom]

Sets the prompt which will appear above the text entry box in the dialog window. In Alert, Confirmation and Extended modes (mode = 1, 2, 3 or 4), the prompt is displayed as a title above the default text.

### mask[int]: 0

Mask input text with bullet characters. The text output from the [dialog](https://docs.cycling74.com/reference/dialog) object's outlet remains human-readable.

### mode[int]: 0

The dialog box has five different display modes, Default, Alert, Confirmation and two Extended modes. Text input is permitted in Default mode, while the other two modes are used for text display with limited user interaction.

Possible values:

0 = 'Default (OK/Cancel)'
(
"Default" mode has a text entry field, and the buttons "OK" and "Cancel".
)
1 = 'Alert (OK)'
(
"Alert" mode has no text entry field, and the button "OK" only.
)
2 = 'Confirmation (OK/Cancel)'
(
"Confirmation" mode has no text entry field, and the buttons "OK" and "Cancel".
)
3 = 'Extended (Yes/No/Cancel)'
(
"Extended" mode has no text entry field, and the buttons "Yes", "No" and "Cancel".
)
4 = 'Extended (Yes/No)'
(
A second "Extended" mode without a text entry field, and the buttons "Yes" and "No" (but no "Cancel" option).
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Opens the dialog box with the previous text displayed as the default.

### int

See the  symbol  entry.

Arguments:

- text
  [int]

### (inlet1)

*Only applicable to Default display mode*  (mode = 0):

In right inlet: The number  0  configures the [dialog](https://docs.cycling74.com/reference/dialog) object to send out the text typed by the user into the dialog box as a symbol preceded by the word  symbol . A non-zero number configures the [dialog](https://docs.cycling74.com/reference/dialog) object to send out the typed-in text exactly as-is if it begins with a word, or preceded by the word  list  if it begins with a number. If no number is received, it is considered  0  by default.

Arguments:

- output-mode
  [int]

### float

In left inlet: Same as  symbol .

Arguments:

- text
  [float]

### clearsymbol

In left inlet: Clears any previously set default text.

### symbol

In Default mode (mode = 0):

In left inlet: The word  symbol , followed by any word, opens a dialog box prompting the user to enter text. The word following  symbol  is shown as the default text.

In other modes:

In left inlet: the word  symbol , followed by any word, opens a dialog box displaying that word.

If you want more than one word to appear as the default text, you must enclose the words in double quotes.

Arguments:

- text
  [symbol]

## Output

### bang

In Alert, Confirmation and Extended modes (mode = 1, 2, 3 or 4) if the user clicks the "OK" (or "Yes" button in Extended mode), a  bang  message is sent out the left outlet.

If the dialog box is cancelled by the user, a  bang  message is sent out the middle outlet.

In Extended modes (mode = 2 or 3), if the "No" button is clicked, a  bang  message is sent out the rightmost outlet.

### symbol

*Only applicable to Default display mode*  (mode = 0):

If the user clicks the "OK" button, the [dialog](https://docs.cycling74.com/reference/dialog) object makes a symbol out of the entered text (even if it's a number or it's more than one word) and sends it out its outlet with the word  symbol  prepended. If a non-zero number has been received in the right inlet, the typed-in message is sent out as is (without being preceded by the word  symbol ). This message can be displayed by prepending the word  set  and sending it to a [message](https://docs.cycling74.com/reference/message) box (as shown in the example). If the user clicks Cancel, nothing is sent out.

In Alert, Confirmation and Extended modes (mode = 1, 2, 3 or 4) if the user clicks the "OK" (or "Yes" button in Extended mode), a  bang  message is sent out the left outlet.

Since your patch continues to run while waiting for the user to type text into your dialog box, you can't count on getting the typed-in symbol immediately after sending the message that opens the dialog box.

## See Also

| Name | Description |
| --- | --- |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [opendialog](https://docs.cycling74.com/reference/opendialog) | Open a dialog to ask for a file or folder |
| [savedialog](https://docs.cycling74.com/reference/savedialog) | Open a dialog asking for a filename |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
