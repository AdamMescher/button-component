import * as React from 'react';
import Button from './index';

export default {
    title: 'Button',
    component: Button
}

export const Default = () => <Button>Default</Button>;
export const Outline = () => <Button variant="outline">Outline</Button>;
export const Text = () => <Button variant="text">Text</Button>;
export const SizeDefault = () => <Button>Default</Button>
export const SizeSmall = () => <Button size="sm">Small</Button>;
export const SizeMedium = () => <Button size="md">Medium</Button>;
export const SizeLarge = () => <Button size="lg">Large</Button>;
export const ColorDefaultNoProp = () => <Button>Default</Button>;
export const ColorDefault = () => <Button color="default">Default</Button>;
export const ColorPrimary = () => <Button color="primary">Primary</Button>;
export const ColorSecondar = () => <Button color="secondary">Secondary</Button>;
export const ColorDanger = () => <Button color="danger">Danger</Button>;
export const StartIcon = () => <Button startIcon="brightness" color="primary">startIcon</Button>;
export const EndIcon = () => <Button endIcon="snowflake" color="primary" >endIcon</Button>;