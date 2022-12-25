import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

const config = ({ mode }) => {
  return defineConfig({
    plugins:
      mode === 'production'
        ? [eslintPlugin(), tsconfigPaths()]
        : [eslintPlugin(), tsconfigPaths(), reactRefresh()]
  })
}

export default config
