import { images } from "../../constants/imageAssets";

export const products = [
  {
    id: 1,
    title: "Pizza Margherita",
    image: images.pizza,
    price: 12.99,
    rating: {
      rate: 4.7,
      count: 230,
      topComment: "Massa fina, molho delicioso e muito queijo!",
    },
  },
  {
    id: 2,
    title: "Hambúrguer Artesanal",
    image: images.burger,
    price: 10.5,
    rating: {
      rate: 4.3,
      count: 180,
      topComment: "Suculento e bem temperado, recomendo!",
    },
  },
  {
    id: 3,
    title: "Açaí com Granola",
    image: images.acai,
    price: 8.75,
    rating: {
      rate: 4.9,
      count: 150,
      topComment: "Refrescante e nutritivo, perfeito para o pós-treino.",
    },
  },
  {
    id: 4,
    title: "Sushi Variado",
    image: images.sushi,
    price: 18.9,
    rating: {
      rate: 4.8,
      count: 200,
      topComment: "Peixes frescos e apresentação impecável.",
    },
  },
  {
    id: 5,
    title: "Tacos Mexicanos",
    image: images.tacos,
    price: 9.5,
    rating: {
      rate: 4.5,
      count: 165,
      topComment: "Muito saborosos e com bastante recheio!",
    },
  },
  {
    id: 6,
    title: "Salada Caesar",
    image: images.salada,
    price: 7.8,
    rating: {
      rate: 4.2,
      count: 90,
      topComment: "Leve e crocante, ótima opção saudável.",
    },
  },
  {
    id: 7,
    title: "Frango Xadrez",
    image: images.frango,
    price: 11.25,
    rating: {
      rate: 4.6,
      count: 120,
      topComment: "Bem temperado e com ótimo equilíbrio entre doce e salgado.",
    },
  },
];
