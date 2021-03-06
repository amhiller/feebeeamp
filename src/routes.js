/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
 import Dashboard from "layouts/dashboard";
// import Tables from "layouts/tables";
// import Billing from "layouts/billing";
// import Notifications from "layouts/notifications";
import Projects from "layouts/projects";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import SignOut from "layouts/authentication/sign-out";
import Profile from "layouts/profile";
import ConfirmEmail from "layouts/authentication/confirm-email"
import Home from "layouts/home"
import LandingPagev1 from "layouts/landingPage"
import Profilev2 from "layouts/profilev2";
import EditProfile from "layouts/editprofile";
import CreateProject from "layouts/projects/createproject"
import Project from "layouts/projects/project";
import Crm from "layouts/crm";
import AddClient from "layouts/crm/addClient"
import Client from "layouts/crm/components/client";
import Test from "layouts/test"

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    visible: true
  },
  {
    type: "collapse",
    name: "projects",
    key: "projects",
    icon: <Icon fontSize="small">building</Icon>,
    route: "projects",
    component: <Projects />,
    visible: true
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    visible: false
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    visible: false
  },

  {
    type: "collapse",
    name: "Profilev2",
    key: "profilev2",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profilev2",
    component: <Profile />,
    visible: false
  },
  {
    type: "collapse",
    name: "confirm email",
    key: "confirm-email",
    icon: <Icon fontSize="small">fingerprint</Icon>,
    route: "/authentication/confirm-email",
    component: <ConfirmEmail />,
    visible: false
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/",
    component: <Home />,
    visible: false
  },
  {
    type: "collapse",
    name: "LandingPage",
    key: "landingpage",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <LandingPagev1 />,
    visible: false
  },
  {
    type: "collapse",
    name: "profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profilev2 />,
    visible: true
  },
  {
    type: "collapse",
    name: "EditProfile",
    key: "edit-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/edit-profile",
    component: <EditProfile />,
    visible: false,
  },

  {
    type: "collapse",
    name: "Create Project",
    key: "create-project",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/create-project",
    component: <CreateProject />,
    visible: false
  },
  {
    type: "collapse",
    name: "Project",
    key: "project",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/projects/:projectId",
    component: <Project />,
    visible: false
  },
  {
    type: "collapse",
    name: "Client",
    key: "client",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/crm/:crmId",
    component: <Client />,
    visible: false
  },
  {
    type: "collapse",
    name: "Crm",
    key: "crm",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/crm",
    component: <Crm />,
    visible: true
  },
  {
    type: "collapse",
    name: "Add Client",
    key: "add-client",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/crm/add-client",
    component: <AddClient />,
    visible: false
  },
  {
    type: "collapse",
    name: "Test",
    key: "test",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/test",
    component: <Test />,
    visible: false
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-out",
    component: <SignOut />,
    visible: true
  }
];

export default routes;
