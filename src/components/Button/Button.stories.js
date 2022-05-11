import React from "react"
import { Button } from "./Button"

export default {
  title: 'Button',
  component: Button,
}

export const Primary = () => <Button styleName="primary">Button</Button>;
export const Secondary = () => <Button styleName="secondary">Button</Button>;
export const Valid = () => <Button styleName="valid">Button</Button>;
export const Warning = () => <Button styleName="warning">Button</Button>;
export const Alert = () => <Button styleName="alert">Button</Button>;
export const Light = () => <Button styleName="light">Button</Button>;
export const PrimaryLight = () => <Button styleName="primary-light">Button</Button>;
export const SecondaryLight = () => <Button styleName="secondary-light">Button</Button>;
export const ValidLight = () => <Button styleName="valid-light">Button</Button>;
export const WarningLight = () => <Button styleName="warning-light">Button</Button>;
export const AlertLight = () => <Button styleName="alert-light">Button</Button>;
export const Bid = () => <Button styleName="bid">Button</Button>;
export const Offer = () => <Button styleName="offer">Button</Button>;
export const Dark = () => <Button styleName="dark">Button</Button>;
export const Best = () => <Button styleName="best">Button</Button>;
export const Disabled = () => <Button disabled>Button</Button>;
