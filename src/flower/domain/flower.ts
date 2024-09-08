export class Flower {
  id: number | null;
  name: string;
  type: string;
  price: number;
  image: string;

  constructor(id: number | null, name: string, type: string, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.image = image;
  }
}
