const linksSocialMedia = {
  github: 'DiasVitoria',
  instagram: 'viimarto',
  linkedin: 'in/DiasVictoria/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const urlApiGitHub = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(urlApiGitHub)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      profileImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
