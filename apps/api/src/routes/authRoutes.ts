import { HTTP_STATUS, HttpResponse, isValidEmail } from "@petz/utils";
import { Router, Request, Response } from "express";
import { JWT, USERS } from "../data/AUTH";

const route = Router();

route.post("/login", (req: Request, res: Response) => {
  const success = new HttpResponse({});
  const error = new HttpResponse({ isError: true });
  const { email, password } = req.body;

  if (!email) {
    error.message = `No Email provided`;
    error.status = HTTP_STATUS.BAD_REQUEST;
    return res.status(error.status).json(error);
  }

  if (isValidEmail(email) === false) {
    error.message = `Provided email is invalid`;
    error.status = HTTP_STATUS.BAD_REQUEST;
    return res.status(error.status).json(error);
  }

  if (!password) {
    error.message = `No Password Provided`;
    error.status = HTTP_STATUS.BAD_REQUEST;
    return res.status(error.status).json(error);
  }

  // skipping for short time: should integrate a databse, hash password do all those sort of things
  if (!(email in USERS)) {
    error.message = `User do not exist`;
    error.data = { email };
    error.status = HTTP_STATUS.FORBIDDEN;
    return res.status(error.status).json(error);
  }

  if (USERS[email] !== password) {
    error.message = `Wrong password provided`;
    error.status = HTTP_STATUS.FORBIDDEN;
    return res.status(error.status).json(error);
  }

  // skipping for short time: should be generated using jwt library. for now using a constant
  success.data = { token: JWT };
  success.message = `Login successful user - ${email}`;
  success.status = HTTP_STATUS.OK;
  return res.status(success.status).json(success);
});

export default route;
