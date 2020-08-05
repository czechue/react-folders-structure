import React, { ReactNode, createContext, useReducer, useContext, useCallback } from 'react';
import { TreeNode } from 'react-treebeard';
import treeReducer from './treeReducer/treeReducer';

interface TreeProviderProps {
  children: ReactNode;
  initTree: TreeNode;
}

type Dispatch = {
  resetTree: () => void;
  toggleOn: (toToggleList: Array<string>) => void;
};

const TreeStateContext = createContext<undefined | TreeNode>(undefined);
const TreeDispatchContext = createContext<undefined | Dispatch>(undefined);

function TreeProvider({ children, initTree }: TreeProviderProps) {
  const [state, dispatch] = useReducer(treeReducer, initTree);

  const resetTree = useCallback(() => {
    dispatch({ type: 'reset', payload: initTree });
  }, [initTree]);

  const toggleOn = useCallback((toToggleList: Array<string>) => {
    dispatch({ type: 'toggleOn', payload: toToggleList });
  }, []);

  return (
    <TreeDispatchContext.Provider value={{ resetTree, toggleOn }}>
      <TreeStateContext.Provider value={state}>{children}</TreeStateContext.Provider>
    </TreeDispatchContext.Provider>
  );
}

function useTreeState(): TreeNode {
  const context = useContext(TreeStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a TreeProvider');
  }
  return context;
}
function useTreeDispatch() {
  const context = React.useContext(TreeDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a TreeProvider');
  }
  return context;
}
export { TreeProvider, useTreeState, useTreeDispatch };
