---
type: max
name: "gamepad"
summary: "Report gamepad controller events"
signal: false
url: "https://docs.cycling74.com/reference/gamepad/"
package: "Max"
see_also: ["hi", "key", "keyup"]
---
# gamepad

Report gamepad controller events

## Description

Tracks and outputs the button, joystick, trigger, and sensor events from all connected gamepad controllers. Send a device control messages for haptic feedback rumble events and device led color with the senddevice message. The gamepad object is a lightweight wrapper for the Simple DirectMedia Layer 2.0 Library's gamepad implementation.

#### Discussion

As gamepad controllers generate events they are output in the form  event\_type   *value* . Possible events are:

 axis\_left\_x

 axis\_left\_y

 axis\_right\_x

 axis\_right\_y

 axis\_left\_trigger

 axis\_right\_trigger

 button\_a

 button\_b

 button\_x

 button\_y

 button\_dpad\_up

 button\_dpad\_down

 button\_dpad\_left

 button\_dpad\_right

 button\_left\_shoulder

 button\_right\_shoulder

 button\_left\_stick

 button\_right\_stick

 button\_start

 button\_back

 button\_guide

 button\_misc1

 button\_touchpad

 sensor\_gyro

 sensor\_accel

 touchpad\_up

 touchpad\_down

 touchpad\_motion

## Arguments

None.

## Attributes

### interval[float]

The global polling interval sets the rate at which the incoming gamepad controller event queue is being serviced. The default is 5 milliseconds. Changing this attribute will change it for all gamepad controller objects in all patches.

### rawdata[int]

Output raw SDL joystick data, rather than gamepad mapped data. This can be helpful for generating a device mapping, or diagnosing gamepad device mapping issues. Changing this attribute will change it for all gamepad controller objects in all patches.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### addmapping

Add SDL controller mapping from a symbol. You can find example controller mappings from the excellent
[SDL\_GameControllerDB](https://github.com/mdqinc/SDL_GameControllerDB)
community database.

Arguments:

- mapping\_text
  [symbol]

### addmappingfile

Add SDL controller mappings from a file such as gamecontrollerdb.txt from the excellent
[SDL\_GameControllerDB](https://github.com/mdqinc/SDL_GameControllerDB)
community database. If you place a file named "gamecontrollerdb.txt" in the Max search path, gamepad will load the mapping file prior initializing SDL with the first gamepad instance created. This can work better for certain controllers than loading the mapping file after creation.

Arguments:

- filename
  [symbol]

### senddevice

The word  senddevice  followed by a number indicating the logical device ID will send the following message on to that device. If the device index is negative, the following message is sent to all devices. Possible messages are  led ,  rumble , and  rumbletriggers .

The  led  message is followed by  *red* ,  *green*  and  *blue*  values in the range 0-1.
The  rumble  message is followed by  *low*   *high*  and  *duration*  values, where  *low*  represents the low frequency rumble amount in the range 0-1,  *high*  represents the high frequency rumble amount in the range 0-1, and  *duration*  is in milliseconds.
The  rumbletriggers  message is followed by  *left*   *right*  and  *duration*  values, where  *left*  represents the left trigger rumble amount in the range 0-1,  *right*  represents toe right trigger rumble amount in the range 0-1, and  *duration*  is in milliseconds.

Arguments:

- Device ID
  [int]
- Message
  [symbol]
- Value
  [list]

### sendinstance

The  sendinstance  message has the same functionality of the  senddevice  message, but referenced using the unique gamepad instance id rather than the logical device ID.

Arguments:

- Instance ID
  [int]
- Message
  [symbol]
- Value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [hi](https://docs.cycling74.com/reference/hi) | Human Interface device input (legacy) |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
