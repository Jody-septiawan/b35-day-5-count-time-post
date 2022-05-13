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
      ${data.postedAt} | ${data.author}
      </div>
      <p>${data.content}</p>
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
