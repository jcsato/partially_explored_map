# Partially Explored Map

A mod for the game Battle Brothers ([Steam](https://store.steampowered.com/app/365360/Battle_Brothers/), [GOG](https://www.gog.com/game/battle_brothers), [Developer Site](http://battlebrothersgame.com/buy-battle-brothers/)).

## Table of contents

-   [Features](#features)
-   [Requirements](#requirements)
-   [Installation](#installation)
-   [Uninstallation](#uninstallation)
-   [Compatibility](#compatibility)
-   [Building](#building)
-   [Acknowledgements](#acknowledgements)

## Features

Adds a new "Partially Explored Map" exploration difficulty to the game that reveals all settlements of the nearest faction at campaign start, but nothing else. (If starting in the south, all city states are revealed). This is perhaps most relevant for origins that start with hostile relations to a faction, such as Deserters, where the first few days of the campaign are very swingy on unexplored.

<img src="./readme_assets/ss1.jpg" width="1200">
<img src="./readme_assets/ss2.jpg" width="1200">

## Requirements

1) [Modding Script Hooks](https://www.nexusmods.com/battlebrothers/mods/42) (v20 or later)

## Installation

1) Download the mod from the [releases page](https://github.com/jcsato/partially_explored_map/releases/latest)
2) Without extracting, put the `partially_explored_map_*.zip` file in your game's data directory
    1) For Steam installations, this is typically: `C:\Program Files (x86)\Steam\steamapps\common\Battle Brothers\data`
    2) For GOG installations, this is typically: `C:\Program Files (x86)\GOG Galaxy\Games\Battle Brothers\data`

## Uninstallation

1) Remove the relevant `partially_explored_map_*.zip` file from your game's data directory

## Compatibility

This should be fully save game compatible, i.e. you _should_ be safe to remove the mod at any time.

There's a decent chance for incompatibilities with other mods that modify the new campaign menus, as some things (e.g. campaign settings) aren't structured in a way that readily allows composing different hooks. Please reach out if you encounter any such issues.

## Building

To build, run the appropriate `build.bat` script. This will automatically compile and zip up the mod and put it in the `dist/` directory, as well as print out compile errors if there are any. The zip behavior requires Powershell / .NET to work - no reason you couldn't sub in 7-zip or another compression utility if you know how, though.

Note that the build script references the modkit directory, so you'll need to edit it to point to that before you can use it. In general, the modkit doesn't play super nicely with spaces in path names, and I'm anything but a batch expert - if you run into issues, try to run things from a directory that doesn't include spaces in its path.

After building, you can easily install the mod with the appropriate `install.bat` script. This will take any existing versions of the mod already in your data directory, append a timestamp to the filename, and move them to an `old_versions/` directory in the mod folder; then it will take the built `.zip` in `dist/` and move it to the data directory.

Note that the install script references your data directory, so you'll need to edit it to point to that before you can use it.
