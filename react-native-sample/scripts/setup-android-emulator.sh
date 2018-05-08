#!/usr/bin/env bash

set -e

if ! [[ -n $ANDROID_HOME ]]; then
  brew tap caskroom/cask
  brew cask install android-sdk

  export ANDROID_HOME=$HOME/Library/Android/sdk
fi

export PATH=$PATH:$ANDROID_HOME/tools/bin

if ! (brew ls --versions applesimutils > /dev/null); then 
  brew tap wix/brew
  brew install applesimutils
fi

if ! (which yarn > /dev/null); then
  brew install yarn
fi

export SYSTEM_IMAGE="system-images;android-24;google_apis;x86"

echo yes | sdkmanager "$SYSTEM_IMAGE"

avdmanager list | grep -i "e2e-emulator"
if [[ $? != 0 ]]; then
  echo no | avdmanager create avd -n "e2e-emulator" -k "$SYSTEM_IMAGE"
fi
