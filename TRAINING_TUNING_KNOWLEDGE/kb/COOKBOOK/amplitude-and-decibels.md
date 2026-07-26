---
type: cookbook
name: "Amplitude and decibels"
summary: "A linear fade-in or fade-out of audio is okay for quick changes that take place in a fraction of a second, but for slower fades one should generally take into a"
chapter: "MSP"
keywords: ["dbtoa", "amplitude", "decibel"]
objects: ["*~", "+", "/", "0.", "ctlin", "dbtoa", "expr", "ezdac~", "gate", "noise~", "select", "slider", "umenu", "zmap"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/amplitude_decibels.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/amplitude_decibels.png"
---

# Amplitude and decibels

A linear fade-in or fade-out of audio is okay for quick changes that take place in a fraction of a second, but for slower fades one should generally take into account that our subjective sense of loudness more closely conforms to an exponential change in amplitude. This patch allows you to use the **slider** (or the mod wheel from a MIDI controller) to control the amplitude of white noise in one of three different ways: with straight linear mapping, exponentially (with an exponent of 4), or using a range of 60 decibels. A linear fade subjectively seems to have too drastic an effect with low slider positions, and too slight an effect at higher slider positions. The exponential curve is closer to our sense of loudness, but at lower slider positions the amplitude is too low. The **dbtoa** object allows us to map the input to a desired range of decibels (0 to -60 is suitable for most listening environments) and then convert that to amplitude. The linear change in decibels produces an exponential change in amplitude that is similar to our perception of loudness, so a linear change in the input gives a pretty linear sense of change of loudness.

## Objects used

`ezdac~`, `+`, `umenu`, `gate`, `noise~`, `*~`, `dbtoa`, `zmap`, `0.`, `select`, `expr`, `/`, `slider`, `ctlin`

*Patch contains 19 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/amplitude_decibels.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/amplitude_decibels.png`
