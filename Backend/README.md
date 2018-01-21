## Routes specifications

- [GET api/tasks](#get-api/tasks)
- [POST api/tasks](#post-api/tasks)
- [PUT api/tasks/:id](#put-api/tasks/:id)
- [GET api/users/:id](#get-api/users/:id)

#### `GET api/tasks`
_Get all active tasks_

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

#### `POST api/tasks`
_Create a new task_

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

#### `PUT api/tasks/:id`
_Apply on a task, choose an applicant or mark a task as done_
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

#### `GET api/users/:id`
_Get specific user_

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