#!/bin/sh

bin=./emulator/bin/Debug/net9.0
roms=/workspaces/Justin-Credible-space-invaders-emulator/roms
dotnet $bin/emulator.dll run $roms
