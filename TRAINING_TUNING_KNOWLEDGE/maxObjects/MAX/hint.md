---
type: max
name: "hint"
summary: "Display hint text"
signal: false
url: "https://docs.cycling74.com/reference/hint/"
package: "Max"
see_also: ["comment", "umenu"]
---
# hint

Display hint text

## Description

When you mouse over a [hint](https://docs.cycling74.com/reference/hint), you'll see a message appear on the screen below the area defined by the [hint](https://docs.cycling74.com/reference/hint). The [hint](https://docs.cycling74.com/reference/hint) object has a number of messages you can use to change its appearance.

#### Discussion

You can select a [hint](https://docs.cycling74.com/reference/hint) object and set its font and font size using the Font menu, or use its Get Info... dialog to apply other settings.

## Arguments

None.

## Attributes

### delay[int]: 0

Sets the delay in milliseconds until the hint appears. A value of 0 sets a default delay time of 1000 ms.

### enabled[int]: 1

Toggles enabling display of hint text.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

0  will disable any hinting while a non-zero number will enable it.

Arguments:

- enable
  [int]

### float

Converted to  int .

Arguments:

- enable
  [float]

### (mouse)

When the cursor moves within the [hint](https://docs.cycling74.com/reference/hint) object's rectangle, its text message will appear in a colored area beneath the rectangle after the specified delay.

### set

The word  set , followed by any message, will replace the message stored in [hint](https://docs.cycling74.com/reference/hint). This message will be displayed when the mouse is positioned over the [hint](https://docs.cycling74.com/reference/hint) object after an interval of time specified by the  delay  message.

Arguments:

- message
  [symbol]

## Output

### message

The message stored in the [hint](https://docs.cycling74.com/reference/hint) object.

## See Also

| Name | Description |
| --- | --- |
| [comment](https://docs.cycling74.com/reference/comment) | Explanatory note or label |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |
