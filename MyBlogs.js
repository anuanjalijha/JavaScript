// Problem statement
// You're developing a webpage that displays a list of blog posts. Each blog post should have a title, a date, and some text content.

// You want to use JavaScript to create a new blog post element and append it to the blog list, for each blog post in an array of blog data.


// Objective:

// 1. Write a function called addBlog that does the following:

// Accepts one parameter, "blog", which is an object representing a single blog post. The object has the following properties:

// a. title: a string representing the title of the blog post.
// b. date: a string representing the date of the blog post.
// c. content: a string representing the content of the blog post.
// 2. Creates a new div element with the class blog-post.

// 3. Creates a new div element with the class blog-header.

// 4. Creates a new h2 element with the class blog-title and the text of the title property.

// 5. Creates a new p element with the class blog-date and the text of the date property.

// 6. Creates a new p element with the class blog-content and the text of the content property.

// 7. Appends the h2 and p elements as children to the div element with the class blog-header.

// 8. Appends the div element with the class blog-header as a child to the div element with the class blog-post.

// 9. Appends the p element with the class blog-content as a child to the div element with the class blog-post.

// 10. Appends the div element with the class blog-post as a child node to the existing ul element with the class blog-list.


// The visual representation of the structure is as follows:




// Note:
// 1. The function should be called for each blog post in an array of blog data. 
// 2. The list of blog posts should be contained within a `ul` element with the class `blog-list`.

//html file
// <!DOCTYPE html>
// <html>
// <head>
//   </head>
//   <body>
//     <div id="header">
//     <h1>My Blogs</h1>
//     </div>
//     <ul class="blog-list"></ul>
//     <script src = "./script"></script>  
// </body>
// </html>
//js file
const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
function addBlog(blog) {
    // Create new elements and append them to the blog list
    const blogList = document.querySelector('.blog-list');
    
    const newBlogPost = document.createElement('div');
      newBlogPost.className = 'blog-post';
    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

    blogList.appendChild(newBlogPost);
  }
  blogData.forEach(blog => addBlog(blog));

