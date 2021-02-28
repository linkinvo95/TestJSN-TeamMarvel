import Admin from "./pages/Admin";
import Heros from "./pages/Heros";
import UserHero from "./pages/UserHero";
import { ADMIN_ROUTE, HEROS_ROUTE, USER_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: HEROS_ROUTE,
        Component: Heros
    },
    {
        path: USER_ROUTE + '/:id',
        Component: UserHero
    }
    
]
