import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Confirm = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-[350px]">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>Parabéns!</AlertTitle>
          <AlertDescription>
            Seu cadastro foi realizado com sucesso.
          </AlertDescription>
        </Alert>
      </div>
    </main>
  );
};

export default Confirm;
