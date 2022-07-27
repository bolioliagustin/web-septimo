import React from "react";
import Card from "./card";

const cards1 = [
  {
    id: 1,
    title: "Historia",
    image: "/card1.jpg",
    text: "Nuestro grupo fue fundado en el Colegio Alemán en Junio de 1964 con el objetivo de llevar el escultimo a la vida.",
    href: "/historia",
  },
  {
    id: 2,
    title: "Actualidad",
    image: "/card2.jpg",
    text: "Lorem Ipsun altogether in person no servers present in the world. Lorem Ipsum is the Lorem Ipsum of the Lorem Ipsum",
    href: "/",
  },
  {
    id: 3,
    title: "Objetivos ",
    image: "/card3.jpg",
    text: "Lorem Ipsun altogether in person no servers present in the world. Lorem Ipsum is the Lorem Ipsum of the Lorem Ipsum",
    href: "/",
  },
];

export const cards2 = [
  {
    id: 1,
    title: "Manada",
    image: "/card-manada.jpg",
    text: "Vive sus aventuras en torno a la mística del Libro de la Selva, aprendiendo a través del juego los principales valores en grupo.",
    href: "/manada",
  },
  {
    id: 2,
    title: "Tropa",
    image: "/card-tropa.jpg",
    text: "Comienzan a tener cada vez mayores responsabilidades, y comparten sus aventuras en equipos más pequeños.",
    href: "/tropa",
  },
  {
    id: 3,
    title: "Pioneros ",
    image: "/card-pioneros.jpg",
    text: "Comienzan a integrar el servicio como parte elemental de sus vidas en comunidad.",
    href: "/pioneros",
  },
  {
    id: 4,
    title: "Rovers",
    image: "/card-rovers.jpg",
    text: "Integran totalmente el servicio a sus acciones, y planifican su proyecto de vida en conjunto con sus compañeros.",
    href: "/rovers",
  },
  {
    id: 5,
    title: "Staff",
    image: "/card2.jpg",
    text: "Lorem Ipsun altogether present in the world. Lorem Ipsum is the Lorem Ipsum of the Lorem Ipsum",
    href: "/staff",
  },
  {
    id: 6,
    title: "Compadres",
    image: "/card-compadres.jpg",
    text: "Lorem Ipsun altogether in person no servers present in the world.",
    href: "/compadres",
  },
];

export function Cards1() {
  return (
    <div class="container-md">
      <div class="cards">
        {cards1.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageSource={card.image}
            text={card.text}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}

export function Cards2() {
  return (
    <div class="container-lg mb-4">
      <div class="cards-nosotros">
        {cards2.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageSource={card.image}
            text={card.text}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}
