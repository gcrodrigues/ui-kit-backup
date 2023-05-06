import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SelectProps } from './types';
import Select from '.';
import { Form, useFormStore } from '@ariakit/react';
import { Search, Trash } from 'react-feather';

const withForm = (Story: React.ComponentType<SelectProps>, context: { args: SelectProps }) => {
  const form = useFormStore({ defaultItems: []});

  return(
  <Form store={form} style={{width: '260px'}}>
    <Story  {...context.args} />
  </Form>
  )
}

const SelectComponent = (args: SelectProps) => {
  return <Select {...args}/>;
};


const meta: Meta<SelectProps> = {
  title: 'Select',
  component: SelectComponent,
  decorators: [withForm]
};

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    items: [
      { value: 'Apple' },
      { value: 'Pineapple' },
      { value: 'Blueberry' },
      { value: 'Peach' },
      { value: 'Passionfruit' },
      { value: 'Grape' },
      { value: 'Strawberry' },
      { value: 'Watermelon' },
    ],
    matchKeys: ['value'],
    renderValue: 'value',
    keyValue: 'value',
    label: "Select your favorite fruit",
    placeholder: "Placeholder"
  }
};

export const Helper: Story = {
  args: {
    items: [
      { value: 'Apple' },
      { value: 'Pineapple' },
      { value: 'Blueberry' },
      { value: 'Peach' },
      { value: 'Passionfruit' },
      { value: 'Grape' },
      { value: 'Strawberry' },
      { value: 'Watermelon' },
    ],
    matchKeys: ['value'],
    renderValue: 'value',
    keyValue: 'value',
    placeholder: 'Select an option',
    label: "Select your favorite fruit",
    helper: "Eat fruits!"
  }
};

export const Multiple: Story = {
  args: {
    items: [
      { value: 'Admin' },
      { value: 'Secretary' },
      { value: 'Teacher' },
      { value: 'Parent' },
      { value: 'Principal' },
      { value: 'Student' },
      { value: 'Employee' },
    ],
    clearInputButtonText: <Trash size={12}/>,
    multiple: true,
    matchKeys: ['value'],
    renderValue: 'value',
    keyValue: 'value',
    label: 'Roles'
  },
};

export const Combobox: Story = {
  args: {
    items: [
      { value: 'Admin' },
      { value: 'Secretary' },
      { value: 'Teacher' },
      { value: 'Parent' },
      { value: 'Principal' },
      { value: 'Student' },
      { value: 'Employee' },
    ],
    multiple: true,
    inputSearch: true,
    matchKeys: ['value'],
    renderValue: 'value',
    keyValue: 'value',
    rightIcon: <Search />, 
    placeholder: 'Select user roles',
    comboboxPlaceholder: 'Find fruit'
  },
};

export const Error: Story = {
  args: {
    items: [
      { value: 'Admin' },
      { value: 'Secretary' },
      { value: 'Teacher' },
      { value: 'Parent' },
      { value: 'Principal' },
      { value: 'Student' },
      { value: 'Employee' },
    ],
    multiple: true,
    inputSearch: true,
    matchKeys: ['value'],
    renderValue: 'value',
    keyValue: 'value',
    rightIcon: <Search />, 
    placeholder: 'Select user roles',
    error: 'Select at least one fruit'
  },
};

export const Disabled: Story = {
  args: {
    items: [
      { value: 'Admin' },
      { value: 'Secretary' },
      { value: 'Teacher' },
      { value: 'Parent' },
      { value: 'Principal' },
      { value: 'Student' },
      { value: 'Employee' },
    ],
    multiple: true,
    inputSearch: true,
    matchKeys: ['value'],
    renderValue: 'value',
    keyValue: 'value',
    rightIcon: <Search />, 
    placeholder: 'Select user roles',
    disabled: true
  },
};
