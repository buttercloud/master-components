import React from 'react';
import Menu02 from './Menu02';

export default {
  title: 'Organisms/Menus/Menu02',
  component: Menu02,
  argTypes: {
    logoUrl: {
      control: 'text',
      table: { category: 'Header' },
    },
    title: {
      control: 'text',
      table: { category: 'Header' },
    },
    titleColor: {
      control: 'color',
      table: { category: 'Header' },
    },
    subtitle: {
      control: 'text',
      table: { category: 'Header' },
    },
    subtitleColor: {
      control: 'color',
      table: { category: 'Header' },
    },
    products: {
      control: 'object',
      table: { category: 'Products' },
    },
    productNameColor: {
      control: 'color',
      table: { category: 'Products' },
    },
    productDescriptionColor: {
      control: 'color',
      table: { category: 'Products' },
    },
    productPriceColor: {
      control: 'color',
      table: { category: 'Products' },
    },
    productBoxColor: {
      control: 'color',
      table: { category: 'Products' },
    },
    productBoxBorderColor: {
      control: 'color',
      table: { category: 'Products' },
    },
    priceBoxColor: {
      control: 'color',
      table: { category: 'Products' },
    },
    productOnClick: {
      control: 'func',
      table: { category: 'Products' },
    },
    actionLinkText: {
      control: 'text',
      table: { category: 'ActionLink' },
    },
    openActionLinkInNewTab: {
      control: 'boolean',
      table: { category: 'ActionLink' },
    },
    actionLinkHref: {
      control: 'text',
      table: { category: 'ActionLink' },
    },
    actionLinkColor: {
      control: 'color',
      table: { category: 'ActionLink' },
    },
    fontFamily: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Menu02 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logoUrl: '',
  title: 'Explore Our Menu',
  titleColor: '#fff',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet.',
  subtitleColor: '#fff',
  products: [
    {
      id: 'product1',
      name: 'Product #1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$0.69',
    },
    {
      id: 'product2',
      name: 'Product #2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$4.20',
    },
    {
      id: 'product3',
      name: 'Product #3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$0.24',
    },
    {
      id: 'product4',
      name: 'Product #4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$0.00',
    },
    {
      id: 'product5',
      name: 'Product #5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$3.14',
    },
    {
      id: 'product6',
      name: 'Product #6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$6.66',
    },
  ],
  actionLinkText: 'DISCOVER much MORE',
  fontFamily: 'sans-serif',
  productNameColor: '#0F0F10',
  productDescriptionColor: '#000',
  productPriceColor: '#F4F0EA',
  productBoxColor: '#fff',
  priceBoxColor: '#28282A',
  productBoxBorderColor: '#c7a17a',
  actionLinkHref: 'https://youtu.be/dQw4w9WgXcQ',
  openActionLinkInNewTab: true,
  backgroundColor: '#28282a',
  actionLinkColor: '#fff',
  productOnClick: () => {},
};

Primary.storyName = 'Menu02';
