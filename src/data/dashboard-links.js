import { ACCOUNT_TYPE } from "../utils/userRole";

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/admin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Manage Topic",
    path: "/dashboard/manage-topic",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Manage Programming Question",
    path: "/dashboard/manage-programming-question",
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
    name: "Manage Quizz",
    path: "/dashboard/manage-quiz",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
];
