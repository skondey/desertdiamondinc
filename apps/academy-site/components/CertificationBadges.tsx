import Image from "next/image";
import { certifications } from "@desertdiamond/shared/tokens";

export default function CertificationBadges() {
  return (
    <div className="bg-dd-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-dd-black mb-8">
          Learn from Certified Professionals
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center">
              <Image
                src={cert.imagePath}
                alt={cert.alt}
                width={120}
                height={120}
                className="h-28 w-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
