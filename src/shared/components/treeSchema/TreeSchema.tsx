import React, { ReactElement, useState } from 'react';
import { Treebeard, TreeNode } from 'react-treebeard';

interface TreeSchemaProps {}

const tree: TreeNode = {
  name: 'root',
  toggled: true,
  children: [
    {
      name: 'parent',
      children: [{ name: 'child1' }, { name: 'child2' }],
    },
    {
      name: 'loading parent',
      loading: true,
      children: [],
    },
    {
      name: 'parent',
      children: [
        {
          name: 'nested parent',
          children: [{ name: 'nested child 1' }, { name: 'nested child 2' }],
        },
      ],
    },
  ],
};

export default function TreeSchema(): ReactElement {
  const [data, setData] = useState<TreeNode | TreeNode[]>(tree);
  // const [cursor, setCursor] = useState(false);

  const onToggle = (node: TreeNode, toggled: any) => {
    console.log(node);
    // if (cursor) {
    //   node.active = false;
    // }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    // setCursor(node);
    setData(Object.assign({}, data));
  };

  return <Treebeard data={data} onToggle={onToggle} />;
}
