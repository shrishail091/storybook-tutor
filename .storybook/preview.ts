import type { Preview } from "@storybook/react";
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

const my_viewport = {
  FHD : {
    name : 'iphone',
    styles : {
      width : "320px",
      height : "760px",
    }
  }
}


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport:{
      viewports: INITIAL_VIEWPORTS
    },
  },
};

export default preview;
