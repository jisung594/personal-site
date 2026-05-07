import { fn } from 'storybook/test';

import { MyButton } from './MyButton';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'BUTTON',
  },
};

export const Secondary = {
  args: {
    label: 'BUTTON',
  },
};

export const Focus = {
  args: {
    label: 'BUTTON',
    primary: true,
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    if (button) {
      button.focus();
    }
  },
};

export const Hover = {
  args: {
    label: 'BUTTON',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    if (button) {
      // Add hover class to simulate hover state
      button.classList.add('hover');
    }
  },
};

export const Disabled = {
  args: {
    label: 'BUTTON',
    disabled: true,
  },
};

export const Active = {
  args: {
    label: 'BUTTON',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    if (button) {
      button.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    }
  },
};
