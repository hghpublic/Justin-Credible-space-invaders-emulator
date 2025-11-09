#!/bin/sh

git clean -dxf

dotnet build

src=/usr/lib/aarch64-linux-gnu/
dst=./emulator/bin/Debug/net9.0/
cp $src/libSDL2-2.0.so.0 $dst/libSDL2.so
cp $src/libSDL2_mixer-2.0.so.0 $dst/libSDL2_mixer.so
