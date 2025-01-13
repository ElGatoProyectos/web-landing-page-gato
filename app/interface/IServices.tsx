// Servicios en el home
export interface IServicesHome {
  name: string;
  path: string;
  slug: string;
  description: string;
  icon_primary_color: IImage;
  icon_secondary_color: IImage;
}

// servicios en servicios(lista)
export interface IServicesView {
  name: string;
  path: string;
  slug: string;
  service_info: IServiceInfoView;
}

export interface TSubservice {
  name: string;
  description: string;
  img: IImage;
  items: { description: string }[];
  proceso: { description: string }[];
}

export interface BenefitsItems {
  icon: IImage;
  title: string;
  description: string;
}

export interface IServiceInfoView {
  description: string;
  benefits_main: IBenefitsMain[];
  benefits_others: { description: string }[];
  img_v: IImage;
  img_h: IImage;
}

export interface IBenefitsMain {
  icon_primary_color: IImage;
  description: string;
}

export interface acfService {
  name: string;
  path: string;
  icon_primary_color: IImage;
  icon_secondary_color: IImage;
  service_detail: serviceDetal;
}

export interface serviceDetal {
  banner_title: {
    part_1: string;
    part_2: string;
  };
  banner_description: string;
  banner_img: IImage;
  section_subservices: TSubservice[];
  benefits: BenefitsItems[];
  img_benefits: IImage;
  gallery: IImage[];
}

export interface dataService {
  slug: string;
  acf: acfService;
}

export interface IImage {
  id: number;
  title: string;
  alt: string;
  width: number;
  height: number;
  url: string;
}
