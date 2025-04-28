import { useMemo } from "react";
import { isFeatureEnabled } from "../service/feature-flag-service";
import { FeatureFlag } from "../types/feature-flag";

export function useFeatureFlag(flag: FeatureFlag) {
  return useMemo(() => isFeatureEnabled(flag), [flag]);
}
