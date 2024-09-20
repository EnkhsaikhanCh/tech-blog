import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const ActionButtonComponent = ({ href }: { href: string }) => {
  return (
    <Link href={href} passHref>
      <Button>
        <ArrowLeft className="mr-2 h-4 w-4" />
        <p>Back to Articles</p>
      </Button>
    </Link>
  );
};
