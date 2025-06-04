import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginData } from "../schemas/loginSchema";
import { login } from "../services/loginService";

export function useLoginForm() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    login(data)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    ...form,
    onSubmit,
  };
}
