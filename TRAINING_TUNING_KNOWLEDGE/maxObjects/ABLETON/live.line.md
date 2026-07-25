---
type: ableton
name: "live.line"
summary: "Straight line"
signal: false
url: "https://docs.cycling74.com/reference/live.line/"
package: "Max for Live"
see_also: ["panel"]
---
# live.line

Straight line

## Description

[live.line](https://docs.cycling74.com/reference/live.line) displays a straight line. It is useful for delimiting zones in your interface.

## Arguments

None.

## Attributes

### arrows[int]: 0

Sets the display mode for the arrows.

Possible values:

0 = 'None'
(
None
)
No arrows are displayed

1 = 'Start'
(
Start
)
Lines are displayed with arrows at their start points

2 = 'End'
(
End
)
Lines are displayed with arrows at their end points

3 = 'Both'
(
Both
)
Lines are displayed with arrows at both start and end points

### border[float]: 1.

Defines the thickness of the line in pixels

### justification[int]: 0

Sets the alignment of [live.line](https://docs.cycling74.com/reference/live.line) object.

Possible values:

0 = 'Left/Top'
(
Left/top
)
Left/top alignment.

1 = 'Centered'
(
Centered
)
Centered alignment.

2 = 'Right/Bottom'
(
Right/bottom
)
Right/Bottom alignment.

3 = 'Xing 1'

4 = 'Xing 2'

### linecolor[4 floats]

Sets the line color of [live.line](https://docs.cycling74.com/reference/live.line) object in RGBA format.

### orientation[int]: 2

Sets the [live.line](https://docs.cycling74.com/reference/live.line) object orientation. The orientation attribute only has an effect when justification is Left/Top, Centered, or Right/Bottom. The default orientation is automatic (2).

Possible values:

0 = 'Vertical'
(
Vertical orientation
)
Set the object for vertical display

1 = 'Horizontal'
(
Horizontal orientation
)
Set the object for horizontal display

2 = 'Automatic'
(
Automatic orientation
)
Set the orientation automatically. When the height of the object box is greater than the width, the orientation will be vertical. When the width is greater than the height, the orientation will be horizontal.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [panel](https://docs.cycling74.com/reference/panel) | Colored background area |
