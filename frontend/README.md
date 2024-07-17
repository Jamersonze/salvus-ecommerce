# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Salvus frontend

## Descrição
Este projeto é um frontend que consome a API construida em resposta ao teste técnico da Salvus. A aplicação permite que os usuários pesquisem por produtos, visualizem detalhes do produto, adicionem registros de produtos e os apaguem.

## Antes de instalar
Defina a variável `VITE_API_HOST` criando um arquivo `.env` com o endereço do backend.
Por padrão seu valor é `http://localhost:3000`

## Instalação
1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.

## Como Rodar
Execute `npm start` para iniciar a aplicação.

## Tecnologias Utilizadas
- Vite
- React
- Typescript
- TailwindCss
- Shadcn UI

## Contribuição
Qualquer contribuição é bem-vinda! Abra uma issue ou envie um pull request.

## Licença
Este projeto está sob a licença GNU v3. Veja o arquivo LICENSE para mais detalhes.