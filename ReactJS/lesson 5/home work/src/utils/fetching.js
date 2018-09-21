export function getPosts() {
  return fetch('api/posts')
    .then(response => response.json());
}

export function getPostById(id) {
  return fetch(`api/posts/${id}`)
    .then(response => response.json());
}

export function getUserById(id) {
  return fetch(`api/users/${id}`)
    .then(response => response.json());
}
