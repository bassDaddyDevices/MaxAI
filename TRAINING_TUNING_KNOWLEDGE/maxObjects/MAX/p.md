---
type: max
name: "p"
summary: "Create a subpatch within a patch"
signal: false
url: "https://docs.cycling74.com/reference/p/"
package: "Max"
see_also: ["bpatcher", "inlet", "outlet", "pcontrol", "thispatcher"]
---
# p

Create a subpatch within a patch

## Description

Creates patches within patches.

#### Discussion

Take a patch contained within a single patcher window, place it within a [patcher](https://docs.cycling74.com/reference/patcher) object, add [inlet](https://docs.cycling74.com/reference/inlet) s and [outlet](https://docs.cycling74.com/reference/outlet) s, and you can instantiate it as an object (or many copies of that object) capable of its own messaging, embedded within a larger patch.

The number of inlets in a [patcher](https://docs.cycling74.com/reference/patcher) object is determined by the number of [inlet](https://docs.cycling74.com/reference/inlet) objects contained within its subpatch window. The messaging which the [patcher](https://docs.cycling74.com/reference/patcher) object can handle depends upon the patch you embed within it.
Double-clicking on a [patcher](https://docs.cycling74.com/reference/patcher) object with the mouse opens the subpatcher in a new window.

## Arguments

### subpatch[symbol] optional

The subpatch can be given a name by the argument, so that its name appears in the title bar of the subpatch window. The name in the title bar of the subpatch window is displayed in brackets to indicate that it is part of another file. If there is no argument typed in, the subpatch window is named [sub patch]. Different patcher objects that share the same name are still distinct subpatches, and do not share the same contents.

## Attributes

### accentcolor[4 floats]

Sets the default accented background color for objects.

### assistshowspatchername[int]: 0

If set to 0 (default) and an inlet or outlet object in the subpatcher has a comment, the patcher name is not shown. If there is no comment, it is shown. If the attribute is set to 1, the patcher name is always shown whether or not the inlet / outlet object has a comment.

### bgcolor[4 floats]

Sets the default background color for objects.

### bgfillcolor[4 floats]

Sets the default gradient fill for objects.

### bottomtoolbarpinned[int]: 0

Controls the display of the bottom toolbar when a file is opened. If set to "last saved", the toolbar will be shown only if it was visible when the patcher was saved. If set to "pin", the bottom toolbar will always be visible. If set to "unpin" the toolbar will always be invisible until the cursor moves over the bottom edge of the window.

Possible values:

0 = 'last saved'
(
Last saved
)
The bottom toolbar will be shown only if it was visible when the patcher was saved.

1 = 'pin'
(
Pinned visible
)
The bottom toolbar will always be visible.

2 = 'unpin'
(
Unpinned
)
The bottom toolbar will always be invisible until the cursor moves over the bottom edge of the window.

### boxanimatetime[int32]: 200

Sets the time, in milliseconds, used for animation of object behavior in the patcher window.

### bubble\_bgcolor[4 floats]

Sets the default background color for the comment object in bubble mode

### bubble\_outlinecolor[4 floats]

Sets the default outline color for the comment object in bubble mode

### clearcolor[4 floats]

Sets the default background color for comment objects.

### cluebar[int]: 0

Override the clue bar preference for this patcher

Possible values:

0 = 'Current Preference'
(
Use the current preference for showing the clue bar
)
1 = 'Yes'
(
Always show the clue bar for this patcher
)
2 = 'No'
(
Never show the clue bar for this patcher
)

### color[4 floats]

Sets the default foreground color for objects.

### commentary[symbol]:

Sidebar Commentary URL

### defaultfocusbox[symbol]

The scripting name of the object that will receive keyboard focus when the patcher is first opened.

### description[symbol]:

Sets a searchable description used by the database and documentation system.

### digest[symbol]:

Sets a searchable short description used by the database and documentation system.

### editing\_bgcolor[4 floats]

Sets the patcher background color when the patcher is unlocked.

### elementcolor[4 floats]

Sets the default border color for objects.

### enablehscroll[int]: 1

If enabled, the horizontal scrollbar will appear when the patcher’s content width exceeds its window width.

### enabletransparentbgwithtitlebar[int]: 0

When set to 1, this enables patchers with locked and unlocked backgrounds set to 0% opacity to become fully transparent. Please note that you must change the opacity setting for the Locked Patcher Background Color, locked\_bgcolor, and Unlocked Patcher Background Color, editing\_bgcolor.

### enablevscroll[int]: 1

If enabled, the vertical scrollbar will appear when the patcher’s content height exceeds its window height.

### filepath[symbol] read-only

The patcher’s complete file location if saved (read-only).

### fontface[int32]

The default font style used for new text objects.

Possible values:

0 = 'regular'
(
Regular font
)
Regular font

1 = 'bold'
(
Bold font
)
Bold font

2 = 'italic'
(
Italic font
)
Italic font

3 = 'bold italic'
(
Bold and italic font
)
Bold and italic font

### fontname[symbol]

Sets the default font used for new text objects.

### fontsize[float]

Sets the default font size used for new text objects.

Possible values:

'8'

'9'

'10'

'11'

'12'

'13'

'14'

'16'

'18'

'20'

'24'

'30'

'36'

'48'

'64'

'72'

### globalpatchername[symbol]:

Sets the global name by which this patcher can be referred to by pattr objects (for more information, see the [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) object).

### gridonopen[int]: 0

If enabled, a grid will be displayed in the unlocked patcher background when the patcher is opened.

### gridsize[2 floats]: 15. 15.

Sets the X and Y size of the grid in pixels.

### gridsnaponopen[int]: 0

If enabled, "Snap to Grid" will be on when the patcher is opened.

### helpsidebarclosed[int]

If enabled, keep the sidebar closed when opening the help patcher. If the help patcher is tabbed then this must be applied to the root patcher of the help file.

### integercoordinates[int]

When integercoordinates is enabled, the position and size of all boxes will be rounded ("snapped") to integer values. This can ensure a consistent user interface appearance at any zoom level.

### isolateaudio[int]

If enabled, starting or stopping audio in this patcher will not affect the audio in other patcher windows.

### lefttoolbarpinned[int]: 0

Controls the display of the left toolbar when a file is opened. If set to "last saved", the toolbar will be shown only if it was visible when the patcher was saved. If set to "pin", the left toolbar will always be visible. If set to "unpin" the toolbar will be invisible until the cursor moves over the left edge of the window.

Possible values:

0 = 'last saved'

1 = 'pin'

2 = 'unpin'

### locked\_bgcolor[4 floats]

Sets the patcher background color when the patcher is locked.

### objectsnaponopen[int]: 1

If enabled, "Snap to Objects" will be on when the patcher is opened

### openinpresentation[int]: 0

If enabled, the patcher opens in presentation mode.

### openrect[4 floats]

Sets the initial window position (horizontal offset/vertical offset/width/height) for the patcher window. If non-zero, changes to the patcher window's size or position will not be reflected when the file is saved.

### openrectmode[int]

Initial Window Mode

Possible values:

0 = 'Window'

1 = 'bpatcher'

### oscdefer[int]: 0

Turn this on to output received OSC in the low-priority queue in this patcher.

Possible values:

0 = 'App Default'

1 = 'On'

2 = 'Off'

### oscparamenableddefault[int]: 0

Enable / disable OSC for parameters by default.

Possible values:

0 = 'App Default'

Apply the setting in the global Max preferences.

1 = 'Enabled'

Enable OSC for parameters by default.

2 = 'Disabled'

Disable OSC for parameters by default.

### oscprefix[symbol]:

Prefix to prepend to all OSC addresses generated by Max. Can be overridden by changing the value in the patcher inspector.

### oscprefixmode[int]: 0

The type of prefix to prepend to OSC addresses generated by Max.

Possible values:

0 = 'App Default'

Apply the setting in the global Max preferences.

1 = 'None'

Do not add any OSC prefix to addresses generated by Max.

2 = 'Patcher Name'

Prepend the name of the patcher to OSC addresses generated by Max.

3 = 'Custom'

Prepend a custom prefix to OSC addresses generated by Max.

### oscqueryenable[int]: 0

Enable/Disable OSCQuery for this Patch.

Possible values:

0 = 'App Default'

Apply the setting in the global Max preferences.

1 = 'Off'

Disable OSCQuery for this patch.

### oscreceivemode[int]: 0

Select whether and how this patcher should respond to incoming OSC packets.

Possible values:

0 = 'App Default'

Apply the setting in the global Max preferences.

1 = 'Off'

Disable the ability to control this patcher remotely by OSC.

2 = 'UDP With Global Port'

Enable the ability to control this patcher by sending OSC over UDP to the port set in the global Max preferences.

3 = 'UDP With Custom Port'

Enable the ability to control this patcher by sending OSC over UDP to a custom port.

### oscreceivequantize[10 atoms]

Output OSC only on the specified time-boundary in this patcher. The quantization can be specified in bars.beats.units, ticks, or note values.

### oscreceivethreshold[10 atoms]

Time threshold under which only one message may be received for this patcher. Time can be specified in any of the time formats used in Max.

### oscreceiveudpport[int]: 30338

The default UDP port this patcher will listen to for incoming OSC packets.

### oscsendmode[int]: 0

Select whether and how this patcher should send OSC data.

Possible values:

0 = 'App Default'

Apply the setting in the global Max preferences.

1 = 'Off'

Disable sending OSC data from this patcher.

2 = 'UDP With Global Destination'

Enable this patcher to send OSC data over UDP using the address and port set in the global Max preferences.

3 = 'UDP With Custom Destination'

Enable this patcher to send OSC data over UDP using a custom address and port.

### oscsendthreshold[10 atoms]: <default>

Time threshold under which only one message may be sent for this patcher. Time can be specified in any of the time formats used in Max.

### oscsendudpaddr[symbol]: 127.0.0.1

The UDP address that this patcher will send outgoing OSC packets to.

### oscsendudpport[int]: 30337

The UDP port that this patcher will send outgoing OSC packets to.

### oscuseparamprefix[int]: 0

Prepend /param to OSC addresses that describe parameters.

Possible values:

0 = 'App Default'

Apply the setting in the global Max preferences.

1 = 'Yes'

Do prepend /param to OSC addresses that describe parameters.

2 = 'No'

Do not prepend /param to OSC addresses that describe parameters.

### oscvaluemode[int]: 0

Select the type of value(s) Max should send.

Possible values:

0 = 'App Default'

Apply the setting in the global Max preferences.

1 = 'Raw Only'

Send only the raw (scaled) value.

2 = 'Raw With Suffix'

Send only the raw (scaled) value and append a /raw suffix to the OSC address.

3 = 'Normalized Only'

Send only the normalized [0,1] value if available.

4 = 'Normalized With Suffix'

Send only the normalized [0,1] value if available and append a /normalized suffix to the OSC address.

5 = 'Raw & Normalized'

Send both the raw (scaled) and normalized [0,1] values. /raw and /normalized suffixes will be automatically appended to distinguish them.

### patchlinecolor[4 floats]

Sets the default color for patch cords.

### righttoolbarpinned[int]: 0

Controls the display of the right toolbar when a file is opened. If set to "last saved", the toolbar will be shown only if it was visible when the patcher was saved. If set to "pin", the right toolbar will always be visible. If set to "unpin" the toolbar will be invisible until the cursor moves over the right edge of the window.

Possible values:

0 = 'last saved'

1 = 'pin'

2 = 'unpin'

### selectioncolor[4 floats]

Sets the default selection color for objects.

### showcommentary[int]: 0

Show Commentary on Open

### showontab[atom]

If set to 1 (parent), the patcher’s title will appear as a tab in its parent patcher. If set to 2 (top-level), the patcher's title will appear as a tab of the top-level patcher. In a top-level patcher this attribute is ignored.

Possible values:

0 = 'none'

1 = 'parent'

2 = 'top-level'

### stripecolor[4 floats]

Sets the default background color for objects that display lists.

### style[symbol]:

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the patcher. Styles can be defined and edited using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### subpatcher\_template[symbol]:

Sets the template used when creating an embedded subpatcher with the patcher object or when a patcher is created using the Encapsulate feature. Only the toolbar, style, and editing settings are used by the template; objects are not added to the subpatcher.

Possible values:

'<none>'

'Abl.EffectModules'

'Cardinal'

'Chesterfield'

'Default Max 7'

'Generalissimo'

'GreenScreen'

'IceCubeTray'

'MP-Rnbo'

'MaxScore Combo'

'SynthBuildingBlocks'

'TheSands'

'audiostart'

'bigfont'

'bigpatcher'

'kiwi'

'oopsy\_bluemchen'

'oopsy\_field'

'oopsy\_nehcmeulb'

'oopsy\_patch'

'oopsy\_patch\_sm'

'oopsy\_petal'

'oopsy\_pod'

'oopsy\_versio'

'opengl\_starter'

'spat5-template'

### syntax\_attrargcolor[4 floats]

Overrides the current theme's syntax attribute argument color for this patcher

### syntax\_attributecolor[4 floats]

Overrides the current theme's syntax attribute name color for this patcher

### syntax\_objargcolor[4 floats]

Overrides the current theme's syntax object argument color for this patcher

### syntax\_objectcolor[4 floats]

Overrides the current theme's syntax object name color for this patcher

### taborientation[int]

Tab Orientation

Possible values:

0 = 'top'

1 = 'left'

### tags[symbol]:

Sets searchable tags (separated by spaces) used by the database.

### tallnewobj[int]: 0

If enabled, the default object box is slightly taller to make its text easier to read.

### textcolor[4 floats]

Sets the default text color for comment objects.

### textcolor\_inverse[4 floats]

Sets the default text color for objects.

### textjustification[int]

Sets the default text justification used for new text objects.

Possible values:

0 = 'left'

1 = 'center'

2 = 'right'

### title[symbol]

Sets the name shown in the patcher’s title bar.

### toolbarvisible[int]: 1

If enabled, the toolbars will be shown when the patcher is opened.

### toptoolbarpinned[int]: 0

Controls the display of the top toolbar when a file is opened. If set to "last saved", the toolbar will be shown only if it was visible when the patcher was saved. If set to "pin", the top toolbar will always be visible. If set to "unpin" the toolbar will be invisible until the cursor moves over the top edge of the window.

Possible values:

0 = 'last saved'

1 = 'pin'

2 = 'unpin'

### workspacedisabled[int]

If enabled, the patcher will not be re-opened when relaunching if it was open when last quitting Max.

### external\_mpe\_tuning\_enabled[int]

If enabled, Live will send tuned MPE data to the device, using per-note pitch bend messages to play in tune with the currently selected tuning system in Live. Only has an effect if the is\_mpe attribute is set to 1. (The alternative approach to using Live tunings is to use Live's TuningSystem API. See the bundled Global.TuningSystem snippet for an example.)

### is\_mpe[int]

If enabled, a Max for Live device will receive MPE data from Live.

### latency[int]

Defined Latency

### minimum\_live\_version[symbol]

Minimum Live version required by this Max for Live device.

### minimum\_max\_version[symbol]

Minimum Max version required by this Max for Live device.

### platform\_compatibility[long]

Platform compatibility of the device.

Possible values:

0 = 'All'

1 = 'Mac Only'

2 = 'Windows Only'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Output

### anything

The number of outlets a patcher object has is determined by the number of [outlet](https://docs.cycling74.com/reference/outlet) objects contained within the subpatch window. Output can also be sent via send and value objects contained in the subpatch. The actual messages sent out of a patcher object depend on the contents of the subpatch.

When a patcher object is first created, the subpatch window is automatically opened for editing. To view or edit the contents of a patcher object (or any subpatch object) later on, double-click on the object when the patcher window is locked.

All the objects in a subpatch of a patcher object are saved as part of the patcher which contains the object.

## See Also

| Name | Description |
| --- | --- |
| [bpatcher](https://docs.cycling74.com/reference/bpatcher) | Embed a subpatch with a visible UI |
| [inlet](https://docs.cycling74.com/reference/inlet) | Receive messages from outside a patcher |
| [outlet](https://docs.cycling74.com/reference/outlet) | Send messages out of a patcher |
| [pcontrol](https://docs.cycling74.com/reference/pcontrol) | Open and close subwindows |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
