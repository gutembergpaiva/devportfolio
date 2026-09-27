# DevPortfolio

O DevPortfolio é uma aplicação web responsiva desenvolvida para gerenciamento e compartilhamento de portfólios de desenvolvedores.

A plataforma permite que usuários criem uma conta, cadastrem e gerenciem seus projetos, disponibilizem um portfólio público e recebam mensagens de visitantes interessados em seus trabalhos.

## Funcionalidades

- Cadastro de usuários
- Login e logout
- Autenticação com Firebase Authentication
- Rotas protegidas
- Dashboard do usuário
- Cadastro de projetos
- Edição de projetos
- Exclusão de projetos
- Listagem de projetos
- Portfólio público individual
- Visualização de projetos da comunidade
- Formulário de contato
- Mensagens direcionadas ao proprietário do portfólio
- Armazenamento dos dados no Cloud Firestore
- Interface responsiva

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Bootstrap
- React Router
- Firebase Authentication
- Cloud Firestore

## Firebase

O Firebase é utilizado como backend da aplicação.

O Firebase Authentication é responsável pelo cadastro e autenticação dos usuários.

O Cloud Firestore é utilizado para armazenar os projetos e as mensagens enviadas através dos portfólios.

## Como executar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd portfolio-dev
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois acesse o endereço exibido pelo Vite no terminal.

## Build

Para gerar a versão de produção:

```bash
npm run build
```

## Autor

Gutemberg Paiva de Oliveira Medeiros