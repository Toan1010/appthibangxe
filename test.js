function getRandomItems(list, n) {
  const shuffled = list.slice(); // Create a copy of the original list

  let i = list.length;
  let temp, randomIndex;

  while (i > 0) {
    randomIndex = Math.floor(Math.random() * i); // Generate a random index
    i--;

    // Swap elements between current index and random index
    temp = shuffled[i];
    shuffled[i] = shuffled[randomIndex];
    shuffled[randomIndex] = temp;
  }

  return shuffled.slice(0, n); // Return the first n items from the shuffled list
}

// Example usage:
const items = { 
  news: "news",
  Abc: "abc",bds: "bds",dsds: "ds",
};
items['fdjk']='dsed'

console.log(items);
