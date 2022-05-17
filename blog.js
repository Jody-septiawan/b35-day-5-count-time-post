const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let blogs = [];

function addBlog() {
  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let image = document.getElementById('input-blog-image').files[0];

  image = URL.createObjectURL(image);

  let blog = {
    title: title,
    content: content,
    image: image,
    author: 'Jody Septiawan',
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlogs();
}

function renderBlogs() {
  let blogContainer = document.getElementById('contents');

  blogContainer.innerHTML = '';

  blogs.forEach((data) => {
    blogContainer.innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data.image}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank"
          >${data.title}</a
        >
      </h1>
      <div class="detail-blog-content">
      ${getFullTime(data.postedAt)} | ${data.author}
      </div>
      <p>${data.content}</p>
      <div style="text-align: right; color: grey">${getDistanceTime(
        data.postedAt
      )}</div>
    </div>
  </div>`;
  });

  //   for (let i = 0; i < blogs.length; i++) {
  //     blogContainer.innerHTML += `<div class="blog-list-item">
  //   <div class="blog-image">
  //     <img src="${blogs[i].image}" alt="" />
  //   </div>
  //   <div class="blog-content">
  //     <div class="btn-group">
  //       <button class="btn-edit">Edit Post</button>
  //       <button class="btn-post">Post Blog</button>
  //     </div>
  //     <h1>
  //       <a href="blog-detail.html" target="_blank"
  //         >${blogs[i].title}</a
  //       >
  //     </h1>
  //     <div class="detail-blog-content">
  //     ${blogs[i].postedAt} | ${blogs[i].author}
  //     </div>
  //     <p>${blogs[i].content}</p>
  //   </div>
  // </div>`;
  //   }
}

function getFullTime(time) {
  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();
  let hour = time.getHours();
  let minute = time.getMinutes();

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (minute < 10) {
    minute = '0' + minute;
  }

  const fullTime = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`;

  return fullTime;
}

function getDistanceTime(time) {
  const timeNow = new Date();
  const timePost = new Date(time);

  const distance = timeNow - timePost;

  const milisecondsInDay = 1000 * 60 * 60 * 24;
  const distanceDay = Math.floor(distance / milisecondsInDay);

  if (distanceDay >= 1) {
    return `${distanceDay} day ago`;
  } else {
    const milisecondsInHour = 1000 * 60 * 60;
    const distanceHour = Math.floor(distance / milisecondsInHour);

    if (distanceHour >= 1) {
      return `${distanceHour} hours ago`;
    } else {
      const milisecondsInMinute = 1000 * 60;
      const distanceMinute = Math.floor(distance / milisecondsInMinute);

      if (distanceMinute >= 1) {
        return `${distanceMinute} minutes ago`;
      } else {
        const milisecondsInSeconds = 1000;
        const distanceSeconds = Math.floor(distance / milisecondsInSeconds);
        return `${distanceSeconds} seconds ago`;
      }
    }
  }
}

setInterval(() => {
  renderBlogs();
}, 1000);

// setTimeout(() => {
//   alert('Selamat Pagi 👨🏻‍💻');
// }, 5000);

// let iconElement;

// icon.forEach((data)=>{
//   iconElement += data
// })

// let project = {
//   tech: iconElement
// }
