import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FontTagWrapper from '../utils/fonts/elements/FontTagWrapper'
import Font from '../utils/fonts/Font'



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Font',
  component: Font,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof FontTagWrapper>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FontTagWrapper> = (args) => <Font {...args} />

export const H1 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  children: "Test",
  type: 'h1',
}
