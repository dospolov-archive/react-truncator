/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_NAME: string,
  readonly VITE_HOST_DOMAIN: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}