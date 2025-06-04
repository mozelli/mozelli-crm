import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, registerSchema } from "../schemas/registerSchema";
import { register } from "../services/registerService";

export function useRegisterForm() {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    register(data)
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
