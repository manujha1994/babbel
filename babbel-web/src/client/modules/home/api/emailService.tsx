import { FormData } from "../types";
import { HandleApiRequest } from "./utils";

export const submitEmailForm = async (data: FormData) =>
  HandleApiRequest<{ email: string }>("/email/derive", "post", data);
