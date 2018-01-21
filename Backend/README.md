## Routes specifications

### `GET api/tasks`
_Get all active tasks_

**Body**: Nothing

**Return**:
```
[
  {
    "_id": UUID,
    "name": String,
    "description": String,
    "value": Integer,
    "relevantSkills": [ String, String, ... ],
    "creator": UUID,
    "applicants": [ UUID, UUID, ... ],
    "chosen": UUID,
    "done": Boolean
  },
  ...
]
```

### `POST api/tasks`
_Create a new task_

**Body**:
```
{
  "name": String,
  "description": String,
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
  "value": Integer,
  "relevantSkills": [ String, String, ... ],
  "creator": UUID,
  "applicants": [ UUID, UUID, ... ],
  "chosen": UUID,
  "done": Boolean
}
```

### `PUT api/tasks/:id`
_Apply on a task or choose an applicant_

**Body**:
```
{
  "name": String,
  "description": String,
  "value": Integer,
  "relevantSkills": [ String, String, ... ],
  "creator": UUID,
  "applicants": [ UUID, UUID, ... ],
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
  "value": Integer,
  "relevantSkills": [ String, String, ... ],
  "creator": UUID,
  "applicants": [ UUID, UUID, ... ],
  "chosen": UUID,
  "done": Boolean
}
```

### `PATCH api/tasks/:id`
_Change task status_

**Body**:
```
{
  "done": Boolean
}
```

**Return**:
```
{
  "task": {
     "_id": UUID,
    "name": String,
    "description": String,
    "value": Integer,
    "relevantSkills": [ String, String, ... ],
    "creator": UUID,
    "applicants": [ UUID, UUID, ... ],
    "chosen": UUID,
    "done": Boolean
  },
  "user": {
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
}
```

### `GET api/users/:id`
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