import React from "react"
import { Button } from "../src"
import styles from "../src/button.module.scss"

export default {
  title: 'Button',
  component: Button,
}

// 'primary','secondary','valid','warning','alert','primary-light', 'primary-light','light','secondary-light','valid-light','warning-light','alert-light','bid','offer','dark','best'

export const Primary = () => <Button styleName="primary">Button</Button>;
export const Secondary = () => <Button styleName="secondary">Button</Button>;
export const Valid = () => <Button styleName="valid">Button</Button>;
export const Warning = () => <Button styleName="warning">Button</Button>;
export const Alert = () => <Button styleName="alert">Button</Button>;
export const Disabled = () => <Button disabled>Button</Button>;
