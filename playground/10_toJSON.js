const pet = {
  name: "Owlyn",
};

console.log(JSON.stringify(pet));

pet.toJSON = () => {
  return {};
};

console.log(JSON.stringify(pet));
