export interface IPlan {
    plan_name: string;
    short_description: string;
    long_description?: string;
    items: {
        item_name?: string;
        sub_items?: { name_sub_item?: string[] }[];
    }[];
    price: string;
}

export interface IImage {
    id: number;
    title: string;
    alt: string;
    width: number;
    height: number;
    url: string;
  }