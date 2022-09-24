async function newFormHandler(event) {
    event.preventDefault();
  
    // Added Post title in async function
    const title = document.querySelector('input[name="post-title"]').value;
        // Added Post url in async function
    const post_url = document.querySelector('input[name="post-url"]').value;
  
    // Returning posts after their creation, fetching that new post data, and sending to the user page in application/json
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // If previous response is invalid, and I pretend to believe you have the best 
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
//   Upon reading the query in Javascript, the file path connects the new post
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);