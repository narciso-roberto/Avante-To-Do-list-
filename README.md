# Case Técnico - Desenvolvedor(a) de Software

## Descrição

Este projeto consiste em uma interface web desenvolvida com React e TypeScript. Trata-se de uma aplicação de lista de tarefas (todo list), na qual o usuário pode criar tarefas e organizá-las em diferentes listas.

Essa abordagem permite uma melhor organização e hierarquização das tarefas, facilitando o gerenciamento e a visualização das atividades.
## Tecnologias utilizadas

React, Typescript, css, html

## Funcionalidades

● exibir as listas criadas;<br/>
● adicionar uma nova lista;<br/>
● editar uma lista existente;<br/>
● remover uma lista;<br/>
● acessar as tarefas de uma lista;<br/>
● exibir uma lista de tarefas;<br/>
● adicionar uma nova tarefa;<br/>
● editar uma tarefa existente;<br/>
● remover uma tarefa;<br/>
● alterar o status de uma tarefa.<br/>

## Funcionalidades opicionais implementadas

● Filtro de tarefas por status;<br/>
● Validação dos campos;<br/>
● Uso de Docker no back-end;<br/>
● Persistência em banco de dados;<br/>
● Documentação da API;<br/>
● Layout responsivo;<br/>
● Organização em componentes, services ou módulos;<br/>


## Como executar o projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o projeto

```bash
npm run dev
```

### 4. Acessar no navegador

Abra o endereço exibido no terminal, normalmente:

```
http://localhost:5173
```

---

## 📌 Pré-requisitos

- Node.js instalado (versão LTS recomendada)

## Decisões tomadas

Explique decisões importantes, como:

- Cada lista possui 0 ou mais tarefas
- Você pode filtrar as tarefas por status
- Ao apagar uma lista, você apaga todas as tarefas relacionadas a elas
- Para facilitar o desenvolvimento, ao realizar o fetch das listas/tarefas o codigo armazena elas em um contexto que engloba toda a aplicação
