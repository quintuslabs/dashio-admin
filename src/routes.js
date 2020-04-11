import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { BaseLayout } from "./layouts";
// Route Views
import Dashboard from "./views/Dashboard/Dashboard";
import Buttons from "./views/Components/ButtonsContainer";
import Badge from "./views/Components/BadgeContainer";
import Card from "./views/Components/CardsContainer";
import Alert from "./views/Components/AlertContainer";
import ProgressBar from "./views/Components/ProgressBarContainer";
import Loader from "./views/Components/LoaderContainer";
import UIElements from "./views/UIElements/UIElements";
import Widgets from "./views/Widgets/WidgetsContainer";
import Forms from "./views/Forms/Forms";
import Tables from "./views/Tables/Tables";
import Pages from "./views/Pages/Pages";
import Charts from "./views/Charts/Charts";

var routes = [
  {
    path: "/dashio-admin",
    exact: true,
    layout: BaseLayout,
    component: () => <Redirect to="/dashio-admin/dashboard" />,
  },
  {
    path: "/dashio-admin/dashboard",
    layout: BaseLayout,
    component: Dashboard,
  },

  {
    path: "/dashio-admin/components/buttons",
    layout: BaseLayout,
    component: Buttons,
  },

  {
    path: "/dashio-admin/components/badge",
    layout: BaseLayout,
    component: Badge,
  },

  {
    path: "/dashio-admin/components/card",
    layout: BaseLayout,
    component: Card,
  },
  {
    path: "/dashio-admin/components/alert",
    layout: BaseLayout,
    component: Alert,
  },
  {
    path: "/dashio-admin/components/progressbar",
    layout: BaseLayout,
    component: ProgressBar,
  },
  {
    path: "/dashio-admin/components/loader",
    layout: BaseLayout,
    component: Loader,
  },

  {
    path: "/dashio-admin/ui-elements",
    layout: BaseLayout,
    component: UIElements,
  },
  {
    path: "/dashio-admin/widgets",
    layout: BaseLayout,
    component: Widgets,
  },
  {
    path: "/dashio-admin/forms",
    layout: BaseLayout,
    component: Forms,
  },
  {
    path: "/dashio-admin/tables",
    layout: BaseLayout,
    component: Tables,
  },
  {
    path: "/dashio-admin/pages",
    layout: BaseLayout,
    component: Pages,
  },

  {
    path: "/dashio-admin/charts",
    layout: BaseLayout,
    component: Charts,
  },
];

export default routes;
