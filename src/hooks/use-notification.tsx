import { useToast } from "@/hooks/use-toast";
import { Check, AlertCircle, Info } from "lucide-react";

export const useNotification = () => {
  const { toast } = useToast();

  return {
    success: (title: string, description?: string) => {
      toast({
        title,
        description,
        className: "bg-green-50 border-green-200",
        icon: <Check className="h-4 w-4 text-green-500" />,
      });
    },
    error: (title: string, description?: string) => {
      toast({
        title,
        description,
        variant: "destructive",
        icon: <AlertCircle className="h-4 w-4" />,
      });
    },
    info: (title: string, description?: string) => {
      toast({
        title,
        description,
        className: "bg-blue-50 border-blue-200",
        icon: <Info className="h-4 w-4 text-blue-500" />,
      });
    },
  };
};