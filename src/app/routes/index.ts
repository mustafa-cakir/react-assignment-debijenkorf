import { URL_HOMEPAGE } from '../../common/constants';
import { IRoutes } from '../types';
import Homepage from '../../screens/Homepage';

const routes: IRoutes = [
    {
        path: URL_HOMEPAGE,
        Component: Homepage,
    },
    /**
     * Other routes will go here...
     */
];

export default routes;
