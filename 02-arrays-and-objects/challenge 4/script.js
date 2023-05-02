
let library = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "A Game Of Thrones",
    author: "George R. R. Martin",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "The Color Out Of Space",
    author: "H.P. Lovecraft",
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
];

library.forEach(book => book.status.read = true);
const [{ title: firstBook, ...rest }] = library;
console.log(firstBook); // "The Great Gatsby"
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
console.log(library);