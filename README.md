# Case Técnico - Desenvolvedor(a) de Software

## Descrição

Breve explicação sobre o projeto desenvolvido.

## Tecnologias utilizadas

React, Typescript

## Funcionalidades

● exibir as listas criadas;
● adicionar uma nova lista;
● editar uma lista existente;
● remover uma lista;
● acessar as tarefas de uma lista;
● exibir uma lista de tarefas;
● adicionar uma nova tarefa;
● editar uma tarefa existente;
● remover uma tarefa;
● alterar o status de uma tarefa.

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
