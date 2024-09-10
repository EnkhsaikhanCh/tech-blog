import Image from "next/image";
import placeholder from "../../../../public/placeholder.svg";
import { Card } from "@/components/ui/card";

export const LocationCard = () => {
  return (
    <Card className="rounded-lg bg-white p-6 shadow">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">Our Location</h3>
      <div className="aspect-w-16 aspect-h-9">
        <Image
          width={100}
          height={100}
          src={placeholder}
          alt="Map"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </Card>
  );
};
