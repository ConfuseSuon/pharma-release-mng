import {defineConfig, resolveEnvPrefix} from "vite";
import react from  '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig(
    {
      envPrefix: 'REACT_APP_',
     
        plugins: [
            react(),
            envCompatible(),
           tsconfigPaths(),
          ],
        build:{
            sourcemap:true,
            outDir: 'build',
        }
        ,server:{
            port: 4200,
        }
    }
)