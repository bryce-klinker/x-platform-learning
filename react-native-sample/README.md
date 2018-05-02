# Required Tooling

* XCode
* Yarn
* NodeJS
* Android SDK

# Scripts

## Tests

```bash
yarn test
```

## End-to-End Tests

```bash
yarn e2e # runs all end-to-end tests (Android & iOS) (see note)
yarn e2e:ios # runs all iOS end-to-end tests
yarn e2e:android # runs all Android end-to-end tests (see note)
```

### Android Note

Before running Android end-to-end tests you need to make sure you run the [./scripts/setup-android-emulator.sh](./scripts/setup-android-emulator.sh) script. This will setup the emulator that the end-to-end tests expect to be available.
