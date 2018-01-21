## Routes specifications

- [GET api/tasks](#get-all-active-tasks)
- [POST api/tasks](#create-a-new-task)
- [PUT api/tasks/:id](#update-a-task)
- [GET api/users/:id](#get-specific-user)

#### Get all active tasks
`GET api/tasks`

**Body**: Nothing

**Return**:
```
[
  {
    "_id": UUID,
    "name": String,
    "description": String,
    "address": String,
    "value": Integer,
    "relevantSkills": [ String, String, ... ],
    "creator": UUID,
    "applicants": [
      {
        "_id": UUID,
        "username": String,
        "points": Integer,
        "skills": [ 
          {
            "name": String,
            "value": Integer
          }, 
          ...
        ]
      }, 
      ...
    ],
    "chosen": UUID,
    "done": Boolean
  },
  ...
]
```

#### Create a new task
`POST api/tasks`

**Body**:
```
{
  "name": String,
  "description": String,
  "address": String,
  "value": Integer,
  "relevantSkills": [ String, String, ... ],
  "creator": UUID
}
```

**Return**:
```
{
  "_id": UUID,
  "name": String,
  "description": String,
  "address": String,
  "value": Integer,
  "relevantSkills": [ String, String, ... ],
  "creator": UUID,
  "applicants": [
    {
      "_id": UUID,
      "username": String,
      "points": Integer,
      "skills": [ 
        {
          "name": String,
          "value": Integer
        }, 
        ...
      ]
    }, 
    ...
  ],
  "chosen": UUID,
  "done": Boolean
}
```

#### Update a task
`PUT api/tasks/:id`
- _To apply on a task, append a user to applicants;_
- _To choose an applicant, set the chosen field to a valid user id;_
- _To mark a task as done, set the done field to true._

**Body**:
```
{
  "_id": UUID,
  "name": String,
  "description": String,
  "address": String,
  "value": Integer,
  "relevantSkills": [ String, String, ... ],
  "creator": UUID,
  "applicants": [
    {
      "_id": UUID,
      "username": String,
      "points": Integer,
      "skills": [ 
        {
          "name": String,
          "value": Integer
        }, 
        ...
      ]
    }, 
    ...
  ],
  "chosen": UUID,
  "done": Boolean
}
```

**Return**: 
```
{
  "_id": UUID,
  "name": String,
  "description": String,
  "address": String,
  "value": Integer,
  "relevantSkills": [ String, String, ... ],
  "creator": UUID,
  "applicants": [
    {
      "_id": UUID,
      "username": String,
      "points": Integer,
      "skills": [ 
        {
          "name": String,
          "value": Integer
        }, 
        ...
      ]
    }, 
    ...
  ],
  "chosen": UUID,
  "done": Boolean
}
```

#### Get specific user
`GET api/users/:id`

**Body**: Nothing

**Return**:
```
{
  "_id": UUID,
  "username": String,
  "points": Integer,
  "skills": [ 
    {
      "name": String,
      "value": Integer
    }, 
    ... 
  ]
}
```