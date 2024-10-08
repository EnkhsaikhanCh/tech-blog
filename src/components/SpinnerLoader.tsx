import { LoaderCircle } from "lucide-react";

export const SpinnerLoader = ({ label }: { label?: string }) => {
  return (
    <div className="flex items-center justify-center gap-2 font-semibold text-gray-500">
      <LoaderCircle className="animate-spin" />
      <p>{label}</p>
    </div>
  );
};
