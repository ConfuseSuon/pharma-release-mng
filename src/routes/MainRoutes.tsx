import { lazy } from 'react';

// project imports

import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
// import { Outlet } from 'react-router';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// import New from 'views/utilities/New';

// ==============================|| MAIN ROUTING ||============================== //
const ApplicantPage = Loadable(lazy(() => import('../views/applicants/Applicants')));
const EditApplicants = Loadable(lazy(() => import('../views/applicants/EditApplicants')));
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          index: true,
          element: <DashboardDefault />
        }
      ]
    },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-typography',
    //       element: <UtilsTypography />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-color',
    //       element: <UtilsColor />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-shadow',
    //       element: <UtilsShadow />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-new',
    //       element: <New />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // },
    // {
    //   path: 'applicant-page',
    //   element: <ApplicantPage />
    // },

    // {
    //   path: 'applicant-page',
    //   element: <ApplicantPage />
    // }

    {
      path: 'applicants',
      children: [
        {
          index: true,
          element: <ApplicantPage />
        },
        {
          path: 'edit-applicants:id',
          element: <EditApplicants />
        }
      ]
    }
  ]
};

export default MainRoutes;
