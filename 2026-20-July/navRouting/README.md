# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## VS Code Path Intellisense setup

This workspace is configured to work with the Path Intellisense extension in VS Code.

Install the extension globally from the Marketplace:

- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

The workspace settings disable the built-in TypeScript and JavaScript path suggestions so Path Intellisense can handle filename autocomplete consistently.

If you want the same behavior in other projects, add these settings to your user settings:

```json
{
	"typescript.suggest.paths": false,
	"javascript.suggest.paths": false
}
```

The extension also supports common mappings through `path-intellisense.mappings` and tsconfig `baseUrl` / `paths`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
