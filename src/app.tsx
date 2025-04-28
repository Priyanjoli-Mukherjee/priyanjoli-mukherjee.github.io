import { useFeatureFlag } from "./hooks/use-feature-flag";
import { FeatureFlag } from "./types/feature-flag";
import { Scrollr } from "./scrollr";

export function App() {
  const isMultiPageEnabled = useFeatureFlag(FeatureFlag.MULTI_PAGE_ENABLED);

  return !isMultiPageEnabled ? <Scrollr /> : <div>Home Page Coming Soon</div>;
}
