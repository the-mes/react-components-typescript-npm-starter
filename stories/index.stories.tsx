import { Meta, Story } from '@storybook/react';

import { HelloWorld } from '../src';
import { HelloWorldProps } from '../src/components/HelloWorld';

export default {
  title: 'Hello World',
  component: HelloWorld,
  args: {
    text: 'Howdy!',
  } as HelloWorldProps,
} as Meta;

export const ExampleStory: Story<HelloWorldProps> = (props) => (
  <HelloWorld {...props} />
);

ExampleStory.storyName = 'My Example Story';
