import { fn } from 'storybook/test';
import { MyCombobox } from './MyCombobox';

const sampleOptions = [
  { label: 'Option 1', value: 'value1' },
  { label: 'Option 2', value: 'value2' },
  { label: 'Option 3', value: 'value3' },
  { label: 'Option 4', value: 'value4' },
  { label: 'Option 5', value: 'value5' },
  { label: 'Longer Option 6', value: 'value6' },
  { label: 'Another Option 7', value: 'value7' },
  { label: 'Final Option 8', value: 'value8' },
];

export default {
  title: 'Components/MyCombobox',
  component: MyCombobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'The label text for the combobox.' },
    placeholder: { control: 'text', description: 'The placeholder text displayed when no option is selected.' },
    options: { control: 'object', description: 'Array of options for the combobox.' },
    helpText: { control: 'text', description: 'Optional help text displayed below the combobox.' },
    initialValue: { control: 'text', description: 'The initially selected value.' },
    onSelect: { action: 'selected', description: 'Callback function when an option is selected.' },
  },
  args: {
    label: 'LABEL *',
    placeholder: 'COMBOBOX',
    options: sampleOptions,
    helpText: 'Help Text',
    onSelect: fn(),
  },
};

export const Default = {
  args: {},
};

export const Selected = {
  args: {
    initialValue: 'Option 4',
  },
};

export const OpenState = {
  args: {},
  play: async ({ canvasElement }) => {
    const comboboxInput = canvasElement.querySelector('#combobox-input');
    if (comboboxInput) {
      comboboxInput.click();
    }
  },
};

export const WithLongOptions = {
  args: {
    options: [
      { label: 'This is a very long option that will require two lines', value: 'long1' },
      { label: 'Another significantly longer option for testing purposes', value: 'long2' },
      { label: 'Short option', value: 'short1' },
      { label: 'This is a medium length option', value: 'medium1' },
      { label: 'Very very very very very very long option to test scrolling', value: 'long3' },
      { label: 'Option 6', value: 'value6' },
      { label: 'Option 7', value: 'value7' },
      { label: 'Option 8', value: 'value8' },
      { label: 'Option 9', value: 'value9' },
      { label: 'Option 10', value: 'value10' },
    ],
  },
  play: async ({ canvasElement }) => {
    const comboboxInput = canvasElement.querySelector('#combobox-input');
    if (comboboxInput) {
      comboboxInput.click();
    }
  },
};
