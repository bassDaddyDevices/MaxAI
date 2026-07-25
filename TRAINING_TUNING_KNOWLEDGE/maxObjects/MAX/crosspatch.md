---
type: max
name: "crosspatch"
summary: "Patching Editor for Matrix Objects"
signal: false
url: "https://docs.cycling74.com/reference/crosspatch/"
package: "Max"
see_also: ["gate~", "matrix", "matrix~", "matrixctrl", "selector~"]
---
# crosspatch

Patching Editor for Matrix Objects

## Description

Connect a [crosspatch](https://docs.cycling74.com/reference/crosspatch) to a client object (including [matrix~](https://docs.cycling74.com/reference/matrix~), [mcs.matrix~](https://docs.cycling74.com/reference/mcs.matrix~), [mc.matrix~](https://docs.cycling74.com/reference/mc.matrix~), [matrix](https://docs.cycling74.com/reference/matrix), [gate~](https://docs.cycling74.com/reference/gate~), [mc.gate~](https://docs.cycling74.com/reference/mc.gate~), [mcs.gate~](https://docs.cycling74.com/reference/mcs.gate~), [gate](https://docs.cycling74.com/reference/gate), [selector](https://docs.cycling74.com/reference/selector), [mc.selector~](https://docs.cycling74.com/reference/mc.selector~), [mcs.selector~](https://docs.cycling74.com/reference/mcs.selector~), and [switch](https://docs.cycling74.com/reference/switch)) to use a patching interface to edit connections between inputs and outputs.

#### Discussion

When [crosspatch](https://docs.cycling74.com/reference/crosspatch) is connected to a single client object, it operates in  *two-way mode* . In this mode, [crosspatch](https://docs.cycling74.com/reference/crosspatch) can change the client object  *and*  changes to the connected object are reflected in the visual state of [crosspatch](https://docs.cycling74.com/reference/crosspatch). In  *two-way mode* , you cannot change the number of inputs or outputs of [crosspatch](https://docs.cycling74.com/reference/crosspatch); it will always show the number of inputs and outputs of the connected object. When [crosspatch](https://docs.cycling74.com/reference/crosspatch) is connected to two or more matrix objects, it operates in  *one-way mode* . In this mode, changes to the matrix objects other by the UI of [crosspatch](https://docs.cycling74.com/reference/crosspatch) are  *not*  reflected in the visual state, and you can change the number of inputs and outputs freely. This means the UI and the underlying state of the objects it is controlling could get out of sync. To avoid this, use [crosspatch](https://docs.cycling74.com/reference/crosspatch) in  *two-way mode*  only.

When you connect [crosspatch](https://docs.cycling74.com/reference/crosspatch) to an [mc.matrix](https://docs.cycling74.com/reference/mc.matrix) object (which is multiple instances of [matrix~](https://docs.cycling74.com/reference/matrix~) in the MC Wrapper), the state of all contained [matrix~](https://docs.cycling74.com/reference/matrix~) instances will change together. You cannot use [crosspatch](https://docs.cycling74.com/reference/crosspatch) to edit individual [matrix~](https://docs.cycling74.com/reference/matrix~) objects within an [mc.matrix](https://docs.cycling74.com/reference/mc.matrix).

## Arguments

None.

## Attributes

### allowdisabled[int]: 0

Sets whether connections can be made to disabled inputs or outputs.

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the object's background color.

### candycane[int]: 1

Sets the number of colors to cycle through when displaying connections and labels. The default value of 1 shows only the linecolor; values above 1 show one or more of the candycane colors.

### candycane2[4 floats]

Candycane Color 1

### candycane3[4 floats]

Candycane Color 2

### candycane4[4 floats]

Candycane Color 3

### candycane5[4 floats]

Candycane Color 4

### candycane6[4 floats]

Candycane Color 5

### candycane7[4 floats]

Candycane Color 6

### candycane8[4 floats]

Candycane Color 7

### candymode[int]: 0

Controls whether inputs our output positions determine the color of a connection.

Possible values:

0 = 'Using Input'
(
Input position will determine connection color
)
1 = 'Using Output'
(
Output position will determine connection color
)

### colorlabels[int]: 0

When colorlabels is enabled, the connection color is also used to display corresponding input and output labels according to the setting of the candymode attribute.

### connectacrossdividers[int]: 1

Sets whether connections can cross any visual dividers (set via the dividers attribute) that are currently showing.

### dimmedconnectionalpha[float]: 1.

Sets an alpha value to use for dimming patch lines not connected to the current input or output under the mouse cursor. A value of 0 would erase the lines completely, and a value of 1 (the default) would not perform any dimming. A suggested value of dimmedconnectionalpha to see the highlighting effect is 0.5.

### dividercolor[4 floats]

Sets the color used to draw visual dividers.

### dividers[atom]

To group inputs or outputs visually you can draw horizontal lines across the [crosspatch](https://docs.cycling74.com/reference/crosspatch) object with the dividers attribute. Dividers are defined using either the word  in  or  out  followed by an index. The resulting vertical position of the line will be  *after*  the specified input or output. Note that divider lines are always horizontal so if the number of inputs and outputs is not equal, a divider defined by an input may cross an output or vice versa. You can prevent connections across the horizontal divider lines by enabling the connectacrossdividers attribute.

### embed[int]: 1

If embed is true, connections are saved with the patcher and restored when reloading it. All attributes (including embed) are always saved with the object.

### exclusive[int]: 0

The exclusive attribute controls whether multiple connections from a single input or to a single output are permitted.

Possible values:

0 = 'Off'
(
No connection restrictions
)
1 = 'Inputs'
(
Multiple connections from the same input are prevented
)
2 = 'Outputs'
(
Multiple connections to the same output are prevented
)
3 = 'Inputs + Outputs'
(
Multiple connections from the same input  *and*  multiple connections to the same outlet are prevented.
)

### gaincaption[int]: 0

The gaincaption attribute enables showing the numerical value of the gain control as it is changed.

Possible values:

0 = 'Off'
(
No value display
)
1 = 'dB'
(
Display value in dB
)
2 = 'Amplitude'
(
Display numerical value
)

### gaindragmode[int]: 0

Sets how vertical mouse movement translates into changes in gain, particularly at the low end of the amplitude range.

Possible values:

0 = 'Linear'
(
Linear gain control
)
This setting maintains a constant relationship between the vertical mouse position when dragging and the amplitude value.

1 = 'dB'
(
dB gain control
)
This setting increments or decrements the gain value by a proportion of the mouse position in dB when dragging. This mode provides slightly coarser resolution at the top end of the amplitude range and slightly finer resolution at the bottom of the amplitude range, which is more perceptually linear in most cases.

### gainradius[float]: 7.

Sets the size of the circle used for the connection gain control.

### gainstyle[int]: 0

Sets the visual appearance of the circular gain control

Possible values:

0 = 'Dial'
(
270 degree arc
)
When the gainstyle attribute is set to  Dial  (0), a value of 1.0 is a 270-degree arc similar to the pie segement mode of the Max dial.

1 = 'Full Circle'
(
(Almost) 360 degree arc
)
When the gainstyle attribute is set to  Full Circle  (1), a value of 1.0 is a 360-degree arc.

### incolormap[atom]

The incolormap attribute maps specific colors to inputs. The linecolor is index 1 and the candycane colors are indices 2 - 8. Example:  incolormap 1 5 4 2  assigns linecolor to the first input, candycane5 to the second input, candycane4 to input 3, and candycane2 to input 4. Any inputs not included in the incolormap retain their default color assignment according to the candycane attribute.

### initialgain[float]: 1.

Sets the initial gain used when making connections. Since a zero gain means "disconnect" to the [matrix~](https://docs.cycling74.com/reference/matrix~) object, the initialgain cannot be zero, but can be very close to zero -- a minimum of -70 dB)

### inlabels[atom]

Use inlabels to override some or all of the default "In N" labels displayed for connection inputs.

### labelheight[float]: 20.

Sets the minimum height of one input or output in the UI.

### labelwidth[float]: 80.

Sets the minimum width for input and output labels used when laying out the UI of [crosspatch](https://docs.cycling74.com/reference/crosspatch).

### linecolor[4 floats]

Sets the color used for connections.

### maxgain[float]: 1.

The maxgain attribute sets the maximum permitted gain using circular gain controls on connection patch cords. Note that maxgain does not affect gain values set via the  list  message.

### numins[int]: 4

The numouts attribute set the number of outputs shown. In two-way mode, this attribute is set by the client object and cannot be changed.

### numouts[int]: 4

The numouts attribute sets the number of outputs shown. In two-way mode, this attribute is set by the client object and cannot be changed.

### outcolormap[atom]

The outcolormap attribute maps specific colors to outputs. The linecolor is index 1 and the candycane colors are indices 2 - 8. Example:  outcolormap 3 5 1 2  assigns candycane3 to the first output, candycane5 to the second output, linecolor to input 3, and candycane2 to output 4. Any outputs not included in the outcolormap retain their default color assignment according to the candycane attribute.

### outlabels[atom]

Use outlabels to override some or all of the default "Out N" labels displayed for connection outputs.

### overgaincolor[4 floats]

When the maxgain is above 1, you can set the gain for any connection above unity. Use the overgaincolor attribute to set color to for any gain values above 1.0.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

Visible to Mapping

### preservegain[int]: 0

When exclusive is set to  Outputs  (2) or  Inputs + Outputs  (3), any connection to an output will delete an existing connection to the same output. If preservegain is enabled, the gain of the now deleted connection will be transferred to the new connection.

### showgain[int]: 1

Use the showgain attribute to control the display of circular gain controls on patch cords.

Possible values:

0 = 'Off'
(
Never show gain controls
)
1 = 'Only if Not Unity Gain'
(
Show a gain control only if the gain of the connection is not 1.0 (unity)
)
2 = 'Always'
(
Always show a gain control regardless of value
)

### showlabels[int]: 1

Sets whether input and output labels are shown (1) or hidden (0).

### style[symbol]:

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the default color of the input and output labels. When the colorlabels attribute is enabled, connection colors are used for the text labels.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The  bang  message will copy the current connection state to any objects connected to the left outlet. A dictionary with the current state is sent out the left outlet if any there are any connected objects that aren't compatible with the [crosspatch](https://docs.cycling74.com/reference/crosspatch) connection protocol. The  dump  message sends a similar dictionary out the right outlet.

### list

A list of numbers adds or deletes a connection and updates connected clients. The first number is the input (always zero relative), the second number is the output (always zero relative), and the third number is a gain value. If the gain value is zero, the connection is removed, otherwise it is associated with the connection.

Arguments:

- input-index
  [int]
- output-index
  [int]
- gain-or-zero
  [float]

### clear

The  clear  message clears all current connections and updates any connected clients.

### dictionary

When [crosspatch](https://docs.cycling74.com/reference/crosspatch) receives a dictionary containing connection information, it clears its existing connections and replaces them with those contained in the dictionary, updating connected clients. Connections for inputs or outputs greater than the current input and output size are ignored.

Arguments:

- dictionary-name
  [symbol]

### dump

The  dump  message outputs a dictionary out the right outlet containing the current connections.

### dumpconnections

The  dumpconnections  message outputs a dictionary out the right outlet containing the current connections.

### indisable

The word  indisable , followed by an input index starting at 0, visually disables the input if the second argument is non-zero and enables it if the second argument is 0. Example:  indisable 1 1  will disable the second input, and  indisable 1 0  will re-enable it. When you disable an input, any connections to it will be removed if allowdisabled is not enabled. Moreover, you cannot connect anything to a disabled input unless allowdisabled is enabled. The disabled state of inputs is  *not*  saved in the patcher.

Arguments:

- input-index
  [int]
- disable
  [int]

### (mouse)

*To make a connection between an input and output* , click on a white circle on either the input or output side of the object and either move or drag to the desired destination circle. The destination will highlight when the mouse is over it. If you released the mouse to start the connection, click again to complete the connection. If you dragged the mouse, release the button.

 *To delete an existing connection*  click once on the line to select it, then press the delete or backspace key.

To edit the gain of a connection, click on the line and drag upwards or downwards. A dial will indicates the current gain as you drag.

As you edit connections with [crosspatch](https://docs.cycling74.com/reference/crosspatch), any connected matrix objects will update to reflect changes in gain or connection state.

### outdisable

The word  outdisable , followed by an output index starting at 0, visually disables the input if the second argument is non-zero and enables it if the second argument is 0. Example:  outdisable 1 1  will disable the second output, and  outdisable 1 0  will re-enable it. When you disable an output, any connections to it will be removed if allowdisabled is not enabled. Moreover, you cannot connect anything to a disabled output unless allowdisabled is enabled. The disabled state of outputs is  *not*  saved in the patcher.

Arguments:

- output-index
  [int]
- disable
  [int]

## See Also

| Name | Description |
| --- | --- |
| [gate~](https://docs.cycling74.com/reference/gate~) | Route a signal to one of several outlets |
| [matrix](https://docs.cycling74.com/reference/matrix) | Event routing matrix |
| [matrix~](https://docs.cycling74.com/reference/matrix~) | Signal routing and mixing matrix |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [selector~](https://docs.cycling74.com/reference/selector~) | Assign one of several inputs to an outlet |
