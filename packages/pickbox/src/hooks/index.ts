import React, { DependencyList, useMemo } from "react";
import { ModelContext, Model } from "../model/provider";

export function useModel() {
  return React.useContext(ModelContext)!;
}

export function useSelector<T>(
  selector: (state: Model["state"], dispath: Model["dispatch"]) => T,
  deps: DependencyList = []
): T {
  const model = useModel();

  return useMemo(
    () => selector(model.state, model.dispatch),
    deps.concat(model.state)
  );
}
