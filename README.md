[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-aiboost]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="http://www.aiboost.eu.org">
    <img src="frontend/src/assets/images/logo_min.svg" alt="Logo" width="280" height="120">
    <h1 align="center">Aiboost next</h1>
  </a>

  <h3 align="center">AiBoost web3 Personal Project</h3>

  <p align="center">
    <a href="http://www.aiboost.eu.org">View Demo</a>
    ·
    <a href="https://github.com/ankit5577/aiboostWeb3/issues">Report Bug</a>
    ·
    <a href="https://github.com/ankit5577/aiboostWeb3/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

AiBoost next is a extenstion to project https://www.aiboost.in
this is a personal project which showcase the Web3 aspect of a website. it has functionalities like - send ether, lottery game, staking the token, buy aiboost token.

<!-- `Why to use MedicoEye?`
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

A list of commonly used resources that I find helpful are listed in the acknowledgements. -->

### Built With

For | Technlogy
------------ | -------------
Frontend📱 | ReactJS
Blockchain📱 | Smart contracts, Eth, Solidity
web3 Framework | Truffle, ganache
Deployed☁️ | Heroku 

### Libraries
`FRONTEND`
- ReactJS
- TailwindCSS
- react-router
- Ethers
- framer-motion

`BACKEND`
- hardhat
- ethers
- chai

### Folder Structure
#### Frontend
```
frontend/
┣ src/
┃ ┣ app/
┃ ┃ ┣ auth/
┃ ┃ ┃ ┣ confirm-email/
┃ ┃ ┃ ┣ login/
┃ ┃ ┃ ┣ page-not-found/
┃ ┃ ┃ ┣ reset-password/
┃ ┃ ┃ ┗ sign-up/
┃ ┃ ┣ core/
┃ ┃ ┃ ┣ enum/
┃ ┃ ┃ ┣ guard/
┃ ┃ ┃ ┣ interceptor/
┃ ┃ ┃ ┣ model/
┃ ┃ ┃ ┗ service/
┃ ┃ ┣ data/
┃ ┃ ┣ pages/
┃ ┃ ┃ ┣ admin/
┃ ┃ ┃ ┣ common/
┃ ┃ ┃ ┃ ┗ edit-profile/
┃ ┃ ┃ ┣ doctor/
┃ ┃ ┃ ┃ ┣ dashboard/
┃ ┃ ┃ ┃ ┣ medicine/
┃ ┃ ┃ ┃ ┃ ┣ add-edit-medicine/
┃ ┃ ┃ ┃ ┣ patient/
┃ ┃ ┃ ┃ ┃ ┣ diagnose/
┃ ┃ ┃ ┃ ┃ ┣ list/
┃ ┃ ┃ ┃ ┃ ┗ queue/
┃ ┃ ┃ ┣ lab/
┃ ┃ ┃ ┣ layout/
┃ ┃ ┃ ┣ receptionist/
┃ ┃ ┃ ┃ ┣ patient/
┃ ┃ ┃ ┃ ┃ ┣ existing/
┃ ┃ ┃ ┃ ┃ ┣ list/
┃ ┃ ┃ ┃ ┃ ┣ new/
┃ ┃ ┃ ┣ super-admin/
┃ ┃ ┃ ┗ user/
┃ ┣ assets/
┃ ┃ ┣ images/
```

#### Backend
```
backend/
┣ bin/
┃ ┗ www
┣ config/
┃ ┣ aws-config.json
┃ ┗ passport.js
┣ models/
┃ ┣ hospital.js
┃ ┣ medicine.js
┃ ┣ patient.js
┃ ┗ user.js
┣ public/
┣ routes/
┃ ┣ _helper.js
┃ ┣ admin.js
┃ ┣ aws.js
┃ ┣ common.js
┃ ┣ doctor.js
┃ ┣ image.js
┃ ┣ lab.js
┃ ┣ medicine.js
┃ ┣ receptionist.js
┃ ┗ user.js
┣ views/
┃ ┣ error.jade
┃ ┣ index.jade
┃ ┗ layout.jade
┣ .dockerignore
┣ .env
┣ Dockerfile
┣ app.js
┣ main.py
┣ package-lock.json
┣ package.json
┗ readme.txt
```


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* node - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* mongodb - https://docs.mongodb.com/manual/installation/
* angular
  ```bash
  $ npm install -g @angular/latest
  ```

### Installation
1. Clone the repo
   ```bash
   $ git clone https://github.com/ankit5577/medicoEye.git
   ```
2. Install NPM packages in both `frontend` and `backend` folder
   ```bash
   $ npm install
   ```
3. add `.env` file in backend folder
   ```env
    PORT="3000" # specify express port
    HOST="" 
    MONGO_URL="" # specify mongodb url
    SECRET="" # secret for passportjs
    EMAIL="" # gmail temp app email
    PASSWORD="" # gmail temp app password
   ```
4. run ```npm start``` in both frontend and backend folders.

<!-- USAGE EXAMPLES -->
## Usage
* go to [App](https://www.medicoeye.in)
<img src="assets/medicoeye_login.png" width="100%" height="100%">

login with any of these credentials:
```
<!-- for receptionist🧑🏽‍💻 role -->
email: cmcrecep@gmail.com
password: ankit

<!-- for doctor👨🏻‍⚕️ role -->
email: cmcdoc@gmail.com
password: ankit

email: cmcdoc2@gmail.com
password: ankit

<!-- for admin👨‍💼 role -->
email: ankit@ankit.com
password: ankit

<!-- for lab👩‍🔬 role -->
email: cmclab@gmail.com
password: ankit
```

* Dashboard
<img src="assets/medicoeye_dashboard.png" width="100%" height="100%">

<!-- CONTRIBUTING -->
## Contributing

**For AiBoost**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ankit Kaushal - [@ankit55771](https://twitter.com/ankit55771) - ankit@aiboost.in

Project Link: [https://www.medicoeye.in/](https://www.medicoeye.in/)


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/ankit5577/connectedh.svg?style=for-the-badge
[contributors-url]: https://github.com/anki5577/connectedh-frontend/contributors
[forks-shield]: https://img.shields.io/github/forks/ankit5577/connectedh.svg?style=for-the-badge
[forks-url]: https://github.com/anki5577/connectedh-frontend/members
[stars-shield]: https://img.shields.io/github/stars/ankit5577/connectedh.svg?style=for-the-badge
[stars-url]: https://github.com/anki5577/connectedh-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/ankit5577/connectedh.svg?style=for-the-badge
[issues-url]: hhttps://github.com/anki5577/connectedh-frontend/issues
[license-shield]: https://img.shields.io/github/license/ankit5577/connectedh.svg?style=for-the-badge
[license-url]: https://github.com/anki5577/connectedh-frontend/assets/LICENSE.txt
[linkedin-aiboost]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ankit5577

