import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { bikeRoute } from "../modules/bike/bike.route";
import { rentalRoute } from "../modules/Rental/rental.route";
import { authRoute } from "../modules/auth/auth.route";

const router = Router();

const moduleRoutes = [

    {
        path: '/auth',
        route: userRoute,
    },
    {
        path: '/bikes',
        route: bikeRoute,
    },
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/rentals',
        route: rentalRoute
    }

]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;