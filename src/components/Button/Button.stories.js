import React from "react"
import { Button } from "./Button"

export default {
  title: "Button",
  component: Button
}

export const Basic = ({ ...props }) => <Button {...props}>Button</Button>
