# ShareIt
A MERN full stack social media web application that uses redux
In this project, I explored how to fully build a MERN stack web application.
MERN stands for MongoDB, Express, ReactJS, and Node.JS.
Along with the above technologies, i also used redux to enable my application to scale well in the future, if i decide to add additional functionality.

[![Screenshot-2022-11-19-123118.png](https://i.postimg.cc/XqZcVDZd/Screenshot-2022-11-19-123118.png)](https://postimg.cc/GTCsKKxm)

# Database - MongoDB Atlas Cluster
[![Screenshot-2022-11-19-123407.png](https://i.postimg.cc/k4SKzRLv/Screenshot-2022-11-19-123407.png)](https://postimg.cc/xJ0Xb8fX)
The above shows an initialized cluster on the MongoDB atlas platform. This is very convenient as there is no need to host a local MongoDB database on a server and deploy it.

# Server - Connecting to Database
[![Screenshot-2022-11-19-124647.png](https://i.postimg.cc/PxN2xMNb/Screenshot-2022-11-19-124647.png)](https://postimg.cc/tZQhvW37)

# Server - Database Schema
[![Screenshot-2022-11-19-125238.png](https://i.postimg.cc/wBQSJF6S/Screenshot-2022-11-19-125238.png)](https://postimg.cc/R3qsx7JR)

# Server - Routes and Controllers
Routes used:
```
router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
```
The above use the CRUD model.

Controllers corresponding to the routes:
[![Screenshot-2022-11-19-124959.png](https://i.postimg.cc/VLs5bHzc/Screenshot-2022-11-19-124959.png)](https://postimg.cc/8s3T24Fy)

Note
```
async  await
``` 
are used as database accesses are asyncronous and we cannot guarantee timing

# Client - Directory/Scope structure
```bash
.
├── App.js      
├── actions     
│   └── posts.js
├── api
│   └── index.js
├── components       
│   ├── Form
│   │   ├── Form.js  
│   │   └── styles.js
│   └── Posts        
│       ├── Post     
│       ├── Posts.js 
│       └── styles.js
├── images
│   └── ShareIt.png  
├── index.css        
├── index.js
├── reducers
│   ├── index.js     
│   └── posts.js     
└── styles.js

```
Structuring this way is done due to redux. By following the actions, reducers, api, and components structure, adding additional features are straighforward. This promotes scalability

#Client - Actions and Reducers
reducers [![reducer.png](https://i.postimg.cc/Pr4H1t26/reducer.png)](https://postimg.cc/N55ZcwhT)
actions [![actions.png](https://i.postimg.cc/W1YPf5Rg/actions.png)](https://postimg.cc/PCDcCz55)



