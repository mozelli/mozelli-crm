"use client";

import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useLoginForm } from "../hooks/useLoginForm";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    onSubmit,
  } = useLoginForm();

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>E-mail</Label>
              <Input {...register("email")} />
              {errors.email && (
                <span className="text-sm text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Senha</Label>
              <Input type="password" {...register("password")} />
              {errors.password && (
                <span className="text-sm text-red-400">
                  {errors.password.message}
                </span>
              )}
              <Link
                href="#"
                className="text-xs text-right text-red-500 hover:text-red-600"
              >
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
  );
};

export default LoginForm;
