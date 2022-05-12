import { themes } from '@storybook/theming';

// or global addParameters
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.light,
  },
};