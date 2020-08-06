import React, { ReactElement, useEffect } from 'react';
import { Treebeard } from 'react-treebeard';
import { useLocation } from 'react-router-dom';
import { TreeInitConfig } from '../../../consts/appFolderTree';
import { useTree } from '../TreeContext';

interface TreeSchemaProps {
  initConfig: TreeInitConfig;
}

export default function TreeSchema({ initConfig }: TreeSchemaProps): ReactElement {
  const { pathname } = useLocation();
  const [state, { toggleOn, resetTree }] = useTree();

  useEffect(() => {
    resetTree();
    toggleOn(initConfig[pathname]);
  }, [toggleOn, resetTree, pathname, initConfig]);

  return <Treebeard data={state} />;
}
