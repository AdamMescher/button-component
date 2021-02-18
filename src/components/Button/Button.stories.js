import * as React from 'react';
import Button from './index';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        disableShadow: { control: 'boolean' },
        disabled: { control: 'boolean' },
        color: {
            control: {
                type: 'radio',
                options: [
                    false,
                    'default',
                    'primary',
                    'secondary',
                    'danger'
                ]
            }
        },
        size: {
            control: {
                type: 'radio',
                options: [
                    false,
                    'sm',
                    'md',
                    'lg'
                ]
            }
        },
        variant: {
            control: {
                type: 'radio',
                options: [
                    false,
                    'default',
                    'outline',
                    'text'
                ]
            }
        },
        startIcon: {
            control: {
                type: 'select',
                options: [
                    false,
                    'addAlert',
                    'addCircle',
                    'addLocation',
                    'addReaction',
                    'call',
                    'callEnd',
                    'checkBox',
                    'crop',
                    'indeterminiteCheckBox',
                    'lightMode',
                    'link',
                    'navigate',
                    'navigateBefore',
                    'navigateNext',
                    'podcasts',
                    'queue',
                    'recommend',
                    'refresh',
                    'save',
                    'showChart',
                    'tune',
                    'unsubscribe',
                    'volumeOff',
                    'volumeUp',
                    'snowflake',
                    'rotation3D',
                ]
            }
        },
        endIcon: {
            control: {
                type: 'select',
                options: [
                    false,
                    'addAlert',
                    'addCircle',
                    'addLocation',
                    'addReaction',
                    'call',
                    'callEnd',
                    'checkBox',
                    'crop',
                    'indeterminiteCheckBox',
                    'lightMode',
                    'link',
                    'navigate',
                    'navigateBefore',
                    'navigateNext',
                    'podcasts',
                    'queue',
                    'recommend',
                    'refresh',
                    'save',
                    'showChart',
                    'tune',
                    'unsubscribe',
                    'volumeOff',
                    'volumeUp',
                    'snowflake',
                    'rotation3D',
                ]
            }
        }
    }
}

export const ButtonComponent = () => <Button>Button</Button>

export const Sizes = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button>No Size</Button>
            <Button size="sm" style={{ marginLeft: '10px' }}>sm</Button>
            <Button size="md" style={{ marginLeft: '10px' }}>md</Button>
            <Button size="lg" style={{ marginLeft: '10px' }}>lg</Button>
        </div>
    )
}
export const SizeDefault = () => <Button>No Size</Button>
export const SizeSmall = () => <Button size="sm">sm</Button>;
export const SizeMedium = () => <Button size="md">md</Button>;
export const SizeLarge = () => <Button size="lg">lg</Button>;

export const Variants = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button>No Variant</Button>
            <Button variant="default" style={{ marginLeft: '10px' }}>Default</Button>
            <Button variant="outline" style={{ marginLeft: '10px' }}>Outline</Button>
            <Button variant="text" style={{ marginLeft: '10px' }}>Text</Button>
        </div>
    )
}
export const Default = (args) => <Button {...args}>Default</Button>;
export const Outline = () => <Button variant="outline">Outline</Button>;

export const OutlineWithColor = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button variant="outline">No Color</Button>
            <Button variant="outline" color="default" style={{ marginLeft: '10px' }}>Default</Button>
            <Button variant="outline" color="primary" style={{ marginLeft: '10px' }}>Primary</Button>
            <Button variant="outline" color="secondary" style={{ marginLeft: '10px' }}>Secondary</Button>
            <Button variant="outline" color="danger" style={{ marginLeft: '10px' }}>Danger</Button>
        </div>
    )
}

export const Text = () => <Button variant="text">Text</Button>;

export const TextWithColor = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button variant="text">No Color</Button>
            <Button variant="text" color="default" style={{ marginLeft: '10px' }}>Default</Button>
            <Button variant="text" color="primary" style={{ marginLeft: '10px' }}>Primary</Button>
            <Button variant="text" color="secondary" style={{ marginLeft: '10px' }}>Secondary</Button>
            <Button variant="text" color="danger" style={{ marginLeft: '10px' }}>Danger</Button>
        </div>
    )
}

export const Colors = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button>No Color</Button>
            <Button color="default" style={{ marginLeft: '10px' }}>Default</Button>
            <Button color="primary" style={{ marginLeft: '10px' }}>Primary</Button>
            <Button color="secondary" style={{ marginLeft: '10px' }}>Secondary</Button>
            <Button color="danger" style={{ marginLeft: '10px' }}>Danger</Button>
        </div>
    )
}
export const ColorNoColor = () => <Button>No Color</Button>;
export const ColorDefault = () => <Button color="default">Default</Button>;
export const ColorPrimary = () => <Button color="primary">Primary</Button>;
export const ColorSecondary = () => <Button color="secondary">Secondary</Button>;
export const ColorDanger = () => <Button color="danger">Danger</Button>;

export const StartIcon = () => {
    return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button startIcon="tune" color="default">startIcon</Button>
        <Button startIcon="tune" color="primary" style={{ marginLeft: '10px' }}>startIcon</Button>
        <Button startIcon="tune" color="secondary" style={{ marginLeft: '10px' }}>startIcon</Button>
        <Button startIcon="tune" color="danger" style={{ marginLeft: '10px' }}>startIcon</Button>
    </div>
    )
};

export const StartIconOutline = () => {
    return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button startIcon="tune" variant="outline"color="default">startIcon</Button>
        <Button startIcon="tune" variant="outline" color="primary" style={{ marginLeft: '10px' }}>startIcon</Button>
        <Button startIcon="tune" variant="outline" color="secondary" style={{ marginLeft: '10px' }}>startIcon</Button>
        <Button startIcon="tune" variant="outline" color="danger" style={{ marginLeft: '10px' }}>startIcon</Button>
    </div>
    )
};

export const StartIconText = () => {
    return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button startIcon="tune" variant="text" color="default">startIcon</Button>
        <Button startIcon="tune" variant="text" color="primary" style={{ marginLeft: '10px' }}>startIcon</Button>
        <Button startIcon="tune" variant="text" color="secondary" style={{ marginLeft: '10px' }}>startIcon</Button>
        <Button startIcon="tune" variant="text" color="danger" style={{ marginLeft: '10px' }}>startIcon</Button>
    </div>
    )
};


export const EndIcon = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button endIcon="snowflake" color="default">endIcon</Button>
            <Button endIcon="snowflake" color="primary" style={{ marginLeft: '10px' }}>endIcon</Button>
            <Button endIcon="snowflake" color="secondary" style={{ marginLeft: '10px' }}>endIcon</Button>
            <Button endIcon="snowflake" color="danger" style={{ marginLeft: '10px' }}>endIcon</Button>
        </div>
    )
}

export const EndIconOutline = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button endIcon="snowflake" variant="outline" color="default">endIcon</Button>
            <Button endIcon="snowflake" variant="outline" color="primary" style={{ marginLeft: '10px' }}>endIcon</Button>
            <Button endIcon="snowflake" variant="outline" color="secondary" style={{ marginLeft: '10px' }}>endIcon</Button>
            <Button endIcon="snowflake" variant="outline" color="danger" style={{ marginLeft: '10px' }}>endIcon</Button>
        </div>
    )
}

export const EndIconText = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button endIcon="snowflake" variant="text" color="default" >endIcon</Button>
            <Button endIcon="snowflake" variant="text" color="primary" style={{ marginLeft: '10px' }} >endIcon</Button>
            <Button endIcon="snowflake" variant="text" color="secondary" style={{ marginLeft: '10px' }}>endIcon</Button>
            <Button endIcon="snowflake" variant="text" color="danger" style={{ marginLeft: '10px' }}>endIcon</Button>
        </div>
    )
}


