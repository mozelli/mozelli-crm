import Link from "next/link";
import { Button } from "@/components/ui/button";

import LoginForm from "./form";

const Login = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-[350px]">
        <h1 className="text-6xl font-semibold text-center text-stone-600">
          <span className="text-primary">Mozelli</span> CRM
        </h1>
        <p className="text-center font-medium text-stone-600">
          Transforme cada oportunidade em resultado.
        </p>
        <div className="flex items-center mt-5 gap-4">
          <h3 className="text-lg text-lime-700 font-medium">
            <span className="text-stone-600">Cadastre-se</span>, é gratis!
          </h3>
          <Link href="/register">
            <Button
              className="bg-lime-600 font-medium hover:cursor-pointer"
              size="sm"
            >
              Cadastrar
            </Button>
          </Link>
        </div>
        <div className="mt-5 w-full">
          <LoginForm />
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
};

export default Login;
