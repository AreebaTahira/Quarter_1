



interface Book {
    title: string;
    author: string;
    year: number;
  }
  
  
  let books: Book[] = [
    {
      title: "Moth Smoke",
      author: "Mohsin Hamid",
      year: 2000,
    },
    {
      title: "The Reluctant Fundamentalist",
      author: "Mohsin Hamid",
      year: 2007,
    },
    {
      title: "I Am Malala",
      author: "Malala Yousafzai",
      year: 2013,
    },
    {
      title: "Train to Pakistan",
      author: "Khushwant Singh",
      year: 1956,
    },
  ];
  
  
  console.log(books);
  
  
  console.log(books.length);
  
  console.log(books[0]);
  
  console.log(books[books.length - 1]);
  