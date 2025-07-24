require('dotenv').config()

console.log("learning with chai aur code backedend app.js");

const { on } = require('events');
const express = require('express');
const { read, write } = require('fs');
const { mainModule, send } = require('process');
const app = express()
const port = 4000

const githubData = {
  "login": "Gyanee01",
  "id": 158709095,
  "node_id": "U_kgDOCXW1Zw",
  "avatar_url": "https://avatars.githubusercontent.com/u/158709095?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Gyanee01",
  "html_url": "https://github.com/Gyanee01",
  "followers_url": "https://api.github.com/users/Gyanee01/followers",
  "following_url": "https://api.github.com/users/Gyanee01/following{/other_user}",
  "gists_url": "https://api.github.com/users/Gyanee01/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Gyanee01/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Gyanee01/subscriptions",
  "organizations_url": "https://api.github.com/users/Gyanee01/orgs",
  "repos_url": "https://api.github.com/users/Gyanee01/repos",
  "events_url": "https://api.github.com/users/Gyanee01/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Gyanee01/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Gyanendra Sahu",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-03T07:50:50Z",
  "updated_at": "2025-07-04T17:12:07Z"
}

FileSystemDirectoryHandle = require('fs').promises  // Importing the FileSystemDirectoryHandle from fs module

express.static.mime.define({
  'text/plain': ['txt', 'md']
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const FileSystemDirectoryHandle = require('fs').promises  // Importing the FileSystemDirectoryHandle from fs module
const FileSystemFileHandle = require('fs').promises  // Importing the FileSystem
  SafeArray = require('fs').promises 
  express.static.mime.define({  
})

app.get('/app/twitter', (req, res) => {
  res.send('Gyandotcom')
})

setTimeout(() => {
  console.log("This is a delayed message after 5 seconds");
}, 5000)



app.get('/app/instagram', (req, res) => {
  res.send('<h1>please login at gyan dot com</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

mainModule.children.length.PORT = process.env.PORT || 1900
on('uncaughtException', (err) => {
  
});


MediaEncryptedEventapp.get('/app', (req, res) => {
  res.send('Hello from the app route!')
})
  
