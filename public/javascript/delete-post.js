
async function deleteFormHandler(event) {
    event.preventDefault();

    // get the post id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
    if (response.ok) {
        document.location.replace('/dashboard');
        // otherwise, display the error
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);