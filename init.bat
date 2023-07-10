@echo off
if not exist "node_modules" call npm i -D @minecraft/server@1.3.0-beta.1.20.0-preview.25

(
    echo @echo off
    echo call tsc -w
) > TS-compiler.bat

(
    echo {
    echo   "compilerOptions": {
    echo     "module": "ES2020",
    echo     "target": "ES2021",
    echo     "moduleResolution": "Node",
    echo     "allowSyntheticDefaultImports": true,
    echo     "baseUrl": "./src",
    echo     "rootDir": "./src",
    echo     "outDir": "./scripts",
    echo     "strict": true,
    echo     "forceConsistentCasingInFileNames": true,
    echo   },
    echo   "exclude": [ "node_modules" ],
    echo   "include": [ "src" ]
    echo }
) > tsconfig.json