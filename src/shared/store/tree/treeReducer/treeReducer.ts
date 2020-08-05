import { TreeNode } from 'react-treebeard';

export type Action =
  | { type: 'toggleOn'; payload: Array<string> }
  | { type: 'toggleOff' }
  | { type: 'reset'; payload: TreeNode };

function toggleNodesOn(node: TreeNode, toToggleList: Array<string>): TreeNode {
  if (toToggleList.includes(node.name) && node.children) {
    return {
      ...node,
      toggled: true,
      children: node.children.map((childNode) => toggleNodesOn(childNode, toToggleList)),
    };
  }

  return node;
}

export default function treeReducer(state: TreeNode, action: Action): TreeNode {
  switch (action.type) {
    case 'toggleOn': {
      return toggleNodesOn(state, action.payload);
    }

    case 'reset': {
      return action.payload;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
