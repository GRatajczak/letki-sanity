import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'lpo9jnfe',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    path: './**/*.{ts,tsx,js,jsx}',
    schema: './schemaTypes/extract.json',
    generates: './schemaTypes/types.ts',
  },
})
