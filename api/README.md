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

## Instalação
1. Clone o repositório.
2. Instale as dependências usando `npm install`.

## Antes de usar
1. Crie um arquivo chamado `.env` na raiz do projeto.
2. No arquivo `.env`, defina as variáveis de ambiente necessárias para a configuração da aplicação.
    - `DB_SCHEMA=mysql`
    - `DB_HOST=localhost`
    - `DB_PORT=5432`
    - `DB_USER=usuario`
    - `DB_PASSWORD=senha`
    - `DB_NAME=nome_do_banco`
    - `DB_URL="${DB_SCHEMA}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"`
3. A variável DB_URL não precisa adaptar no caso de usar o mysql pois já estará configurado com as outras variáveis.

## Uso
1. Execute a aplicação usando `npm start`.
2. Acesse a aplicação em `http://localhost:3000`.

## Testes
Para rodar os testes, utilize o comando `npm test`. Certifique-se de que o banco de dados está funcionando antes de testar.

## Contribuição
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push da sua branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença
Este projeto está licenciado sob a GPL-3.0 license.

## Contato
Se tiver dúvidas, entre em contato em [mailto:jamersonze54@gmail.com].