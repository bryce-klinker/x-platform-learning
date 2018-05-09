#!/usr/bin/env bash
set -e

# Start emulator
$ANDROID_HOME/emulator/emulator @e2e-emulator &

# Grab the pid for the emulator process
emulator_pid=$!

# Wait for the emulator to be ready
adb wait-for-device

# Build for detox
detox build -c android.sim.release

# Run detox tests
detox test -c android.sim.release --cleanup

# Kill processes the emulator and packager spawned
pkill -9 -P $emulator_pid

# Kill emulator and packager processes
kill -9 $emulator_pid
