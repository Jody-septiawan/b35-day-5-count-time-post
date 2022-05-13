// OBJECT

const blog = {
  title: 'Tips Mengatasi Error saat Ngoding ',
  content: 'IT enthusiast pasti sudah tidak asing lagi dengan kata “Error”.',
  image: 'error.png',
  year: 2020,
};

// console.log(blog.year);
// console.log(blog['content']);

blog.image = 'error-ngoding.jpg';

blog.title = 'Tips Mengatasi Error saat Ngoding Javascript';

blog.author = 'Ivan Setiawan';

delete blog.content;

// console.log(blog);

// blog = 'Selamat Pagi';

// ARRAY

let person1 = 'Dwiki';
let person2 = 'Husni';
let person3 = 'Muzhaffar';

let persons = ['Dwiki', 'Husni', 'Muzhaffar'];

persons.push('Erika');
// persons.unshift('Erika');

persons.splice(1, 1);

persons[0] = 'Jemmy';

// console.log(persons);

// ARRAY OF OBJECT

let blogs = [
  {
    title: 'Tips Mengatasi Error saat Ngoding',
    content: 'IT enthusiast pasti sudah tidak asing lagi dengan kata “Error”.',
    image: 'error.png',
    year: 2020,
  },
  {
    title: 'Cara Mudah Fetch JSON Dari API',
    content: 'Kamu bisa dapat menggunakan fetch untuk melakukan fetching',
    image: 'json.png',
    year: 2017,
  },
];

blogs.push({
  title: '5 Situs Populer Belajar Coding',
  content: 'Coding adalah kegiatan menulis barisan kode',
  image: 'coding.png',
  year: 2019,
});

// console.log(blogs);
// console.log(blogs.length);

// for (let i = 0; i < blogs.length; i++) {
//   console.log(blogs[i].content);
//   console.log(blogs[i].year);
// }

blogs.forEach((data) => {
  console.log(data.content);
  console.log(data.year);
});
