import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private gallery = [
  {
    id: 1,
    title: "Atardecer en la montaña en Esquel",
    description: "Una vista panorámica con tonos cálidos.",
    imageUrl: "/imagenes/atardecer-montana.jpg",
    tags: ["naturaleza", "paisaje"]
  },
  {
    id: 2,
    title: "Ciudad nocturna",
    description: "Luces y movimiento en la gran ciudad.",
    imageUrl: "/imagenes/ciudad-noche.png",
    tags: ["urbano", "noche"]
  },
  {
    id: 3,
    title: "Playa tranquila",
    description: "Arena blanca y mar cristalino.",
    imageUrl: "/imagenes/playa.png",
    tags: ["mar", "relax"]
  }
];

  obtenerListaProductos()
  {
    return this.gallery;
  }

}
