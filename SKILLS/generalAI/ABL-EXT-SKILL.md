---
name: ableton-extensions
description: writting ableton extensions
metadata:
  author: Chris Connelly
  version: "1.0.0"
  category: Coding
  keywords: "ableton extensions"
---

---
name: ableton-extensions
description: >
  Expert guidance for building Ableton Live Extensions using the Extensions SDK (v1.0.0-beta, Live 12.4.5+).
  Extensions are discrete, JavaScript/TypeScript tools that interact with Live's Set structure — tracks, clips, 
  MIDI, devices, and tempo — accessed via right-click context menu. Use this skill whenever the user asks to 
  build an Ableton Extension, work with the Extensions SDK, scaffold an extension project, understand the Live 
  Extensions API, package or distribute a .ablx file, or asks how Extensions differ from Max for Live devices. 
  Trigger on phrases like "ableton extension", "extensions sdk", ".ablx", "npm start live", or any reference 
  to building custom Live tools with JavaScript/TypeScript.
---
 
# Ableton Extensions SDK
 
**Status: Public Beta — SDK v1.0.0-beta.0, Live 12.4.5 beta only**
Released June 2, 2026. The API surface is actively evolving.
 
## First step: read the local reference
 
Chris's local SDK lives at:
```
/Volumes/DEV/Ableton Projects/extensions-sdk-1.0.0-beta.0
```
 
**Before writing extension code, always read the local reference:**
```bash
# See what's in the SDK
ls "/Volumes/DEV/Ableton Projects/extensions-sdk-1.0.0-beta.0"
 
# Read the docs
cat "/Volumes/DEV/Ableton Projects/extensions-sdk-1.0.0-beta.0/docs/..." # adjust path
 
# Look at bundled examples
ls "/Volumes/DEV/Ableton Projects/extensions-sdk-1.0.0-beta.0/examples"
```
 
The local SDK has the canonical API reference, TypeScript type definitions, and working examples. Everything below is based on research + community examples; the local SDK overrides anything here.
 
Community examples (also useful to cross-reference):
- https://github.com/federico-pepe/ableton-live-extensions
---
 
## What Extensions Are (and aren't)
 
**Do:** Discrete, one-shot tools. Run → do a thing → exit. They manipulate Set structure.
- Rename/color/sort tracks and clips
- Generate or transform MIDI content
- Import audio, manage samples
- Batch operations on anything in the Set
- Show modal dialogs and webviews with custom UI
- Connect to external services via Node.js/npm
- Render audio from Arrangement
**Don't:**
- Real-time audio processing (not a plugin replacement)
- Real-time MIDI processing during playback
- Signal chain / device chain insertion
- Continuous background processes
- Hardware control surface integration
- Automated triggering (no hooks for on-startup, on-transport, etc.)
**vs. Max for Live:** M4L lives on tracks and runs in the signal chain. Extensions live outside the signal chain and operate on Set *structure*. Think of M4L for sound design, instruments, and live modulation — and Extensions for workflow, organization, and data transformation.
 
---
 
## Prerequisites
 
- Ableton Live Suite 12.4.5+ beta (Suite required, same as M4L)
- Node.js (install from nodejs.org, not Homebrew — fewer path issues)
- A code editor (VS Code recommended)
---
 
## Project Structure
 
```
my-extension/
├── package.json           # npm config + SDK dep + build scripts
├── manifest.json          # Extension metadata (name, version, scopes, actions)
├── src/
│   └── extension.ts       # Main extension entry point
├── dist/                  # Compiled output (generated)
└── tsconfig.json          # TypeScript config
```
 
The manifest declares which Live objects the extension applies to (its "scopes") and which actions it registers on the context menu.
 
Packaged distribution format: `.ablx` file (installed via drag-drop in Live's Settings > Extensions).
 
---
 
## Development Workflow
 
### Scaffold a new extension
```bash
# From inside the SDK directory
npm run create-extension
# Wizard asks for name, description, scopes
```
 
### Run in development mode
Enable **Developer Mode** in Live's Settings > Extensions first. Then:
```bash
cd my-extension
npm start -- --live "/Applications/Ableton Live 12 Beta.app"
```
The extension host provides hot-reload — changes apply without restarting Live. Your extension appears in Live's right-click menu while the npm process is running.
 
### Build and test
```bash
npm run build
```
 
### Package for distribution
```bash
npm run package
# Outputs my-extension-x.y.z.ablx
```
**Note:** To test packaged extensions, turn off Developer Mode and kill any running npm processes. The two modes are mutually exclusive.
 
---
 
## The manifest.json
 
This is the critical file that tells Live what the extension is and where it appears. Read the local SDK for the exact schema — the key fields are:
- `name` — Display name in the context menu
- `version` — semver
- `description`
- `scopes` — Which Live objects this extension can act on (determines where it shows in the menu)
- `actions` — The actual menu items with handlers
See `references/api-surface.md` for scope names.
 
---
 
## extension.ts structure
 
The entry point exports a function (or object) that wires up action handlers. The exact import path comes from the SDK package — check `node_modules/@ableton/...` after `npm install`, or look at the local SDK examples.
 
General pattern (verify exact imports with local SDK):
```typescript
import { /* SDK types */ } from '@ableton/extensions'; // check exact package name
 
export default {
  // Each key matches an action ID declared in manifest.json
  myAction: async (context) => {
    // context gives you access to the selected Live object
    // (e.g., the track or clip that was right-clicked)
    const { live, selection } = context;
    
    // Read/write the Set
    const tracks = await live.tracks.getAll();
    
    // Show a dialog
    const result = await live.dialog.show({ /* options */ });
    
    // Apply changes...
  }
};
```
 
For actual type signatures, read the `.d.ts` files in the SDK. The TypeScript types are the ground truth.
 
---
 
## UI Patterns
 
Extensions can open dialogs that block Live until dismissed (modal) or show persistent webviews.
 
**Quick confirm/input dialogs** — simpler, handled by the SDK directly
**Webviews** — full HTML/CSS/JS UI, useful for complex parameter UIs or interactive tools
 
Webviews are standard web tech — vanilla HTML/CSS/JS or any bundled frontend. Don't use frameworks unless you need to; the SDK is already wiring up a webview, so keep it light.
 
---
 
## API Surface (what you can touch)
 
See `references/api-surface.md` for the full scope list. High-level:
 
**Confirmed available:**
- Tracks (audio + MIDI) — read/write name, color, mute, solo, arm
- Clips (audio + MIDI) — read/write content, name, color, length
- MIDI notes — read/write pitch, velocity, position, duration
- Devices — read/write parameters
- Scenes — read/write name, color
- Tempo / time signature
- Clip slots
- Simpler + DrumRack (instrument access)
- Sample references
- Arrangement rendering (export audio)
- File import
**Not accessible (beta v1):**
- Tuning Systems
- No on-launch / on-event hooks
- No hardware integration
- No real-time signal access
---
 
## Gotchas and Beta Notes
 
1. **Developer Mode and packaged extensions are mutually exclusive.** If npm is still running, installed .ablx extensions won't appear.
2. **Undo support**: Check the SDK docs — undo integration for extension actions may be limited in this beta.
3. **This SDK dropped June 2, 2026.** The API will change. Treat the local SDK reference as canonical; treat anything online (including this skill) as approximate.
4. **WebAssembly works.** Community devs have shipped Wasm-based processing (PaulStretch, Basic Pitch). Full Node.js + npm ecosystem is available.
5. **No M4L bridge yet.** Extensions and M4L can't directly call each other in this beta, though you can bundle them in the same product.
6. **Scopes are strict.** If your extension registers for `MidiClip` scope, it only shows in the context menu when right-clicking a MIDI clip. Design your scopes to match the actual context.
---
 
## Common Extension Patterns
 
### Batch operation on all tracks
```typescript
const tracks = await live.tracks.getAll();
for (const track of tracks) {
  // read track.name, track.color, etc.
}
```
 
### Get selected / right-clicked object
Context is passed to your action handler. The `selection` (or equivalent) is whatever the user right-clicked.
 
### Show a progress dialog for long operations
Long batch operations should show progress. Check the SDK for the dialog API signature.
 
### Reading + writing MIDI notes
Get a MidiClip reference → read notes → transform → write back. This is a fundamental pattern; check the community examples for note pitch/velocity/time representation.
 
---
 
## Packaging and Distribution
 
`.ablx` files are self-contained. Users install them by dragging into Live's Settings > Extensions panel, or via a file dialog in that same panel.
 
To get your extension onto the `.ablx` format:
```bash
npm run package
```
 
There's no Ableton-managed store yet (beta). Distribution is community-driven: Discord, GitHub, direct sharing.
 
---
 
## Reading the Local Reference
 
The local SDK at `/Volumes/DEV/Ableton Projects/extensions-sdk-1.0.0-beta.0` is the ground truth for:
- Exact TypeScript type definitions (`*.d.ts`)
- Manifest schema (look for a JSON schema file or docs)
- Full list of available properties per scope
- Working example extensions
- Changelog / known issues
When in doubt about any API detail, read the local files first.



# API Surface Reference
 
> **BETA CAVEAT:** This is derived from community examples and press coverage of SDK v1.0.0-beta.0 (June 2026).
> Verify all type signatures against the local SDK at:
> `/Volumes/DEV/Ableton Projects/extensions-sdk-1.0.0-beta.0`
 
---
 
## Scope Names
 
These are the values that go in `manifest.json` under `scopes` to declare where an extension shows up in the right-click menu:
 
| Scope | Right-click target |
|---|---|
| `AudioClip` | An audio clip in Session or Arrangement |
| `MidiClip` | A MIDI clip in Session or Arrangement |
| `AudioTrack` | An audio track header |
| `MidiTrack` | A MIDI track header |
| `ClipSlot` | A clip slot in Session View |
| `Scene` | A scene row in Session View |
| `Simpler` | A Simpler device |
| `Sample` | A sample reference |
| `DrumRack` | A Drum Rack device |
 
Some extensions register multiple scopes (e.g., `AudioClip` + `MidiClip` for clip-level operations that work on both).
 
---
 
## Live Object Properties (confirmed from community examples)
 
These are properties observed in working community extensions. The exact property names should be verified against the TypeScript types in the local SDK.
 
### Track (AudioTrack / MidiTrack)
- `name` — string, read/write
- `color` — color value, read/write
- `mute` — boolean, read/write
- `solo` — boolean, read/write
- `arm` — boolean, read/write (MidiTrack)
- `clips` — collection of clips
- `devices` — collection of devices
### Clip (AudioClip / MidiClip)
- `name` — string, read/write
- `color` — color value, read/write
- `length` — duration in beats
### MidiClip (additional)
- `notes` — collection of MIDI notes (pitch, velocity, startTime, duration)
- MIDI note manipulation is a core capability
### AudioClip
- Sample import / warp operations
- Audio rendering
### Scene
- `name` — string, read/write
- `color` — color value, read/write
- `tempo` — optional scene tempo
### Set-level access
- `live.tracks.getAll()` — all tracks
- `live.tempo` — current BPM (read/write)
- `live.arrangement` — arrangement-level access
---
 
## Dialog / UI API (approximate — verify locally)
 
### Modal dialog
Blocks Live until user responds. Used for parameter input before running an action.
 
### Webview
Full HTML webview for complex UIs. Bidirectional communication between the webview and the extension's Node.js context.
 
### Progress dialog
For long-running operations — shows progress bar to user.
 
---
 
## Node.js and npm
 
Full Node.js access means:
- Any npm package is usable
- HTTP requests, file system, child processes all work
- WebAssembly is supported (community devs have used it for audio processing)
- External APIs (web services, databases) are all reachable
---
 
## What to verify in the local SDK
 
1. `package.json` in the local SDK — exact package name to import from
2. TypeScript definitions (`*.d.ts`) — the ground truth for all method signatures
3. The `examples/` folder — working patterns for MIDI manipulation, dialog usage, webviews
4. `docs/` or `README.md` — manifest schema and changelog