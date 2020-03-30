<a href="https://codesandbox.io/s/github/vetsnakara/react-router-app/tree/master/?fontsize=14&hidenavigation=1&theme=dark">
  <img height="20" alt="Edit github-battle" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

<a href="https://standardjs.com">
  <img height="20" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"/>
</a>

<h2>
  <a href="https://angry-neumann-5de2c6.netlify.com/" target="_blank">Dream Teams</a>
</h2>

> Training project with extensive usage of [React Router](https://reacttraining.com/react-router/web/guides/quick-start): URL parameters, custom links, nested routes, redirects, route based code splitting, animated transitions, etc.

### 📺 Preview
<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/vetsnakara/react-router-app/master/preview/main.png"/>
</p>

<details>
<summary>other views 👀</summary>
  <table style="width: 100%; background-color: white"" border="1">
  <tr>
    <th>Team Page</th>
    <th>Player Page</th>
  </tr>                                                                 
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/react-router-app/master/preview/team.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/react-router-app/master/preview/player.png"/></td>
  </tr>
  </table>
</details>

### ✨ Features
* Using fake promise bases API
* Routes:
  * `/` - home page
  * `/players` - players page
  * `/players?teamId=[teamId]` - players page
  * `/players/:playerName` - player page
  * `/teams` - teams page
  * `/teams/:teamName` - team preview page
  * `/:teamName` - team main page
  * `/:teamName/articles` - team's article list
  * `/:teamName/articles/:articleTitle` - article
* Loading indicators
* Theme button
* Custom Tooltips (based on render props pattern)

### 🛠️ Technologies
* __React__ for UI rendering
* __React Hooks__ for local state and side effects
  * class-based components are used too 🤫
* __React Context__ for toggling light/dark theme
* __React Router__ for routing
* __React JSS__ for styles and theming

### 🚀 Setup
``` sh
$ git clone https://github.com/vetsnakara/github-battle.git
$ cd github-battle
$ npm install
$ npm start
```

### 👷 Author
**Konstantin Arakantsev**
- Github: [@vetsnakara](https://github.com/vetsnakara)
