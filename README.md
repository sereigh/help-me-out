# Help Me Out!

>A community focused, social service-trading platform.

#### Table of Contents

* [Help Me Out!](#Project-Catwalk)
     * [Technologies](#Technologies)
     * [Development](#Development)
     * [Installation](#Installation)
     * [Operation](#Operation)
     * [Preview](#Preview)
          * [Screenshots](#Screenshots)
     * [Testing](#Testing)
     * [Team Members](#Team_Members)
     * [License](#License)

### Backend Technologies

|    Stack   | Dependancies | Dev-dependancies |
|------------|--------------|------------------|
|  Node.js   |    dotenv    |     nodemon      |
|  MongoDB   |   mongoose   |   eslint -airbnb |
| Express.js |  Express.js  |
| JavaScript |googlemaps API|


### Development

> My role in the remote team that engingeered Help Me Out! was designing it's backend system.


 
>Check out [Operation](#Operation) for an overview of the backend functionality or the [Preview](#Preview) below for a live demo. 

### Installation

1. Clone repository.
2. From within the root directory:

``
npm install
``

3. From within the root directory:

``
npm start
``

4. View in browser:

``
http://localhost:3000
``

### Operation

-On load, retrieve top experts and recent projects. Limit: 5. 

``GET /experts``

``GET /projects``

-Upon authentication, post new user info or retrieve existing users profile & relevant site matches. 

``POST /users``

``GET /users/:user_id/relevant``

-Users can update their profile information from their profile page. 

``PUT /users/:user_id``

-Users can add, update, or delete Tools they are willing to lend, from their profile page. 

``POST /users/:user_id/tools``

``PUT | DELETE /users/:user_id/tools/:tool_id``

-Users can add, update, or delete personal Projects from their profile page. 

``POST /users/:user_id/projects``

``PUT | DELETE /users/:user_id/projects/:project_id``

-Users can upload photos for their Projects, Tools, or avatar, from their profile page. 

``PUT | DELETE /users/:user_id/photos``

``PUT | DELETE /users/:user_id/tools/:tool_id/photos``

``PUT | DELETE /users/:user_id/projects/:project_id/photos``

-Users can upvote or downvote someone's handiness rating.

``PUT /users/:user_id/handy/up``

``PUT /users/:user_id/handy/down``

-Users can report someone for inappropriate behavior. 

``PUT /users/:user_id/report``

-Users can update their projects with tools that they are in need of so they can get help from the community. 

``PUT /users/:user_id/projects/:project_id/needs``

-Users can add or delete their favorite projects from their favorites list. 

``PUT /users/:user_id/favorites``

``DELETE /users/:user_id/favorites``


### Preview

![Application Demo]( "Application Demo")


### Screenshots

![GET Response Metrics]( "GET Response Metrics")
![POST Response Metrics]( "POST Response Metrics")
![UPDATE Response Metrics]( "UPDATE Response Metrics")

### Testing

From within the root directory:

``
npm test
``

### Team Members

- [Krista Brock](https://github.com/sereigh) [Backend Engineer]
- [Mikl Barton](https://github.com/miklbarton) [Fullstack Engineer]
- [Gareth Rogers](https://github.com/garethdavisrogers) [Frontend Engineer]
- [Edwin Ekpenyong](https://github.com/moogiemode) [Frontend Engineer]
- [Till Mattson](https://github.com/tillmattson) [Frontend Engineer]
- [Kyle Johnson](https://github.com/KyleJohnson42) [Frontend Engineer]
- [Timothy Nguyen](https://github.com/shimoshi) [Frontend Engineer]

### License 

[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]
