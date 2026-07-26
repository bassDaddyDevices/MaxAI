---
type: cookbook
name: "Route signal for audio and control data"
summary: "The way audio Max compiles audio signal networks is, whenever audio is turned on, MSP outlets send out the message ‘signal’."
chapter: "MSP"
keywords: ["route", "button", "ezdac~", "cycle~", "print", "live.gain~", "t", "routepass"]
objects: ["cycle~", "ezdac~", "live.gain~", "print", "route", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/signal_ControlRateRouter.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/signal_ControlRateRouter.png"
---

# Route signal for audio and control data

The way audio Max compiles audio signal networks is, whenever audio is turned on, MSP outlets send out the message ‘signal’. (In other words, that’s how Max knows how MSP objects are connected to each other, and thus knows how to calculate the audio signal network.) The [route signal] object detects the selector ‘signal’ and sends a ‘bang’ out its left outlet in response. The [**t** signal] object converts that ‘bang’ back into the message ‘signal’. Also, instead of the [**route** signal] and [**t** signal] combination, you could simply use [**routepass** signal].

## Objects used

`print`, `live.gain~`, `ezdac~`, `cycle~`, `t`, `route`

*Patch contains 7 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/signal_ControlRateRouter.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/signal_ControlRateRouter.png`
