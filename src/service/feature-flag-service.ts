import { FeatureFlag } from "../types/feature-flag";

const defaultFeatureFlags: Record<FeatureFlag, boolean> = {
  [FeatureFlag.TEST_FEATURE]: false,
};

function saveFeatureFlags(flags: Record<FeatureFlag, boolean>) {
  localStorage.setItem("featureFlags", JSON.stringify(flags));
}

function getFeatureFlags(): Record<FeatureFlag, boolean> {
  const flags = localStorage.getItem("featureFlags");
  return flags ? JSON.parse(flags) : defaultFeatureFlags;
}

export function isFeatureEnabled(featureName: FeatureFlag) {
  const flags = getFeatureFlags();
  return !!flags[featureName];
}

export function setFeatureFlag(featureName: FeatureFlag, isEnabled: boolean) {
  const flags = getFeatureFlags();
  flags[featureName] = isEnabled;
  saveFeatureFlags(flags);
}
