import productJowar from "@/assets/product-jowar.jpg";
import productFoxtail from "@/assets/product-foxtail.jpg";
import productBrowntop from "@/assets/product-browntop.jpg";
import productPearl from "@/assets/product-pearl.jpg";
import productBarnyard from "@/assets/product-barnyard.jpg";
import productKodo from "@/assets/product-kodo.jpg";
import productLittle from "@/assets/product-little.jpg";

export interface Product {
  id: string;
  name: string;
  teluguName: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: "jowar", name: "Jowar Millets", teluguName: "జొన్నలు", price: 75, image: productJowar },
  { id: "foxtail", name: "Foxtail Millets", teluguName: "కొర్రలు", price: 110, image: productFoxtail },
  { id: "browntop", name: "Brown Top Millets", teluguName: "అండుకొర్రలు", price: 200, image: productBrowntop },
  { id: "pearl", name: "Pearl Millets", teluguName: "సజ్జలు", price: 75, image: productPearl },
  { id: "barnyard", name: "Banyard Millets", teluguName: "ఉదలు", price: 125, image: productBarnyard },
  { id: "kodo", name: "Kodo Millets", teluguName: "అరికలు", price: 120, image: productKodo },
  { id: "little", name: "Little Millets", teluguName: "సామలు", price: 130, image: productLittle },
];
