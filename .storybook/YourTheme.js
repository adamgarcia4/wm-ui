import Logo from '../src/images/wematch_logo@2x.png'
import { create } from '@storybook/theming';
import { themes } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'wematch ui storybook',
  brandImage: Logo,
	base: 'light',
	colorPrimary: '#2D3240',
  colorSecondary: '#FF0A28',
	
	// UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,
});