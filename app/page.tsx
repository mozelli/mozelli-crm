import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-[1200px] flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-[350px]">
        <h1 className="text-6xl font-semibold text-center text-stone-600">
          <span className="text-primary">Mozelli</span> CRM
        </h1>
        <p className="text-center font-medium text-stone-600">
          Transforme cada oportunidade em resultado.
        </p>
        <div className="mt-10 w-full">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Label>E-mail</Label>
                    <Input />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Senha</Label>
                    <Input type="password" />
                    <Link href="#" className="text-xs text-right text-red-500">
                      Escqueci minha senha
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="default" className="font-medium">
                      Entrar!
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <footer className="flex flex-wrap justify-center gap-4 mt-10 text-sm">
          <p>2025 - Todos os direitos reservados</p>
          <Link href="#" className="text-blue-600">
            Termos de uso
          </Link>
          <Link href="#" className="text-blue-600">
            Política de privacidade
          </Link>
        </footer>
      </div>
    </main>
  );
}
