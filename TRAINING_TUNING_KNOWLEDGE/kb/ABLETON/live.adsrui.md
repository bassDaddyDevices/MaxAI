---
type: ableton
name: "live.adsrui"
summary: "ADSR User Interface"
signal: false
url: "https://docs.cycling74.com/reference/live.adsrui/"
package: "maxforlive-elements"
see_also: ["function", "live.adsr~"]
---
# live.adsrui

ADSR User Interface

## Description

The live.adsrui object is a user interface for defining the shape of an envelope using the classic Attack, Decay, Sustain, Release model. Each segment has an individually definable length and exponential slope. This object is designed to work seamlessly with its companion object, [live.adsr~](https://docs.cycling74.com/reference/live.adsr~).

## Arguments

None.

## Attributes

### active[long]

When the active attribute is set to 0, the mouse action does not cause output and the inactive colors are used.

### attack\_slope[float]

The slope of the attack stage (-1 to 1).

### attack\_time[float]

The duration of the attack stage in milliseconds. This value is clamped to the attack\_domain attribute.

### decay\_domain[2 floats]

The domain, or range, in which the decay value can move.

### decay\_slope[float]

The slope of the decay stage (-1 to 1).

### decay\_time[float]

The duration of the decay stage in milliseconds. This value is clamped to the decay\_domain attribute.

### domain\_exponent[float]

This exponent is applied when drawing the attack/decay/release values. The exponent allows you to tweak the behavior when the user moves the handle with the mouse.

### enable\_final[long]

When enabled, the final handle can move vertically.

### enable\_initial[long]

When enabled, the initial handle can move vertically. When disabled, the handle is not drawn.

### enable\_peak[long]

When enabled, the peak handle can move both horizontally and vertically. When disabled, the peak handle can only move horizontally.

### final[float]

The value the ADSR reaches at the end of the release stage.

### initial[float]

The value the ADSR starts at.

### outputmode[long]

Default on. When enabled, the values stored in the patch are sent out when loading this object. Turn this attribute off when lusing live.adsrui in a Max for Live device, when live.adsrui outputs to objects that store the ADSR values in the set, such as live.numbox, to prevent conflicts.

### peak[float]

The value the ADSR reaches at the end of the attack stage.

### release\_domain[2 floats]

The domain, or range, in which the release value can move.

### release\_slope[float]

The slope of the release stage (-1 to 1).

### release\_time[float]

The duration of the release stage in milliseconds. This value is clamped to the release\_domain attribute.

### show\_bounds[long]

When enabled, lines are shown to indicate the object's bounds.

### show\_slopehandles[long]

When enabled, the slope handles are drawn and can be manipulated with the mouse or keyboard.

### sustain[float]

The value the ADSR reaches at the end of the decay stage.

### sustain\_exponent[float]

The exponent that is applied when drawing the sustain value. The exponent allows you to tweak the behavior when the user moves the handle with the mouse.

### tethering[long]

Default on. When enabled, incoming values are sent out from the outlets immediately, without causing a stack overflow when routed back to the inlets. Disable this when connecting live.adsrui to other parameter-enabled objects in Max for Live, to prevent unexpected behavior when automating.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

A list to the leftmost inlet sets all ADSR envelope values simultaneously.

### float

A number sets the attribute associated with the inlet.

### bang

In any inlet, a bang will refresh the UI display and cause output.

### key

Use the arrow keys on the keyboard to nudge handles when this object is selected.

## See Also

| Name | Description |
| --- | --- |
| [function](https://docs.cycling74.com/reference/function) | Breakpoint function editor |
| [live.adsr~](https://docs.cycling74.com/reference/live.adsr~) | ADSR envelope generator |
