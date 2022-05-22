import React from "react"
import { Button } from "./Button"

export default {
  title: "Input/Button",
  component: Button,
	decorators: [
    (Story) => (
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
}

export const Basic = ({ ...props }) => <Button {...props}>{props.label || "Button"}</Button>
