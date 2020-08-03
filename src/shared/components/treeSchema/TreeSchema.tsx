import React, { ReactElement, useState } from 'react';
import { Treebeard, TreeNode } from 'react-treebeard';

interface TreeSchemaProps {}

const data: TreeNode = {
  name: 'src',
  toggled: true,
  children: [
    {
      name: 'app',
      toggled: true,
      active: true,
      children: [
        { name: 'admin', toggled: true, active: false, children: [{ name: 'Admin.tsx' }] },
        { name: 'course', toggled: true, active: true, children: [{ name: 'Course.tsx' }] },
        { name: 'home', toggled: true, active: false, children: [{ name: 'Home.tsx' }] },
        { name: 'App.tsx', active: false },
        { name: 'App.test.tsx', active: false },
      ],
    },
    {
      name: 'shared',
      children: [{ name: 'components' }, { name: 'api' }, { name: 'utils' }],
    },
    {
      name: 'index.tsx',
    },
  ],
};

export default function TreeSchema(): ReactElement {
  return <Treebeard data={data} />;
}
