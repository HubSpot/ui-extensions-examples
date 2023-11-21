#!/usr/bin/env node
const FgRed = '\x1b[31m';
const Reset = '\x1b[0m';
const FgGreen = '\x1b[32m';

const { execSync } = require('child_process');
const minRequiredVersion = {
  major: 5,
  minor: 0,
  patch: 0,
};

function exitWithError(...args) {
  console.error(FgRed, ...args, Reset);
  process.exit(1);
}

function exitWithSuccess() {
  console.log(
    FgGreen,
    'The version of @hubspot/cli installed is correct!\n',
    Reset
  );
  process.exit(0);
}

function meetsMinimumRequiredVersion(major, minor, patch) {
  if (major < minRequiredVersion.major) {
    return false;
  } else if (major > minRequiredVersion.major) {
    return true;
  }

  if (minor < minRequiredVersion.minor) {
    return false;
  } else if (minor > minRequiredVersion.major) {
    return true;
  }

  if (patch < minRequiredVersion.patch) {
    return false;
  }

  return true;
}

try {
  execSync('hs', { stdio: 'pipe' });
} catch (e) {
  exitWithError(
    'You do not have the HubSpot cli installed, please run `npm install -g @hubspot/cli` to install it.\n'
  );
}

try {
  const version = execSync('hs --version');
  const [major, minor, patch] = version
    .toString()
    .split('.')
    .map((bit) => Number(bit));
  const meetsMinRequirement = meetsMinimumRequiredVersion(major, minor, patch);
  if (!meetsMinRequirement) {
    const minVersionString = `${minRequiredVersion.major}.${minRequiredVersion.minor}.${minRequiredVersion.patch}`;
    const updateMessage = `This project requires a minimum version of ${minVersionString}, please update your @hubspot/cli version.  Your current installed version is ${version}\n`;
    exitWithError(updateMessage);
  }
} catch (e) {
  exitWithError(
    'Unable to determine which version of `@hubspot/cli` is installed, '
  );
}

exitWithSuccess();
