import React from "react"
import { Button } from "./Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    styleName: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "valid",
          "warning",
          "alert",
          "primary-light",
          "light",
          "secondary-light",
          "valid-light",
          "warning-light",
          "alert-light",
          "bid",
          "offer",
          "dark",
          "best",
        ],
      },
    },
  },
}

export const Basic = ({ ...props }) => <Button {...props}>Button</Button>
