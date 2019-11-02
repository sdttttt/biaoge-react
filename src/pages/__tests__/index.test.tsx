import 'jest';
import Index from '..';
import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';


describe('Page: index', () => {
  it('Render correctly', () => {
    const wrapper: ReactTestRenderer = renderer.create(<Index />);
    expect(wrapper.root.children.length).toBe(1);
  });
});

test('this is a test', () => {
  console.log('OKOKOK')
});
