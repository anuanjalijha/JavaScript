// Problem statement
// For the Blog Page, we built in the previous topic and modified it to add move up, move down, and delete functionality using an event listener.

// Objective:For your convenience, the post part has already been added. Your task is to add event listeners to the buttons.

// For that:-

// 1. Creates a new div element with the class "blog-buttons".
// 2. Create a new button element with the class "blog-button" and "move-up" and append it to the "blog-buttons" div.
// 3. Create a new button element with the class "blog-button" and "move-down" and append it to the "blog-buttons" div.
// 4. Create a new button element with the class "blog-button" and "delete" and append it to the "blog-buttons" div.
// 5. Append the "blog-buttons" to "newbox" element
// 6. Add event listener to the "move-up", "move-down" and "delete" button
// 7. The move-up button should be able to move the blog item one step up in the "bloglist".
// 8. The move-down button should be able to move the blog item one step down in the "bloglist".
// 9. The delete button should be able to delete that particular blog from the dom element.
// Hint:
// Use the onClick event to add the event listener.
// Use insertBefore to append at a specific position.
// <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
// <div id="header">
// <h1>My Blogs</h1>
// </div>
// <ul class="blog-list"></ul>
// <script src="./script.js"></script>
// </body>      
// </html>
//js file
function addBlog(blog) {
    // Create new elements and append them to the blog list
    const blogList = document.querySelector('.blog-list');
    
      
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
      newBox.appendChild(newBlogPost);
      

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

    const newBlogButtons = document.createElement('div');
    newBlogButtons.classList.add('blog-buttons');
    newBox.appendChild(newBlogButtons);

    const moveUpButton = document.createElement('button');
    moveUpButton.classList.add('blog-button', 'move-up');
    moveUpButton.textContent = 'Move Up';
    newBlogButtons.appendChild(moveUpButton);

    const moveDownButton = document.createElement('button');
    moveDownButton.classList.add('blog-button', 'move-down');
    moveDownButton.textContent = 'Move Down';
    newBlogButtons.appendChild(moveDownButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('blog-button', 'delete');
    deleteButton.textContent = 'Delete';
    newBlogButtons.appendChild(deleteButton);

    blogList.appendChild(newBox);

    // Add event listeners to the buttons
    moveUpButton.addEventListener('click', () => {
      const previousSibling = newBox.previousElementSibling;
      if (previousSibling) {
        blogList.insertBefore(newBox, previousSibling);
      }
    });

    moveDownButton.addEventListener('click', () => {
      const nextSibling = newBox.nextElementSibling;
      if (nextSibling) {
        blogList.insertBefore(nextSibling, newBox);
      }
});

deleteButton.addEventListener('click', () => {
newBox.remove();
});
}

const blogData = [
{
title: 'First Blog Post',
date: 'January 1, 2022',
content: 'This is the content of the first blog post.'
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

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array