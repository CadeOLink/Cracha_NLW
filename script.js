const links_social_media = {
  github: 'CadeOLink',
  youtube: 'watch?v=7YvAYIJSSZY&ab_channel=RockwellVEVO',
  facebook: 'rxzlcnrvbg__',
  instagram: 'rxzlcnrvbg__',
  twitter: '@Coe_Everton'
}
function change_social_media_links() {
  //document.getElementById('user_name').textContent = 'Ewerton'
  //user_name.textContent = 'Ewerton'

  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_profile.href = data.html_url
      user_image.src = data.avatar_url
      user_login.textContent = data.login
    })
}
get_github_profile_infos()
