# Salvus-API

## Descrição
Em resposta ao teste técnico da Salvus, este projeto consiste em uma API para um banco de dados que realiza operações CRUD (Create, Read, Update, Delete) utilizando o ORM Prisma. A API permite interagir com o banco de dados para criar, ler, atualizar e excluir registros.

A estrutura do projeto é testada utilizando o framework de testes Jest para garantir o correto funcionamento das operações CRUD e a integridade dos dados.

## Tecnologias Usadas

- NodeJS
- Jest
- Typescript
- Prisma
- Express
- Postgres

## Instalação
1. Clone o repositório.
2. Instale as dependências usando `npm install`.

## Antes de usar
1. Crie um arquivo chamado `.env` na raiz do projeto.
2. No arquivo `.env`, defina as variáveis de ambiente necessárias para a configuração da aplicação.
    - `POSTGRES_URL`
    - `POSTGRES_PRISMA_URL`
3. Caso use o localhost: defina ammbos com a string query: `"postgres://usuario:senha@host:porta/nome_do_db"`

## Uso
1. Execute a aplicação usando `npm start`.
2. Acesse a aplicação em `http://localhost:3000`.

## Endpoints
- GET:  `http://localhost:3000/products`
- POST: `http://localhost:3000/products`
    body: {
        name: string,
        description: string,
        price: number,
    }
    o Id e a data da criação são geradas automáticamente
-  PUT: `http://localhost:3000/products/:id`
    body: {
        name: string,
        description: string,
        price: number,
    }
    precisa apenas definir um dos três atributos para atualizar
-   DELETE: `http://localhost:3000/products/:id`

## Testes
Para rodar os testes, utilize o comando `npm test`. Certifique-se de que o banco de dados está funcionando antes de testar.

## Licença
Este projeto está licenciado sob a GPL-3.0 license.

## Contato
Se tiver dúvidas, entre em contato em [mailto:jamersonze54@gmail.com].