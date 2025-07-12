import { Router } from "express";
import { registeredUser } from "../controllers/user.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name:"coverImage",
            maxCount: 1
        },
    ]), registeredUser)

export default router