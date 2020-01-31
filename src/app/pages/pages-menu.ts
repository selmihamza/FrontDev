import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "FEATURES",
    group: true
  },
  {
    title: "Project",
    icon: "edit-2-outline",
    children: [
      {
        title: "List Project",
        link: "/pages/project/ListProject"
      },
      {
        title: "Add Project",
        link: "/pages/project/addProject"
      }
    ]
  }
  // {
  //   title: "Auth",
  //   icon: "lock-outline",
  //   children: [
  //     {
  //       title: "Login",
  //       link: "/auth/login"
  //     },
  //     {
  //       title: "Register",
  //       link: "/auth/register"
  //     },
  //     {
  //       title: "Request Password",
  //       link: "/auth/request-password"
  //     },
  //     {
  //       title: "Reset Password",
  //       link: "/auth/reset-password"
  //     },
  //     {
  //       title: "Logout",
  //       link: "/auth/logout"
  //     }
  //   ]
  // }
];
