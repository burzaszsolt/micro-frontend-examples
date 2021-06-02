import React from 'react';

import { Slide } from '../components/Slide/Slide';

export default {
  title: 'Custom/Slide',
  component: Slide,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Slide {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Test title',
  subTitle: 'Subtitle',
  backgroundColor: 'lavender'
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Test title without subtitle',
  subTitle: null,
  backgroundColor: 'lavender'
};
