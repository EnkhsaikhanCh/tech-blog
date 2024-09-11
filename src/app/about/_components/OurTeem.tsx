import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import placeholder from "../../../../public/placeholder.svg";

export const OurTeam = () => {
  const TeamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & Editor-in-Chief",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "John Smith",
      role: "Senior Tech Writer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Alice Johnson",
      role: "AI & Machine Learning Expert",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Bob Williams",
      role: "Cybersecurity Analyst",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="mb-20">
      <h2 className="mb-8 text-3xl font-semibold text-gray-900">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TeamMembers.map((member, index) => (
          <Card key={index} className="h-full shadow-none">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Image
                src={placeholder}
                alt={member.name}
                className="mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
