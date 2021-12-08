import { TodoApi } from "./todo.api";
import { environment } from "../../../environments/environment";

export const todoService = new TodoApi(environment.baseUrl);
