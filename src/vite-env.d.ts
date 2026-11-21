interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_STUDENT_NAME: string
  readonly VITE_STUDENT_NIM: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
