"use client";

import { useState } from "react";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { useRegisterForm } from "@/app/hooks/useRegisterForm";

const RegisterForm = () => {
  const [accept, setAccept] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    onSubmit,
  } = useRegisterForm();

  return (
    <Card className="shadow">
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
            </div>
            <div className="flex flex-col gap-2">
              <Label>Repita a senha</Label>
              <Input type="password" {...register("retypePassword")} />
              {errors.retypePassword && (
                <span className="text-sm text-red-400">
                  {errors.retypePassword.message}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                checked={accept}
                onCheckedChange={(value) => setAccept(!!value)}
              />
              <Label htmlFor="terms">Aceito os termos e condições.</Label>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="default"
                className="font-medium hover:cursor-pointer"
                disabled={!accept}
              >
                Cadastrar!
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
