import { TreeNode } from 'react-treebeard';

const tree: TreeNode = {
  name: 'src',
  id: 'src',
  toggled: false,
  children: [
    {
      name: 'app',
      id: 'app',
      toggled: false,
      active: false,
      children: [
        {
          name: 'admin',
          id: 'admin',
          toggled: false,
          active: false,
          children: [{ name: 'Admin.tsx', id: 'Admin.tsx', active: false }],
        },
        {
          name: 'course',
          id: 'course',
          toggled: false,
          active: false,
          children: [{ name: 'Course.tsx', id: 'Course.tsx', active: false }],
        },
        {
          name: 'home',
          id: 'home',
          toggled: false,
          active: false,
          children: [{ name: 'Home.tsx', id: 'Home.tsx', active: false }],
        },
        { name: 'App.tsx', id: 'App.tsx', active: false },
        { name: 'App.test.tsx', id: 'App.test.tsx', active: false },
      ],
    },
    {
      name: 'shared',
      toggled: false,
      children: [
        { name: 'components', toggled: false, active: false },
        { name: 'api', toggled: false, active: false },
        { name: 'utils', toggled: false, active: false },
      ],
    },
    {
      name: 'index.tsx',
      active: false,
    },
  ],
};

export default tree;
