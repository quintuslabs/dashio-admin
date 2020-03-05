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
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: BaseLayout,
    component: Dashboard
  },

  {
    path: "/components/buttons",
    layout: BaseLayout,
    component: Buttons
  },

  {
    path: "/components/badge",
    layout: BaseLayout,
    component: Badge
  },

  {
    path: "/components/card",
    layout: BaseLayout,
    component: Card
  },
  {
    path: "/components/alert",
    layout: BaseLayout,
    component: Alert
  },
  {
    path: "/components/progressbar",
    layout: BaseLayout,
    component: ProgressBar
  },
  {
    path: "/components/loader",
    layout: BaseLayout,
    component: Loader
  },

  {
    path: "/ui-elements",
    layout: BaseLayout,
    component: UIElements
  },
  {
    path: "/widgets",
    layout: BaseLayout,
    component: Widgets
  },
  {
    path: "/forms",
    layout: BaseLayout,
    component: Forms
  },
  {
    path: "/tables",
    layout: BaseLayout,
    component: Tables
  },
  {
    path: "/pages",
    layout: BaseLayout,
    component: Pages
  },

  {
    path: "/charts",
    layout: BaseLayout,
    component: Charts
  }
];

export default routes;
