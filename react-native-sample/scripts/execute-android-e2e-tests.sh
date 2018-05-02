set -e

# Start emulator
$ANDROID_HOME/emulator/emulator @e2e-emulator &

# Grab the pid for the emulator process
emulator_pid=$!

# Start packager for react-native
yarn start &

# Grab the pid for the packager process
packager_pid=$!

# Wait for the emulator to be ready
adb wait-for-device

# Run detox tests
./node_modules/.bin/detox -c android.sim.release

# Kill processes the emulator and packager spawned
pkill -9 -P $emulator_pid
pkill -9 -P $packager_pid

# Kill emulator and packager processes
kill -9 $emulator_pid
kill -9 $packager_pid
