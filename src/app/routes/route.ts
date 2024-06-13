import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { bikeRoute } from "../modules/bike/bike.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: userRoute,
    },
    {
        path: '/bikes',
        route: bikeRoute,
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;