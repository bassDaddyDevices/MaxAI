---
type: max
name: "mira.multitouch"
summary: "Receive touch and gesture data from touchscreen."
signal: false
url: "https://docs.cycling74.com/reference/mira.multitouch/"
package: "Mira"
see_also: ["mira.frame", "mira.motion", "mira.status"]
---
# mira.multitouch

Receive touch and gesture data from touchscreen.

## Description

Mira.multitouch receives touch and gesture data from a multitouch device. It will output the position and state of as many touches as are supported by the device. When enabled, it will also output a message when a device gesture is recognized, as well as the state of that gesture. Mira.multitouch can recognize tap, swipe, rotation and pinch gestures. The mira.mt abstrations are useful for processing and filtering the messages output by mira.multitouch.

## Arguments

None.

## Attributes

### hsegments[atom\_long]: 1

Number of horizontal divisions of the mira.multitouch object

### local\_circles[atom\_long]: 1

When enabled, touches received from connected devices will be displayed as circles in the mira.multitouch object.

### pinch\_enabled[atom\_long]

When enabled, mira.multitouch will detect pinch gestures

### remote\_circles[atom\_long]: 1

Wen enabled, the mira.multitouch interface object in Mira will draw circles under detected touches.

### remote\_gestures[atom\_long]: 1

When enabled, the mira.multitouch interface object in Mira will draw indications of recognized gestures.

### rotate\_enabled[atom\_long]

When enabled, mira.multitouch will detect rotation gestures

### swipe\_enabled[atom\_long]

When enabled, mira.multitouch will detect swipe gestures

### swipe\_touch\_count[atom\_long]

Number of fingers that must participate in a swipe gesture for it to be recognized.

Possible values:

0 = '1'
(
One finger
)
One finger

1 = '2'
(
Two fingers
)
Two fingers

2 = '3'
(
Three fingers
)
Three fingers

3 = '4'
(
Four fingers
)
Four fingers

### tap\_enabled[atom\_long]

When enabled, mira.multitouch will detect tap gestures

### tap\_tap\_count[atom\_long]

Whether mira.multitouch will recognize single, double, triple or quadruple taps

Possible values:

0 = '1'
(
Single tap
)
Single tap

1 = '2'
(
Double tap
)
Double tap

2 = '3'
(
Triple tag
)
Triple tap

3 = '4'
(
Quadruple tap
)
Quadruple tap

### tap\_touch\_count[atom\_long]

Number of fingers that must participate in a tap gesture for it to be recognized.

Possible values:

0 = '1'
(
One finger
)
One finger

1 = '2'
(
Two fingers
)
Two fingers

2 = '3'
(
Three fingers
)
Three fingers

3 = '4'
(
Four fingers
)
Four fingers

### vsegments[atom\_long]: 1

Number of horizontal divisions of the mira.multitouch object

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [mira.frame](https://docs.cycling74.com/reference/mira.frame) | Mirror your Max patcher on your iPad |
| [mira.motion](https://docs.cycling74.com/reference/mira.motion) | Receive data from iPad accelerometer, gyroscope and magnetometer. |
| [mira.status](https://docs.cycling74.com/reference/mira.status) |  |
