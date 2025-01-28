export async function GetUserData() {
  const response = fetch(`https://api.github.com/users/${import.meta.env.VITE_USER_GIT}`)
    .then(response => response.json())
    .then(data => { return data });

  return response;
}

export function SearchIssues() {
  const response = fetch('https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge')
    .then(response => response.json())
    .then(data => { return data });

  return response
}

export function GetIssue() {
  const response = fetch('https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1')
    .then(response => response.json())
    .then(data => { return data });

  return response
}