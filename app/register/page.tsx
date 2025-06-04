import Link from "next/link";
import RegisterForm from "./form";

import { Button } from "@/components/ui/button";
import Confirm from "./confirm";

export default function Register() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-[350px]">
        <h1 className="text-4xl font-semibold text-center text-primary">
          Cadastro
        </h1>
        <p className="text-center text-sm font-medium text-stone-600">
          Preencha os campos abaixo.
        </p>
        <div className="mt-5 w-full">
          <RegisterForm />
        </div>
        <footer className="flex flex-wrap justify-center gap-4 mt-10 text-sm">
          <Link href="#" className="text-blue-600 hover:underline">
            Termos de uso
          </Link>
          <Link href="#" className="text-blue-600 hover:underline">
            Política de privacidade
          </Link>
          <p>2025 - Todos os direitos reservados</p>
        </footer>
      </div>
    </main>
  );
}
