import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsFeedContainer(props) {

  const staticData = [
    {
        "handy": 15,
        "report": 0,
        "tools": [
            {
                "tool_photos": [
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300"
                ],
                "help": false,
                "_id": "606a68e9753c36beebe3fc53",
                "tool_name": "crowbar",
                "tool_owner": "606a63cc6bd5acac70c9f6df",
                "createdAt": "2021-04-02T17:12:20.397Z",
                "updatedAt": "2021-04-02T17:15:20.397Z",
                "__v": 0
            }
        ],
        "projects": [
            {
                "project_photos": [
                    "https://picsum.photos/200/300"
                ],
                "_id": "606a64dc118a9bb0232158cc",
                "project_name": "Door Jam",
                "project_description": "by and to for",
                "help": true,
                "project_owner": "606a63cc6bd5acac70c9f6df",
                "createdAt": "2021-04-02T17:07:20.397Z",
                "updatedAt": "2021-04-04T17:15:20.397Z",
                "__v": 0
            },
            {
                "project_photos": [
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300"
                ],
                "_id": "606a6559868452b20a4102a6",
                "project_name": "Platform Bed",
                "project_description": "great some to",
                "help": false,
                "project_owner": "606a63cc6bd5acac70c9f6df",
                "createdAt": "2021-04-01T17:15:20.397Z",
                "updatedAt": "2021-04-05T17:18:20.397Z",
                "__v": 0
            }
        ],
        "_id": "606a63cc6bd5acac70c9f6df",
        "name": "Phillip Waterson",
        "zip": 37112,
        "password": "326b94d4530d405",
        "photo": "https://picsum.photos/200",
        "createdAt": "2021-04-02T17:15:20.397Z",
        "updatedAt": "2021-04-02T17:16:20.397Z",
        "__v": 0
    },
    {
        "handy": 0,
        "report": 0,
        "tools": [],
        "projects": [],
        "_id": "606b2f2ea19f475d63ec6745",
        "name": "Sally Thomas",
        "zip": 86068,
        "password": "cc1841b7603be",
        "createdAt": "2021-04-02T17:15:20.397Z",
        "updatedAt": "2021-04-02T17:15:20.397Z",
        "__v": 0
    },
    {
        "handy": 0,
        "report": 0,
        "tools": [
            {
                "tool_photos": [
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300"
                ],
                "help": false,
                "_id": "606b2ff3a19f475d63ec6748",
                "tool_name": "hammer",
                "tool_owner": "606b2f45a19f475d63ec6746",
                "createdAt": "2021-04-04T17:15:22.397Z",
                "updatedAt": "2021-04-05T17:15:22.397Z",
                "__v": 0
            }
        ],
        "projects": [
            {
                "project_photos": [
                    "https://picsum.photos/200/300"
                ],
                "_id": "606b2fd8a19f475d63ec6747",
                "project_name": "Odins Nest",
                "project_description": "a very very good dog",
                "help": false,
                "project_owner": "606b2f45a19f475d63ec6746",
                "createdAt": "2021-03-23T17:15:22.397Z",
                "updatedAt": "2021-03-23T17:15:22.397Z",
                "__v": 0
            }
        ],
        "_id": "606b2f45a19f475d63ec6746",
        "name": "Maud Burton",
        "zip": 38397,
        "password": "b4f099798da9",
        "photo": "https://picsum.photos/200",
        "createdAt": "2021-04-05T17:03:22.397Z",
        "updatedAt": "2021-04-05T17:03:22.397Z",
        "__v": 0
    },
    {
        "handy": 10,
        "report": 0,
        "tools": [
            {
                "tool_photos": [],
                "help": false,
                "_id": "606b304da19f475d63ec674a",
                "tool_name": "axe",
                "tool_owner": "606b3038a19f475d63ec6749",
                "createdAt": "2021-04-04T17:15:22.397Z",
                "updatedAt": "2021-04-04T17:15:22.397Z",
                "__v": 0
            }
        ],
        "projects": [
            {
                "project_photos": [
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300"
                ],
                "_id": "606b3057a19f475d63ec674b",
                "project_name": "Bird House",
                "project_description": "picturesque quiet no",
                "project_owner": "606b3038a19f475d63ec6749",
                "createdAt": "2021-04-05T17:15:22.397Z",
                "updatedAt": "2021-04-05T17:15:22.397Z",
                "__v": 0
            }
        ],
        "_id": "606b3038a19f475d63ec6749",
        "name": "Nora Ruiz",
        "zip": 56179,
        "password": "cf5159715357",
        "photo": "https://picsum.photos/200",
        "createdAt": "2021-04-04T17:18:22.397Z",
        "updatedAt": "2021-04-04T17:18:22.397Z",
        "__v": 0
    },
    {
        "handy": 25,
        "report": 0,
        "tools": [
            {
                "tool_photos": [
                    "https://picsum.photos/200/300"
                ],
                "help": false,
                "_id": "606b30d0a19f475d63ec674d",
                "tool_name": "wrench",
                "tool_owner": "606b30a5a19f475d63ec674c",
                "createdAt": "2021-04-02T17:15:20.397Z",
                "updatedAt": "2021-04-02T17:15:20.397Z",
                "__v": 0
            },
            {
                "tool_photos": [
                    "https://picsum.photos/200/300"
                ],
                "help": false,
                "_id": "606b30d8a19f475d63ec674e",
                "tool_name": "crowbar",
                "tool_owner": "606b30a5a19f475d63ec674c",
                "createdAt": "2021-04-02T17:15:22.397Z",
                "updatedAt": "2021-04-02T17:15:22.397Z",
                "__v": 0
            }
        ],
        "projects": [
            {
                "project_photos": [
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300"
                ],
                "_id": "606b30ffa19f475d63ec674f",
                "project_name": "Biker Bar",
                "project_description": "can have verb",
                "help": true,
                "project_owner": "606b30a5a19f475d63ec674c",
                "createdAt": "2021-04-04T17:15:22.397Z",
                "updatedAt": "2021-04-04T17:15:22.397Z",
                "__v": 0
            }
        ],
        "_id": "606b30a5a19f475d63ec674c",
        "name": "Andre Phillips",
        "zip": 37255,
        "password": "f8db73c284c12a92",
        "photo": "https://picsum.photos/200",
        "createdAt": "2021-04-05T17:15:23.397Z",
        "updatedAt": "2021-04-05T17:15:23.397Z",
        "__v": 0
    },
    {
        "handy": 4,
        "report": 0,
        "tools": [
            {
                "tool_photos": [],
                "help": false,
                "_id": "606b3134a19f475d63ec6751",
                "tool_name": "hammer",
                "tool_owner": "606b3112a19f475d63ec6750",
                "createdAt": "2021-04-05T17:15:24.397Z",
                "updatedAt": "2021-04-05T17:15:24.397Z",
                "__v": 0
            }
        ],
        "projects": [],
        "_id": "606b3112a19f475d63ec6750",
        "name": "Roy Leonard",
        "zip": 37255,
        "password": "cf5159715357",
        "photo": "https://picsum.photos/200",
        "createdAt": "2021-04-05T17:15:22.397Z",
        "updatedAt": "2021-04-05T17:15:22.397Z",
        "__v": 0
    },
    {
        "handy": 0,
        "report": 0,
        "tools": [],
        "projects": [
            {
                "project_photos": [
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300"
                ],
                "_id": "606b316ba19f475d63ec6753",
                "project_name": "Window Seat",
                "project_description": "farm gaunt low",
                "help": true,
                "project_owner": "606b3145a19f475d63ec6752",
                "createdAt": "2021-04-01T17:09:22.397Z",
                "updatedAt": "2021-04-01T17:09:22.397Z",
                "__v": 0
            }
        ],
        "_id": "606b3145a19f475d63ec6752",
        "name": "Marcus Martinez",
        "zip": 38397,
        "password": "9b475a3ccf08f00",
        "photo": "https://picsum.photos/200",
        "createdAt": "2021-04-04T17:25:00.397Z",
        "updatedAt": "2021-04-04T17:25:00.397Z",
        "__v": 0
    },
    {
        "handy": 24,
        "report": 0,
        "tools": [],
        "projects": [
            {
                "project_photos": [],
                "_id": "606b31c3a19f475d63ec6755",
                "project_name": "Lavoritory Sign",
                "project_description": "yarn bid got it",
                "help": true,
                "project_owner": "606b318ca19f475d63ec6754",
                "createdAt": "2021-04-01T17:20:22.397Z",
                "updatedAt": "2021-04-01T17:20:22.397Z",
                "__v": 0
            }
        ],
        "_id": "606b318ca19f475d63ec6754",
        "name": "Candace Iskowitz",
        "zip": 34954,
        "password": "2811b630cfb2f",
        "photo": "https://picsum.photos/200",
        "createdAt": "2021-04-05T17:25:22.397Z",
        "updatedAt": "2021-04-05T17:25:22.397Z",
        "__v": 0
    }
  ]

  return (
    <div className="feed-container">
      <h2>Feed Title</h2>
      <ProjectCard info={staticData[0]} />
    </div>
  )
}

export default ProjectsFeedContainer;