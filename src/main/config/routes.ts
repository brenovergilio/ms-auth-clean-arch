import { Router } from "express";
import { AuthController } from "../../presentation/controllers/auth-controller/auth-controller";
import { UserController } from "../../presentation/controllers/user-controller/user-controller";
import { ExpressAdapter } from "../adapters/express-adapter";

const router = Router();

router.post('/login', ExpressAdapter.adapt(AuthController.login));
router.post('/verify-token', ExpressAdapter.adapt(AuthController.verifyToken));

router.post('/users', ExpressAdapter.adapt(UserController.store));
router.put('/users/:id', ExpressAdapter.adapt(UserController.update));
router.delete('/users/:id', ExpressAdapter.adapt(UserController.delete));

export default router;
