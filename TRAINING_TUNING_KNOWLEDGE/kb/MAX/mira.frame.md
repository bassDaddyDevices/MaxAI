---
type: max
name: "mira.frame"
summary: "Mirror your Max patcher on your iPad"
signal: false
url: "https://docs.cycling74.com/reference/mira.frame/"
package: "Mira"
see_also: ["mira.motion", "mira.multitouch", "mira.status"]
---
# mira.frame

Mirror your Max patcher on your iPad

## Description

Mira.frame defines a rectangle in the Max patcher that will be mirrored on connected iPad devices. Any Mira-supported objects that fall within the rectangle will be visible on the iPad. Multiple mira.frame objects will be rendered on the iPad as separate tabs. When a [mira.frame](https://docs.cycling74.com/reference/mira.frame) object exists in a patcher, all Mira-supported objects in the patcher are automatically assigned a scripting name.

## Arguments

None.

## Attributes

### aspect[atom\_long]: 0

Device Aspect Ratio

Possible values:

0 = 'Mira App'

1 = '4:3'

2 = '3:2'

3 = '16:10'

4 = '17:10'

5 = '16:9'

6 = 'Free'

### draw\_tab\_name[atom\_long]: 1

When enabled, mira.frame draws its tab name at the top of the frame rectangle.

### miraweb\_aspect[atom\_long]: 1

Adjust Aspect Ratio for Miraweb

### orientation[atom\_long]: 1

In portrait mode, mira.frame is taller than it is wide. In landscape mode, mira.frame is wider than it is tall.

Possible values:

0 = 'Portrait'

Portrait orientation

1 = 'Landscape'

Landscape orientation

### tabname[symbol]:

The name of the tab

### taborder[atom]: <none>

The index of the tab. Tabs with a lower index will appear to the left of tabs with a higher index.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### focus

Cause all connected iPads to bring this mira.frame to the front. If mira.frame has no inlet, you can still send it a message using a thispatcher object.

## See Also

| Name | Description |
| --- | --- |
| [mira.motion](https://docs.cycling74.com/reference/mira.motion) | Receive data from iPad accelerometer, gyroscope and magnetometer. |
| [mira.multitouch](https://docs.cycling74.com/reference/mira.multitouch) | Receive touch and gesture data from touchscreen. |
| [mira.status](https://docs.cycling74.com/reference/mira.status) |  |
