const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".search-button");
const nameContainer = document.querySelector(".profile-name");
const userNameContainer = document.querySelector(".profile-username");
const reposContainer = document.querySelector(".profile-repos");
const urlContainer = document.querySelector(".profile-url");

const client_id = "Iv1.95f7d52a57185b0c";
const client_secret = "11bb4d7fd89247b32cdce162de50d79f7f291eee";

const fetchUsers = async user => {
  const response = await fetch(
    `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
  );

  const data = await response.json();
  return { data };
};

const showData = () => {
  fetchUsers(inputValue.value).then(res => {
    nameContainer.innerHTML = `<span class="profile-key">Name: </span><span class="profile-value">${res.data.name}</span>`;
    userNameContainer.innerHTML = `<span class="profile-key">Username: </span><span class="profile-value">${res.data.login}</span>`;
    reposContainer.innerHTML = `<span class="profile-key">Repos: </span><span class="profile-value">${res.data.public_repos}</span>`;
    urlContainer.innerHTML = `<span class="profile-key">URL: </span><span class="profile-value">${res.data.html_url}</span>`;
  });
};

searchButton.addEventListener("click", () => {
  showData();
  inputValue.value = "";
});
