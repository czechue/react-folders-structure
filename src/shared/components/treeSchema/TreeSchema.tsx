import React, { ReactElement, useEffect } from 'react';
import { Treebeard, TreeNode } from 'react-treebeard';
import { useTreeState, useTreeDispatch } from '../../store/tree/TreeContext';
import { useLocation } from 'react-router-dom';

interface TreeSchemaProps {
  data: TreeNode;
}

export default function TreeSchema(): ReactElement {
  const { pathname } = useLocation();
  const state = useTreeState();
  const { toggleOn, resetTree } = useTreeDispatch();

  useEffect(() => {
    resetTree();

    if (pathname === '/admin') {
      toggleOn(['src', 'app', 'admin', 'shared']);
      return;
    }

    if (pathname === '/course') {
      toggleOn(['src', 'app', 'course', 'shared']);
      return;
    }

    if (pathname === '/') {
      toggleOn(['src', 'app', 'home', 'shared']);
      return;
    }
  }, [toggleOn, resetTree, pathname]);

  return <Treebeard data={state} />;
}
