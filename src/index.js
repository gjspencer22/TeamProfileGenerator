function template(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Profile</title>
    <link rel="styleshet" href="./style.css"
  </head>
  <body>
    <header>My Team</header>
    <div class="members">
      <div class="firstMember">
        <h2 class="name">${data[0].name}</h2>
        <h2 class="title">${data[0].getRole()}</h2>
        <div class="subDiv"></div>
      </div>
      <div class="secondMember">
        <h2 class="name">${data[1].name}</h2>
        <h2 class="title">${data[1].getRole()}</h2>
        <div class="subDiv"></div>
      </div>
      <div class="thirdMember">
        <h2 class="name"></h2>
        <h2 class="title"></h2>
        <div class="subDiv"></div>
      </div>
      <div class="fourthMember">
        <h2 class="name"></h2>
        <h2 class="title"></h2>
        <div class="subDiv"></div>
      </div>
      <div class="fifthMember">
        <h2 class="name"></h2>
        <h2 class="title"></h2>
        <div class="subDiv"></div>
      </div>
    </div>
  </body>
</html>
`
}
module.exports = template;