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
  <body syle ="background-color: aliceblue">
    <h1 style="color: red; text-align: center">My Team</h1>
    <div style="border: 1px solid;
      background-color: rgb(159, 209, 207);
      text-align: center">
      <div id="firstMember">
        <h2 style="color: green">${data[0].getRole()}</h2>
        <h4 style="color: green">Name: ${data[0].name}</h4>
        <h4 style="color: green">ID: ${data[0].getId()}</h4>
        <a href="mailto:bill@gmail.com, ted@gmail.com, james@gmail.com"
        <h4 style="color: green">Email: ${data[0].getEmail()}</h4>
        </a>
        <h4 style="color: green">Office Number: ${data[0].getOfficeNumber()}</h4>
      </div>
      <div id="secondMember">
        <h2 id="title">${data[1].getRole()}</h2>
        <h4 id="name">Name: ${data[1].name}</h4>
        <h4>ID: ${data[1].getId()}</h4>
        <a href="mailto:bill@gmail.com, ted@gmail.com, james@gmail.com"
        <h4>Email:${data[1].getEmail()}</h4>
        </a>
        <h4>Github: ${data[1].getGithub()}</h4>
      </div>
      <div id="thirdMember">
        <h2 id="title">${data[2].getRole()}</h2>
        <h4 id="name">Name: ${data[2].name}</h4>
        <h4>ID: ${data[2].getId()}</h4>
        <a href="mailto:bill@gmail.com, ted@gmail.com, james@gmail.com"
        <h4>Email:  ${data[2].getEmail()}</h4>
        </a>
        <h4>School: ${data[2].getSchool()}</h4>
      </div>
    </div>
  </body>
</html>
`
}
module.exports = template;