/// <reference types="vite/client" />

// Declare Figma asset modules
declare module 'figma:asset/*' {
  const content: string;
  export default content;
}

// Declare environment variables
interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_SITE_NAME?: string;
  readonly VITE_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
