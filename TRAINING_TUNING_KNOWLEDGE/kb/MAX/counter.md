---
type: max
name: "counter"
summary: "Keep count based on bang messages"
signal: false
url: "https://docs.cycling74.com/reference/counter/"
package: "Max"
see_also: ["tempo"]
---
# counter

Keep count based on bang messages

## Description

Outputs the current count of bang message constrained to a specified range. Can be set to count up, down, or up-then-down.

## Arguments

### options[int] optional

If there is only one argument, it sets an initial maximum count value for [counter](https://docs.cycling74.com/reference/counter). If there are two arguments, the first number sets an initial minimum value, and the second number sets an initial maximum value. If there are three arguments, the first number specifies the direction of the count, the second number is the minimum, and the third number is the maximum. If there are no arguments, the direction is up, the minimum is 0, and the maximum is 2,147,483,647 (the largest possible 32-bit signed integer).

## Attributes

### carryflag[int]: 0

Sets the type of data output from the third outlet (numbers or bangs).

Possible values:

0 = 'Numeric'

1 = 'Bang'

### compatmode[int]: 0

Provides compatibility when importing patches created with versions 3.x and earlier of Max. When "Ancient" is selected, sending an int to inlets 3 and 4 will change the min count instead of just resetting it temporarily (which causes the fourth inlet to behave exactly as thought the  min  message were sent to the [counter](https://docs.cycling74.com/reference/counter) object).

Possible values:

0 = 'Current'

1 = 'Ancient'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the current count of the  bang  messages received in the left inlet.

In left-middle inlet: Changes the direction of the count.

In middle inlet: Resets the count to its specified minimum value, which will be sent out the next time a  bang  is received in the left inlet.

In right-middle inlet: Resets the count to its specified minimum value, and sends out that value immediately.

In right inlet: Resets the count to its specified maximum value, which is sent out immediately.

### int

In left inlet: Same effect as  bang .

In left-middle inlet: Sets the direction of the count.  0  causes [counter](https://docs.cycling74.com/reference/counter) to count up,  1  causes it to count down, and  2  causes it to count up and down.

In middle inlet: The number sets the counter to a new value, to be sent out the next time a  bang  is received in the left inlet. If the number is less than the current minimum value, the minimum will be reset to that number. If the number is greater than the current maximum value, the counter will be set to that number, but the maximum value actually remains the same and the minimum is set equal to the maximum.

In middle-right inlet: The number sets the counter to a new value and sends it out immediately. If the number is less than the current minimum value, the minimum will be reset to that number. If the number is greater than the current maximum value, the number is sent out, but the maximum value actually remains the same and the minimum is set equal to the maximum.

In right inlet: Resets the maximum value sent out by [counter](https://docs.cycling74.com/reference/counter). If the number is less than the current minimum, the maximum is equal to the minimum. If the minimum is subsequently changed to a value below the maximum value you input, the [counter](https://docs.cycling74.com/reference/counter) objects retains the correct maximum value it received through this inlet. Unlike a  bang  message, an int in this inlet does not cause the [counter](https://docs.cycling74.com/reference/counter) object to output anything.

Arguments:

- input
  [int]

### float

In all other inlets: Converted to  int .

Arguments:

- input
  [float]

### carrybang

In left inlet: Causes [counter](https://docs.cycling74.com/reference/counter) to send a  bang  out the right-middle outlet when the count is going upward and reaches its maximum limit, and causes [counter](https://docs.cycling74.com/reference/counter) to send a  bang  out the left-middle outlet when the count is going downward and reaches its minimum limit. (By default, counter sends out the number  1  in those situations, instead of  bang .) The state of the  carrybang  message is saved along with the patcher it is used in.

### carryint

In left inlet: Undoes the effect of a previously received  carrybang  message. Resets the counter to send the numbers  1  and  0  out the left-middle and right-middle outlets (instead of  bang ) to signal when the counter reaches and leaves its minimum and maximum values. The state of the  carryint  message is saved along with the patcher it is used in.

### dec

In left inlet: Decrements the counter (downward) and sends out the new value, regardless of the direction in which the object has been set to count ordinarily.

### down

In left inlet: Sets the [counter](https://docs.cycling74.com/reference/counter) to count in a downward direction.

### flags

The  flags  message followed by two numbers will set the Underflow/Carry Mode and set the Minimum-Mode resetting capability. If the first number is 0, [counter](https://docs.cycling74.com/reference/counter) will output a 1 when it hits the maximum or else output a 0. If the first number is 1, [counter](https://docs.cycling74.com/reference/counter) will output a  bang  when it hits the maximum. If the second number is 0, an integer in inlets 3 and 4 will override the minimum count temporarily. If the second number is 1, an integer in inlets 3 and 4 will change the minimum count permanently.

Arguments:

- carry-mode
  [int]
- minimum-mode
  [int]

### goto

In left inlet: Same effect as  set .

Arguments:

- input
  [int]

### inc

In left inlet: Increments the counter (upward) and sends out the new value, regardless of the direction in which the object has been set to count ordinarily.

### jam

In left inlet: The word  jam , followed by a number, sets the counter to that number and sends the number out immediately. If the number is outside the minimum and maximum count range, this message is ignored.

Arguments:

- input
  [int]

### max

In left inlet: The word  max  followed by a number, resets the maximum value of [counter](https://docs.cycling74.com/reference/counter) to that number. If the number is less than the current minimum value, the maximum is considered to be equal to the minimum, although the actual maximum value you set is stored inside the [counter](https://docs.cycling74.com/reference/counter) object.

Arguments:

- maximum
  [int]

### min

In left inlet: The word  min  followed by a number, resets the minimum value of [counter](https://docs.cycling74.com/reference/counter) to that number, and causes the [counter](https://docs.cycling74.com/reference/counter) object to set itself to that number and output immediately. If the number is greater than the current maximum value, the minimum is set equal to the maximum.

Arguments:

- minimum
  [int]

### next

In left inlet: Same as  bang .

### set

In left inlet: The word  set , followed by a number, sets the counter to that number, which will be sent out the next time a  bang  is received in the left inlet.

Arguments:

- input
  [int]

### setmin

In left inlet: The word  setmin , followed by a number, sets the [counter](https://docs.cycling74.com/reference/counter) object's minimum count without affecting its current count value or causing any output.

Arguments:

- minimum
  [int]

### state

The message  state  will cause the [counter](https://docs.cycling74.com/reference/counter) object to report its current state to the Max Console.

### up

In left inlet: Sets the [counter](https://docs.cycling74.com/reference/counter) to count in an upward direction.

### updown

In left inlet: Sets the [counter](https://docs.cycling74.com/reference/counter) object's direction so that it counts upward until it reaches the specified maximum, then counts down until it reaches the specified minimum, then up, then down, and so on.

## Output

### bang

Out left-middle outlet: If a  carrybang  message has been received in the left inlet, then when the count is moving downward and reaches the minimum limit, a  bang  is sent out (instead of the number  1  which is sent out by default). When the count leaves the minimum limit, nothing is sent out. This only works in mode 1 (count down) or mode 2 (count up and down).

Out right-middle outlet: If a  carrybang  message has been received in the left inlet, then when the count is moving upward and reaches the maximum limit, a  bang  is sent out (instead of the number  1  which is sent out by default). When the count leaves the maximum limit, nothing is sent out. This only works in mode 0 (count up) or mode 2 (count up and down).

### int

Out left outlet: When  bang ,  next ,  inc ,  dec , or a number is received in the left inlet, the current count is sent out, within the minimum and maximum limits specified. If the direction of the count is both up and down, the count is folded back in the other direction when it reaches the specified limits. If the count is in only one direction, up or down, the count is wrapped around to the opposite extreme when it reaches its limit.

When the direction is up, or up and down, [counter](https://docs.cycling74.com/reference/counter) begins counting from the specified minimum value. When the direction is down, [counter](https://docs.cycling74.com/reference/counter) begins from the maximum value.

Out left-middle outlet: When the count is moving downward and reaches the minimum limit, the number  1  is sent out. When the count leaves the minimum limit,  0  is sent out. This only works in mode 1 (count down) or mode 2 (count up and down).

Out right-middle outlet: When the count is moving upward and reaches the maximum limit, the number  1  is sent out. When the count leaves the maximum limit,  0  is sent out. This only works in mode 0 (count up) or mode 2 (count up and down).

Out right outlet: An additional count is kept of the number of times [counter](https://docs.cycling74.com/reference/counter) reaches its maximum limit. Each time the maximum is reached, that count is sent out.

## See Also

| Name | Description |
| --- | --- |
| [tempo](https://docs.cycling74.com/reference/tempo) | Output numbers at a metronomic tempo |
