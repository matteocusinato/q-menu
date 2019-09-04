import { Config } from '@stencil/core';
import {sass} from "@stencil/sass";

export const config: Config = {
  namespace: 'qsinato',
  globalStyle: 'src/global/app.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '**/*.scss' }
      ]
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass()
  ]
};
