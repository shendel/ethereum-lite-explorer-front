# GEN-Lite-Explorer-Frontend

## Description
This project is an open-source block explorer on EVM chain. If you follow this repository, you can run explorer in localhost. This repository provides [crawling code](https://github.com/Generation-Foundation/Explorer-Crawling-test) and [backend code](https://github.com/Generation-Foundation/Explorer-Backend-test) for Explorer, and you can find frontend code in this repository.

## Getting Started
### Setting up Server
- **Go to the link below to set up server step by step.**
- First, set up Crawling server and Database
  - <https://github.com/Generation-Foundation/Explorer-Crawling-test>
- Second, set up Backend server
  - <https://github.com/Generation-Foundation/Explorer-Backend-test>


### Installing
**After the above server installation is complete, install the following tasks**
- Git clone this repo
```bash
git clone https://github.com/Generation-Foundation/Explorer-Frontend-test.git
```
- **On macOS and Ubuntu**, create ``.env`` to set GENERATE_SOURCEMAP
```env
GENERATE_SOURCEMAP=false
```
- **On Window**, modify ``package.json`` to set GENERATE_SOURCEMAP
```javascript
  "scripts": {
    "start": ""set \"GENERATE_SOURCEMAP=false\" && node scripts/start.js",
    "build": ""set \"GENERATE_SOURCEMAP=false\" && node scripts/build.js",
    "test": "node scripts/test.js"
  },
```
- Modify 'baseURL' in ``/src/redux/reducer/etherApi.js`` to your blockchain RPC URL
```javascript
import axios from "axios";

const etherApi = axios.create({
    //change your blockchain rpc url
    baseURL : "https://eth.public-rpc.com",
    //baseURL : "https://testnet-rpc-seoul.gen.foundation",
    headers : {'content-type' : "application/json"}
})

export default etherApi
```
- Modify 'baseURL' in ``/src/redux/reducer/dbApi.js`` to your backend server
```javascript
import axios from "axios";

const dbApi = axios.create({
    //change your backend server
    baseURL : "http://localhost:3001",
    headers : {'content-type' : "application/json"}
})

export default dbApi
```
- Run it local with the following command
```bash
npm install --save
npm start
```
### Deploy
Deployed using AWS amplify.
```bash
npm run build
```

### Architecture
**If running only on localhost, it will proceed on the following ports.**
- Front - http://localhost:3000
- Back - http://localhost:3001
- Crawling - http://localhost:3006
<bt>![Opensource Generation Explorer drawio](https://user-images.githubusercontent.com/93761302/208396226-e82f53c2-db3f-4e81-b665-a451efa90949.png)


## Contributors
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://github.com/Booyoun-Kim"><img src="https://avatars.githubusercontent.com/u/34641838?v=4" width="100px;" alt=""/><br /><sub><b>Ben</b></sub></a><br /><a>🧑‍🏫</a> <a>🤔</a> <a>📆</a> <a>💬</a></td>
    <td align="center"><a href="https://github.com/Jaewoneeee"><img src="https://avatars.githubusercontent.com/u/93761302?v=4" width="100px;" alt=""/><br /><sub><b>Danny</b></sub></a><br /><a>💻</a> <a>🤔</a> <a>🔣</a> <a>📖</a> <a>🚧</a></td> 
    <td align="center"><a href="https://github.com/hyeok96"><img src="https://avatars.githubusercontent.com/u/86933513?v=4" width="100px;" alt=""/><br /><sub><b>Woody</b></sub></a><br /><a>💻</a> <a>⚠️</a></td>
  </tr>
</table>
  
## Our Services and Community
- [Official Website](https://gen.foundation/)
- [Generation Explorer](https://dev-explorer.gen.foundation/)
