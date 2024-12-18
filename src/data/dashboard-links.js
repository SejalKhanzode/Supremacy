import { ACCOUNT_TYPE } from "../utils/userRole";

export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard/admin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 2,
    name: "Manage Topic",
    path: "/dashboard/manage-topic",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
  {
    id: 3,
    name: "Manage Programming Question",
    path: "/dashboard/manage-programming-question",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Manage Quizz",
    path: "/dashboard/manage-quiz",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
  {
    id: 5,
    name: "Manage Interview Question",
    path: "/dashboard/manage-interview-question",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },

  {
    id: 6,
    name: "Dashboard",
    path: "/dashboard/student",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscDashboard",
  },
  {
    id: 7,
    name: "User Status",
    path: "/dashboard/user-status",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscSparkleFilled",
  },
];
