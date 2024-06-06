import React, { useEffect, useRef } from "react";
import { Updater, useImmer } from "use-immer";
import { ModelState } from "./state";
import { getModelCache, setModelCache } from "../model-helpers/localstorage";

export type ModelProviderProps = React.PropsWithChildren<{
  defaultState?: Partial<ModelState>;
}>;

export type Model = {
  state: ModelState;
  dispatch: Updater<ModelState>;
};

export const ModelContext = React.createContext<Model | null>(null);

export function ModelProvider(props: ModelProviderProps) {
  const [state, dispatch] = useImmer(() =>
    ModelState.set(new ModelState(), draft => {
      if (props.defaultState) {
        Object.assign(draft, props.defaultState);
      }
    })
  );

  const modelRef = useRef({
    state,
    dispatch,
  });

  modelRef.current.state = state;

  useEffect(function localStorageToModelState() {
    getModelCache().then(preload => {
      if (preload) {
        dispatch(preload);
      }
    });
  }, []);

  useEffect(
    function modelStateToLocalStorage() {
      setModelCache(state);
    },
    [state]
  );

  useEffect(() => {
    // @ts-ignore
    window.__debug__ModelRef = modelRef;
  }, []);

  return (
    <ModelContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </ModelContext.Provider>
  );
}
