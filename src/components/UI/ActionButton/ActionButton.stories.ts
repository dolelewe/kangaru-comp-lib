
import type { Meta, StoryObj } from '@storybook/react';
import {ActionButton} from "./ActionButton";



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ActionButton>={
    title: 'Mine/Action_Button',
    component: ActionButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

    },
}

export default meta;
type Story = StoryObj<typeof meta>;
const call=()=>{
    console.log("toggle Clicked")
}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const show_action_button: Story = {

    args: {
        text: "show action",
        type:"button",
        clickEvent:call,
        validity: false
    },
};
