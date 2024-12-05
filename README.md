# Backend - To-Do List com Drag-and-Drop

Este é o backend da aplicação **To-Do List** com funcionalidades de **drag-and-drop** para reordenar tarefas. O backend é construído com **Node.js**, **Fastify**, **Prisma** (para ORM) e oferece uma API RESTful para manipulação das tarefas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Fastify**: Framework web para Node.js, utilizado para criar APIs de forma rápida e eficiente.
- **Prisma**: ORM para manipulação do banco de dados.
- **MySQL**: Banco de dados para armazenar as tarefas.
- **dotenv**: Biblioteca para gerenciar variáveis de ambiente.

## Funcionalidades da API

- **Adicionar uma nova tarefa**: Recebe o nome e a prioridade da tarefa.
- **Listar todas as tarefas**: Retorna todas as tarefas armazenadas no banco de dados.
- **Atualizar o índice de uma tarefa**: Permite reordenar as tarefas utilizando o índice. -Implementando.
- **Atualizar dados de uma tarefa**: Atualiza o nome e a prioridade de uma tarefa.
- **Excluir uma tarefa**: Remove uma tarefa pelo seu ID.

## Instruções para rodar o projeto

``` bash
git clone https://github.com/AlissonDevPort/DragnDrop-Todo-API
.env DATABASEURL= mysql://USUARIO:SENHA@localhost:3306/node_db
npm install
npx prisma migrate dev
npm run dev
```