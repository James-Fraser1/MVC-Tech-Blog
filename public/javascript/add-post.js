async function newFormHandler(event) {
<<<<<<< HEAD
    event.preventDefault();
  
    // Added Post title in async function
    const title = document.querySelector('input[name="post-title"]').value;
    // Added Post url in async function
    const post_url = document.querySelector('input[name="post-url"]').value;
  
    // Returning posts after their creation, fetching that new post data, and sending to the dashboard page in json format
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
    console.log("Posting creation");
    // If response is ok, commit new post to the dashboard, otherwise add an error alert
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
=======
  event.preventDefault();

  // Added Post title in async function
  const title = document.querySelector('input[name="post-title"]').value;
  // Added Post url in async function
  const post_url = document.querySelector('input[name="post-url"]').value;
  // Add Updated Post text in async function
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  // Returning posts after their creation, fetching that new post data, and sending to the dashboard page in json format
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
>>>>>>> unsaved
    }
  });

  // If response is ok, commit new post to the dashboard, otherwise add an error alert
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

//   Upon reading the query in Javascript, the file path connects the new post
<<<<<<< HEAD
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  console.log("Post create button clicked!");
=======
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
>>>>>>> unsaved
