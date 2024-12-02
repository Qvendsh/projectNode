"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRouter = void 0;
const express_1 = require("express");
const car_controller_1 = require("../controllers/car.controller");
const error_middleware_1 = require("../middlewares/error.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authorize_middleware_1 = require("../middlewares/authorize.middleware");
const role_type_enum_1 = require("../enum/role-type-enum");
const carRouter = (0, express_1.Router)();
exports.carRouter = carRouter;
carRouter.get('/', car_controller_1.getCars);
carRouter.get('/:id', car_controller_1.getCarById);
carRouter.post('/', auth_middleware_1.authenticateUser, (0, authorize_middleware_1.authorizeRole)(role_type_enum_1.RoleTypeEnum.Seller), car_controller_1.createCar);
carRouter.put('/:id', auth_middleware_1.authenticateUser, (0, authorize_middleware_1.authorizeRole)(role_type_enum_1.RoleTypeEnum.Seller), car_controller_1.updateCar);
carRouter.delete('/:id', auth_middleware_1.authenticateUser, (0, authorize_middleware_1.authorizeRole)(role_type_enum_1.RoleTypeEnum.Seller), car_controller_1.deleteCar);
carRouter.post('/create', auth_middleware_1.authenticateUser, car_controller_1.createCarListing);
carRouter.put('/edit', auth_middleware_1.authenticateUser, car_controller_1.editCarListing);
carRouter.use(error_middleware_1.errorHandler);