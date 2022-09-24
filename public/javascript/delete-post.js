async function deleteFormHandler(event) {
    event.preventDefault();

    // get the Post id from the url and convert it into a string
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    // Fetch Post by ID and then delete post
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    // If response is ok, replace current page with the dashboard, otherwise add an error alert
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// Upon clicking the delete post button, run above async function
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);