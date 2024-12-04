import { ReactNode } from "react";
import { IImage } from "./iPlan";

interface Subservice {
  name: string;
  id: string;
  title: ReactNode;
  description: string;
  items: string[];
  process?: string[];
  img: IImage;
}

interface Benefits {
  title: ReactNode;
  description: string;
  img: IImage;
  benefitsItems: BenefitsItems[];
}

interface BenefitsItems {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface dataService {
  title: ReactNode;
  img: IImage;
  description: string;
  subservices: Subservice[];
  benefits: Benefits;
  gallery: IImage[];
}
