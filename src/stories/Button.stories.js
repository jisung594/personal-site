import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    href: { control: 'text' },
  },
  args: { href: '#' },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    href: '#demo',
    children: 'DEMO',
  },
};

export const Secondary = {
  args: {
    href: '#figma',
    children: 'FIGMA',
  },
};

export const Large = {
  args: {
    size: 'large',
    href: '#storybook',
    children: 'STORYBOOK',
  },
};

export const Small = {
  args: {
    size: 'small',
    href: '#small',
    children: 'SMALL',
  },
};

// Showcase multiple buttons together
export const ButtonGroup = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      <Button primary href="#demo">DEMO</Button>
      <Button href="#figma">FIGMA</Button>
      <Button href="#storybook">STORYBOOK</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button group showing primary and secondary variants together, matching homepage CTA layout.',
      },
    },
  },
};
