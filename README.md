# BeatSaber score fixer

After installing BeatSaber mods I found out that my local highscores for custom levels were gone.
It turns out that installing SongCore changed custom level IDs to full hashes. So here's a script that fixes local scoreboards.

## Usage
1. Copy `PlayerData.dat` and `SongHashData.dat` from `C:\Users\<username>\AppData\LocalLow\Hyperbolic Magnetism\Beat Saber` to this folder.
1. Change extensions from `.dat` to `.json`
1. Run the script
1. Copy newly generated `PlayerData.dat` back to `C:\Users\<username>\AppData\LocalLow\Hyperbolic Magnetism\Beat Saber`
1. Done

## License
This project is licensed under the [MIT license](LICENSE).
