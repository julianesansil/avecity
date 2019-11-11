# Avecity

## Sumário

1. [Checklist](#checklist)
2. [Release](#release)
3. [Instalação](#instalacao)
4. [Run](#run)
5. [Teste](#teste)
6. [Dependências](#dependencias)
7. [Outras informações](#outras-informacoes)

<a name="checklist"></a>

## Checklist

### Requisitos Mínimos

- [x] Criar uma cidade (com nome e nome do país).
- [x] Listar cidades cadastradas.
- [x] Criar uma localidade (com nome, tipo [Restaurante, Residencial, Outro], endereço e notas).
- [x] Listar localidades cadastradas.
- [x] Editar uma localidade.
- [x] Deletar uma localidade.

### Requisitos Bônus

- [x] Buscar uma localização usando uma API do Google.

### Conhecimentos Demonstrados

- Navegação por rotas com React Navigation.
- Gerenciamento de estados com Redux.
- Persistência de dados com Redux Persist.
- Aplicação de animação.
- Teste de componentes usando Jest (ContactItem).

<a name="release"></a>

## Release

- APK: https://github.com/julianesansil/avecity/releases/tag/0.0.1

<a name="instalacao"></a>

## Instalação

#### Programas e versões utilizadas:

1. JDK 8
2. Node: 10.16.0
3. Npm: 6.9.0
4. React Native: 0.61.3
5. Android Studio: 3.4.2
6. Xcode: 11.1
7. No Visual Studio Code, extensões: React Native Tools, ESLint, Prettier, vscode-styled-components

#### Preparação do ambiente:

- https://facebook.github.io/react-native/docs/getting-started (aba React Native CLI Quickstart)

#### Instalação das dependências do projeto:

- `npm install`
- `react-native link` (por via das dúvidas)
- E, para iOS, também executar: `cd ios && pod install`

<a name="run"></a>

## Run

- `npx react-native run-android` ou rodar o projeto da pasta `./android` no Android Studio
- `npx react-native run-ios` ou rodar o projeto `Avecity.xcworkspace` da pasta `./ios` no Xcode

<a name="teste"></a>

## Teste

- npm run test

<a name="dependencias"></a>

## Dependências

- ESLint: https://eslint.org/
- Prettier: https://prettier.io/
- Babel Import Root: https://github.com/entwicklerstube/babel-plugin-root-import
- TypeScript: https://www.typescriptlang.org/
- Rotas: https://reactnavigation.org/
- Redux: https://github.com/reduxjs/redux, https://github.com/reduxjs/react-redux
- Redux Persist: https://github.com/rt2zz/redux-persist
- Native Base (UI): https://nativebase.io/
- Styled Components: https://www.styled-components.com/
- Moment (datas): https://github.com/headzoo/react-moment
- Animação do header: https://github.com/maphongba008/react-native-animated-header
- Autocomplete do Google Places: https://www.npmjs.com/package/react-native-google-places-autocomplete
- Floating button: https://github.com/mastermoo/react-native-action-button

<a name="outras-informacoes"></a>

## Outras informações

- Normalização do estado do Redux: https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
