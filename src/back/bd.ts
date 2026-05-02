const list = [
  {
    id: 1,
    title: "Frontend Tasks",
    description: "Tasks related to UI development",
    data: "2026-05-02",
    tasks: [
      {
        id: 1,
        title: "Create login page",
        description: "Build login UI with validation",
        status: "andamento",
        authorId: 101,
        listId: 1,
        createdAt: "2026-05-01",
        finishedAt: "2026-09-01",
      },
      {
        id: 2,
        title: "Implement dashboard",
        description: "Main dashboard layout",
        status: "andamento",
        authorId: 102,
        listId: 1,
        createdAt: "2026-05-01",
        finishedAt: "2026-07-01",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Tasks",
    description: "API and database work",
    data: "2026-05-01",
    tasks: [
      {
        id: 3,
        title: "Setup Express server",
        description: "Initial server structure",
        status: "concluida",
        authorId: 201,
        listId: 2,
        createdAt: "2026-04-30",
        finishedAt: "2026-05-01",
      },
      {
        id: 4,
        title: "Create CRUD endpoints",
        description: "Implement routes for lists and tasks",
        status: "andamento",
        authorId: 202,
        listId: 2,
        createdAt: "2026-05-01",
        finishedAt: "2026-06-01",
      },
    ],
  },
  {
    id: 3,
    title: "DevOps",
    description: "Infrastructure and deployment",
    data: "2026-04-30",
    tasks: [],
  },
];

export default list;
