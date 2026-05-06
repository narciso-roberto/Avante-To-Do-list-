const list = [
  {
    id: 1,
    title: "Frontend Tasks",
    description: "Tasks related to UI development",
    createdAt: new Date("2026-05-02T00:00:00"),
    tasks: [
      {
        id: 1,
        title: "Create login page",
        description: "Build login UI with validation",
        status: "andamento",
        listId: 1,
        createdAt: new Date("2026-05-01T00:00:00"),
        finishedAt: new Date("2026-09-01T00:00:00"),
      },
      {
        id: 2,
        title: "Implement dashboard",
        description: "Main dashboard layout",
        status: "andamento",
        listId: 1,
        createdAt: new Date("2026-05-01T00:00:00"),
        finishedAt: new Date("2026-07-01T00:00:00"),
      },
    ],
  },
  {
    id: 2,
    title: "Backend Tasks",
    description: "API and database work",
    createdAt: new Date("2026-05-01T00:00:00"),
    tasks: [
      {
        id: 3,
        title: "Setup Express server",
        description: "Initial server structure",
        status: "concluida",
        listId: 2,
        createdAt: new Date("2026-04-30T00:00:00"),
        finishedAt: new Date("2026-05-01T00:00:00"),
      },
      {
        id: 4,
        title: "Create CRUD endpoints",
        description: "Implement routes for lists and tasks",
        status: "andamento",
        listId: 2,
        createdAt: new Date("2026-05-01T00:00:00"),
        finishedAt: new Date("2026-06-01T00:00:00"),
      },
    ],
  },
  {
    id: 3,
    title: "DevOps",
    description: "Infrastructure and deployment",
    createdAt: new Date("2026-04-30T00:00:00"),
    tasks: [],
  },
];

export default list;
