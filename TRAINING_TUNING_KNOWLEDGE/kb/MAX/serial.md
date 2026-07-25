---
type: max
name: "serial"
summary: "Send and receive from a serial port"
signal: false
url: "https://docs.cycling74.com/reference/serial/"
package: "Max"
see_also: ["match", "spell", "vdp"]
---
# serial

Send and receive from a serial port

## Arguments

### port[symbol] optional

Specifies the serial port to be used by the [serial](https://docs.cycling74.com/reference/serial) object. If alphabetic shortcuts (a-z) are used,  a  specifies the first logical serial port in the computer, and  b -  z  are used to specify additional ports.

### portname[symbol] optional

If actual portnames are used, the symbol is the name given by the Operating System to your port. The  print  to the [serial](https://docs.cycling74.com/reference/serial) object can be used to create a list of available portnames and alphabetic shortcuts. If the port chosen is currently in use or unavailable when the [serial](https://docs.cycling74.com/reference/serial) object is instantiated, an error message will be displayed and the object will not function. If no port is specified, the default port is  a .

### rate[int] optional

An optional argument may be used after the port name or alphabetic shortcut to specify the baud rate of the serial port (the default rate is 4800 baud). Any value is allowable (although not all ports can be set to all baud rates). Some common rates are 300, 600, 1200, 1800, 2400, 3600, 7200, 9600, 19200, 38400, 57600 and 115200.

### data[int] optional

After the baud rate, the next arguments specifies the number of data bits for the serial port (the default is 8 data bits). Other possible values are 5, 6 and 7.

### stop[int] optional

The next argument specifies the number of stop bits for the serial port. The default is 1. Other possible values are 1.5 (Windows only) and 2.

### parity[int or symbol] optional

The next argument specifies the parity for the serial port (the default is no parity, specified by  0  or  no ). Other possible values are  1  (odd), and  2  (even).

## Attributes

### asyncread[int]: 0

By default ( 0  = Off), the object only reads from the serial port when a  bang  arrives, or if poll is enabled. When enabled ( 1  = On), reading is performed regularly in the background, and a  bang  message (or polling) will cause the asynchronously read bytes to be output.

### autoopen[int]

Toggles automatically opening the serial port.

### baud[int]

Specifies the baud rate of the serial port (the default rate is 4800 baud). Any value is allowable (although not all ports can be set to all baud rates). Some common rates are 300, 600, 1200, 1800, 2400, 3600, 7200, 9600, 19200, 38400, 57600 and 115200.

### break\_duration[int]: 1000

Specifies the duration of a break signal in microseconds (the default duration is 1ms, or 1000us). Some applications, such as DMX, require break durations in a particular range when marking frames.

### bufsize[int]

Sets the input buffer size used by the [serial](https://docs.cycling74.com/reference/serial) object. The default buffer size is 2048.

### chunk[int]

Sets the data chunk size (data list length) for output.

### databits[int]

Sets the number of data bits (acceptable values are  5 ,  6 ,  7 , or  8 ).

### defer[int]: 1

Defer output of messages to the lower priority main thread. Most applicable when using Overdrive.

### drain[int]

(Mac only) Toggles drain enable. When enabled, communication waits until all data has been transmitted to the terminal when writing. The default value is 0 (disabled).

### dtr[int]: 2

Enables or disables the DTR (data terminal ready) function of the serial port used by the [serial](https://docs.cycling74.com/reference/serial) object.

Possible values:

0 = 'off'
(
Disable DTR
)
1 = 'on'
(
Enable DTR
)
2 = 'default'
(
Use the connection default (do not change)
)

### parity[int]

Sets the parity for the port. Possible values are  0  (none),  1  (odd) and  2  (even).

### poll[float]: 0.

If non-zero, the value of this attribute determines the rate in milliseconds at which to poll for data. You may use this instead of connecting a [metro](https://docs.cycling74.com/reference/metro) to bang the [serial](https://docs.cycling74.com/reference/serial) object at a regular interval. When zero, the polling is disabled.

### postbreak\_duration[int]: 0

Specify the duration of the post-break 'mark' (also known as Mark After Break, or MAB) in microseconds. The default MAB is 0us (that is, there is no MAB). Some applications, such as DMX, require the MAB when marking the beginning of frames.

### rts[int]: 2

Enables or disables the RTS (Request To Send) line of the serial port used by the [serial](https://docs.cycling74.com/reference/serial) object. Note that this does not implement flow control.

Possible values:

0 = 'off'
(
Disable RTS
)
1 = 'on'
(
Enable RTS
)
2 = 'default'
(
Use the connection default (do not change)
)

### serport[int]

Used by the object Inspector only. Users should use the  port  message.

### stopbits[int]

Sets the number of stop bits used when communicating with the serial port. Possible values are  1  (1 stop bit) or  2  (2 stop bits). On Windows, the values  15  and  1.5  can be used for 1.5 stop bits (not supported on macOS).

### xonxoff[int]: 2

Enables Xon/Xoff serial flow control.

Possible values:

0 = 'off'
(
Disable Xon/Xoff flow control.
)
1 = 'on'
(
Enable Xon/Xoff flow control.
)
2 = 'default'
(
Use the connection default (do not change)
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends each character received on the serial port since the last  bang  message out the [serial](https://docs.cycling74.com/reference/serial) object's left outlet as an integer in the order that the characters were received. Before output data is sent, the message  read , followed by a number specifying the number of bytes received is sent out the right outlet of the [serial](https://docs.cycling74.com/reference/serial) object.

### int

Sends the number out the serial port accessed by the [serial](https://docs.cycling74.com/reference/serial) object. Numbers outside the range 0-255 are wrapped to that range using a modulo operator. After the data is sent, the message  write , followed by a number specifying the number of bytes sent is sent out the right outlet of the [serial](https://docs.cycling74.com/reference/serial) object.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### list

Sends each number in the list out the serial port, in order. Numbers outside the range 0-255 are wrapped to that range using a modulo operator. After the data is sent, the message  write , followed by a number specifying the number of bytes sent is sent out the right outlet of the [serial](https://docs.cycling74.com/reference/serial) object.

Arguments:

- input
  [list]

### break

Sends a break command to the serial port used by the [serial](https://docs.cycling74.com/reference/serial) object. After the break has completed, the message  break  is sent out the object's right outlet.

### close

Closes an open serial connection, permitting use of the serial port by other applications.

### getport

Sends the name or shortcut of the currently open serial port out the [serial](https://docs.cycling74.com/reference/serial) object's right outlet, prepended by the word  port .

### open

Opens a new serial connection.

### port

The word port, followed by a symbol, specifies the serial port to be used by the object. If alphabetic shortcuts are used, a specifies the first logical serial port in the computer. b - z specify additional ports. If actual portnames are used, the symbol is the name given by the operating system to your port. See the  print  message for a way to list available portnames and alphabetic shortcuts. If the port chosen is currently in use or unavailable when the port message is sent, an error message will be displayed and the object will revert to its previously chosen port, or won't function if there was none.

Arguments:

- port
  [list]

### print

Sends a list of available serial ports to the Max Console, along with their alphabetic shortcuts. The message  port [portname] [portname] ... is also sent from the object's right outlet, with a list of available ports.

### refresh

Refreshes the list of known/available serial ports. See the  print  message for additional information.

### reset

(Mac only) Resets the currently open serial port using the Basic Stamp initialization sequence.

## Output

### (serial output)

When a number or list is received in its inlet, [serial](https://docs.cycling74.com/reference/serial) sends the data out the specified serial port at the current baud rate.

### int

When [serial](https://docs.cycling74.com/reference/serial) receives a  bang  message and characters have been received in the serial port, the received characters are sent as numbers in the order they were received.

### list

When [serial](https://docs.cycling74.com/reference/serial) receives a  bang  message, characters have been received in the serial port, and chunking is enabled, the received characters are sent as a list in the order the characters were received. The length of the list is determined by the argument to the  chunk  message (see the message listing for  chunk  for more information).

Out right outlet: Reports error and status messages.

## See Also

| Name | Description |
| --- | --- |
| [match](https://docs.cycling74.com/reference/match) | Watch for a message match, then output the message |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [vdp](https://docs.cycling74.com/reference/vdp) | Control a videodisk player through a serial port |
