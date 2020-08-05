import testReducer from './treeReducer';
import { TreeNode } from 'react-treebeard';

const data: TreeNode = {
  name: 'src',
  toggled: false,
  children: [
    {
      name: 'app',
      toggled: false,
      active: false,
      children: [
        {
          name: 'admin',
          toggled: false,
          active: false,
          children: [{ name: 'Admin.tsx', active: false }],
        },
        {
          name: 'course',
          toggled: false,
          active: false,
          children: [{ name: 'Course.tsx', active: false }],
        },
        {
          name: 'home',
          toggled: false,
          active: false,
          children: [{ name: 'Home.tsx', active: false }],
        },
        { name: 'App.tsx', active: false },
        { name: 'App.test.tsx', active: false },
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

const result: TreeNode = {
  name: 'src',
  toggled: true,
  children: [
    {
      name: 'app',
      toggled: true,
      active: false,
      children: [
        {
          name: 'admin',
          toggled: false,
          active: false,
          children: [{ name: 'Admin.tsx', active: false }],
        },
        {
          name: 'course',
          toggled: false,
          active: false,
          children: [{ name: 'Course.tsx', active: false }],
        },
        {
          name: 'home',
          toggled: false,
          active: false,
          children: [{ name: 'Home.tsx', active: false }],
        },
        { name: 'App.tsx', active: false },
        { name: 'App.test.tsx', active: false },
      ],
    },
    {
      name: 'shared',
      toggled: true,
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

test('toggleOn reducer', () => {
  expect(testReducer(data, { type: 'toggleOn', payload: ['src', 'app', 'shared'] })).toStrictEqual(
    result,
  );
});

test('reset reducer', () => {
  expect(testReducer(data, { type: 'reset', payload: data })).toStrictEqual(data);
});
