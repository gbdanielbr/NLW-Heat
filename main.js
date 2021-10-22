const socialLinks = {
  github: 'gbdanielbr',
  instagram: '_moraesdaniel',
  linkedin: 'in/danielmcm'
}

function changeSocialLinks() {
  for (let li of socialIcons.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialLinks[social]}`
  }
}

changeSocialLinks()

function getGitProfileInfo() {
  const url = `https://api.github.com/users/${socialLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitLink.href = data.html_url
      userGitId.textContent = data.login
      userImg.src = data.avatar_url
    })
}

getGitProfileInfo()
