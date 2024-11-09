"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const bike_route_1 = require("../modules/bike/bike.route");
const rental_route_1 = require("../modules/Rental/rental.route");
const auth_route_1 = require("../modules/auth/auth.route");
const payement_routes_1 = require("../modules/payement/payement.routes");
const coupon_route_1 = require("../modules/coupon/coupon.route");
const cart_route_1 = require("../modules/add-cart/cart.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: user_route_1.userRoute,
    },
    {
        path: '/bikes',
        route: bike_route_1.bikeRoute,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoute
    },
    {
        path: '/users',
        route: user_route_1.userRoute
    },
    {
        path: '/rentals',
        route: rental_route_1.rentalRoute
    },
    {
        path: '/payement',
        route: payement_routes_1.payemtRoute
    },
    {
        path: '/coupon',
        route: coupon_route_1.CouponRoute
    },
    {
        path: '/cart',
        route: cart_route_1.cartRouter
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
