interface AvatarProps {
  title: string;
  src: string;
}

const avatarsPath = "src/assets/images/avatars";

export const communityAvatars: AvatarProps[] = [
  {
    title: "Carros",
    src: `${avatarsPath}/community/cars.png`,
  },
  {
    title: "Desenhos",
    src: `${avatarsPath}/community/toons.png`,
  },
  {
    title: "Crazy",
    src: `${avatarsPath}/community/crazy.png`,
  },
  {
    title: "Fofos",
    src: `${avatarsPath}/community/cute.png`,
  },
  {
    title: "Animes",
    src: `${avatarsPath}/community/anime.png`,
  },
  {
    title: "Leitura",
    src: `${avatarsPath}/community/reading.png`,
  },
  {
    title: "Meu ovo",
    src: `${avatarsPath}/community/myEggs.png`,
  },
  {
    title: "My books",
    src: `${avatarsPath}/community/reading.png`,
  },
  {
    title: "Cafeeee",
    src: `${avatarsPath}/community/coffee.png`,
  },
];

export const friendAvatars: AvatarProps[] = [
  {
    title: "Fernando",
    src: `${avatarsPath}/friends/fernando.png`,
  },
  {
    title: "Ana",
    src: `${avatarsPath}/friends/ana.png`,
  },
  {
    title: "Carlos",
    src: `${avatarsPath}/friends/carlos.png`,
  },
  {
    title: "Vitor",
    src: `${avatarsPath}/friends/vitor.png`,
  },
  {
    title: "Matheus",
    src: `${avatarsPath}/friends/matheus.png`,
  },
  {
    title: "Ramos",
    src: `${avatarsPath}/friends/ramos.png`,
  },
  {
    title: "Eiji",
    src: `${avatarsPath}/friends/eiji.png`,
  },
  {
    title: "Julia",
    src: `${avatarsPath}/friends/julia.png`,
  },
  {
    title: "Carol",
    src: `${avatarsPath}/friends/carol.png`,
  },
];
