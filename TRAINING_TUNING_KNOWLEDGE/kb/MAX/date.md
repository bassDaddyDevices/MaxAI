---
type: max
name: "date"
summary: "Report current date and time"
signal: false
url: "https://docs.cycling74.com/reference/date/"
package: "Max"
see_also: ["clocker", "timer"]
---
# date

Report current date and time

## Description

Reports the current date, time, or the number of 1/60th-second ticks since startup.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### date

Outputs the current date as a list (month/day/year) out the left outlet.

### ticks

Outputs the current value of Ticks (the number of 1/60ths of a second since system startup) out the right outlet.

### time

Outputs the current time as a list (military hours/minutes/seconds) out the middle outlet.

## Output

### int

Out right outlet: When the  ticks  message is received, [date](https://docs.cycling74.com/reference/date) sends the current value of Ticks.

### list

Out left outlet: When the  date  message is received, [date](https://docs.cycling74.com/reference/date) sends the current date as a list.

### list

Out middle outlet: When the  time  message is received, [date](https://docs.cycling74.com/reference/date) sends the current time as a list.

## See Also

| Name | Description |
| --- | --- |
| [clocker](https://docs.cycling74.com/reference/clocker) | Report elapsed time, at regular intervals |
| [timer](https://docs.cycling74.com/reference/timer) | Report elapsed time between two events |
