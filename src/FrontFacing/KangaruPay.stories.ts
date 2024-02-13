import type { Meta, StoryObj } from '@storybook/react';

import { KangaruPay } from './KangaruPay';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof KangaruPay>={
    title: 'Mine/KangarU_Pay',
    component: KangaruPay,
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
const call=(e:any)=>{
    console.log(e)
}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PayWithCard: Story = {

    args: {
        secretKey: "sk_test_f1560f41e2d345a5b2611bd8fa00b918",
        txRef: "tx-kangar-001",
        amount: "20000",
        currency: "NGN",
        customerEmail: "kangarupay.com",
        customerPhone: "08137958136",
        customerName: "Kangaru Customer",
        merchantName: "Netflix Stores",
        paymentDescription: "Payment for premium monthly subscription",
        logoLink: null,
        callBack: call,
    },
};
