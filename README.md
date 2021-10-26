[![image](https://www.linkpicture.com/q/LOGO6.png)](https://www.linkpicture.com/view.php?img=LPic617768bc317c51963078982)

<div align=center>
 
 ![](https://img.shields.io/badge/License-Apache-blue?style=for-the-badge&logo=apache)
 ![](https://img.shields.io/badge/React-17.0.1-brightgreen?style=for-the-badge&logo=react)
 ![](https://img.shields.io/badge/Chakra-1.6.5-brightgreen?style=for-the-badge&logo=chakra-ui)
 ![](https://img.shields.io/badge/Node-12.16.1-9cf?style=for-the-badge&logo=node.js)


</div>

<div align=center>
 
 ![](https://img.shields.io/badge/express-4.17.1-ff69b4?style=for-the-badge&logo=express.js)
 ![](https://img.shields.io/badge/MongoDB-4.0.1-orange?style=for-the-badge&logo=mongodb)
 ![](https://img.shields.io/badge/Docker-20.10.7-9cf?style=for-the-badge&logo=docker)
 
</div>
 

 
⚡**RTConfer**⚡ is an Online Rich-Media Collaborative Whiteboard Platform.

<div align=center>
 
**Bring Teams Together, anywhere.**
 
</div>

## ⚙️ Feature Hightlight

* 💻 Live Streaming: engaging experience for group real-time online video streaming within whiteboard.
* 📈 Rich-media Canvas: Our Rich-Media web canvas enables you to work the way you want to, keep everyone in the loop.
* 📑 Integrated Code & Rich-Text Editor: Share insparing code and text with teammater just within the Canvas, in real-time.
* 👥 TEAM & SESSIONS: No matter when, you can easily create teams and manage them. View your historical meetings and resume them at any time. It's time to be a leader, make team productive, collaborative and efficient.

[![image](https://www.linkpicture.com/q/meeting-room.png)](https://www.linkpicture.com/view.php?img=LPic617769959bff31447176570)

## 📄 Complete Guidebook
[Click here for Developers' Guidebook!](https://www.yuque.com/docs/share/894368bd-aea0-4871-8ee1-92ecfa3ff202?#) 

## 🎬 Demo Video
 [Click Here for video on Youtube!](https://youtu.be/U80gxszblNo) 

## 🔧 Tech Outline

* Designed website with robust session security and multi-person video & audio call stability with Socket.IO based on WebSocket
* Applied MERN: MongoDB, Express.js RESTful API, React.js, Node.js, JWT authentication, Chakra UI with Heroku in development
* Implemented real-time collaborative code and rich-text editing with Firepad, file uploading with AliCloud Open Storage Service
* Integrated Google Real-time Firebase handling input conflicts, realizing message playback to client-side of code/text editing

[![image](https://www.linkpicture.com/q/support-tem.png)](https://www.linkpicture.com/view.php?img=LPic61776a0bbbfbb423573724)


# 📦 Build and Deploy

## 🚀 If you are a client who want to deploy our service or test:

Please follow the steps to deploy our web service as quickly as possible!

* git clone this repo to your computer, turn on your Windows shell or Unix Terminal command line tools.

* ```cd richmedia-project/client``` to enter the directory of our web demo project

* ```npm install``` to install all the dependencies that front-end needs, this might need to wait for a few seconds.

* ```npm run start``` to start the React.js serve. 

* Enter ```http://localhost:3000/welcome``` in your Chrome browser's URL bar.

* Simply wait for a few seconds, and enjoy your usage of our **RTConfer** platform!

  



## 🔍 If you are a engineer who wanna further development:

### Prerequisites:

Have Docker Installed in your System, and also a clear mind to follow these steps.

##### In Development Mode :

First copy the content of **docker-compose-dev.yml** to **docker-compose.yml**

and also copy the content of **server/src/index.dev.js** to **server/src/index.js**

Run the app using :

`$ docker-compose up --build --remove-orphans`

or

`$ docker-compose up -d`

Above command will start the services on (-d) detach mode (similar like running the app in background)

Then you can check the status of the containers by running:

`$ docker ps`

The App should be App :

visit client : http://localhost:3000

visit server : http://localhost:8080

To check the status of the running containers :

`docker-compose ps`

##### In Production Mode :

First copy the content of **docker-compose-prod.yml** to **docker-compose.yml**

and also copy the content of **server/src/index.prod.js** to **server/src/index.js**

Run the app using :

` $ docker-compose up --build -remove-orphans`

The App should be up at http://localhost:8080

### Build the image for server :

docker build -t myapp-server:1 .
docker images
docker run --name "myapp-server" -p 80:8080 myapp-server:1
docker ps



![MERN DOCKER diagram](https://github.com/sujaykundu777/mern-docker/blob/master/3-tier-diagram.png?raw=true)


#### Copyright @ Jisuanke Inc. & Group LucyRiver's Ice Tea @ School of Software, Nankai University



