import React from 'react';
import { Meta, Story } from '@storybook/react';
import { styled } from '@storybook/theming';

export default {
  title: '',
  component: null,
  argTypes: {
    // TODO
    // dir: {
    //   control: {
    //     type: 'inline-radio',
    //     options: ['ltr', 'rtl'],
    //   },
    // },
  },
  args: {
    // example: true
  },
} as Meta;

// const DemoBlock = styled.div`
//   background-color: #a19f9d;
//   color: #fff;
//   font-weight: 600;
//   height: 40px;
//   line-height: 40px;
//   margin-bottom: 16px;
//   text-align: center;
// `;

// export const ExampleStory: Story<Props> = ({ dir }) => <DemoBlock></DemoBlock>;

// ExampleStory.storyName = 'Example Story';

// ExampleStory.parameters = {
//   controls: {
//     // disabled: true,
//   },
// };
