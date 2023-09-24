import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Index from './routes';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';

export const Paths = {
  root: '/',
  contactDetail: 'contacts/:contactId',
  contactEdit: 'contacts/:contactId/edit',
  contactDestroy: 'contacts/:contactId/destroy',
} as const;

export const router = createBrowserRouter([
  {
    path: Paths.root,
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      // This is a pathless route
      {
        // This `errorElement` will be common to all of its children routes
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: Paths.contactDetail,
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: Paths.contactEdit,
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: Paths.contactDestroy,
            action: destroyAction,
          },
        ],
      },
    ],
  },
]);
