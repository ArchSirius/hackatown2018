## Routes specifications

# `GET api/tasks`
__Get all active tasks__
**Body**: Nothing
**Return**:
```
{
  "tasks": [
    {
      "id": UUID,
      "name": String,
      "category": String,
      "description": String,
      "carepoints": Integer,
      "creator": UUID,
      "applicants": [ UUID, UUID, ... ],
      "chosen": UUID or undefined,
      "status": "created", "pending" or "done"
    },
    ...
  ]
}
```

# `POST api/tasks`
__Create a new task__
**Body**:
```
{
  "name": String,
  "category": String,
  "description": String,
  "carepoints": Integer,
  "creator": UUID
}
```
**Return**:
```
{
  "id": UUID
}
```

# `PUT api/tasks/:id`
__Apply on a task or choose an applicant__
**Body**:
```
{
  "id": UUID,
  "name": String,
  "category": String,
  "description": String,
  "carepoints": Integer,
  "creator": UUID,
  "applicants": [ UUID, UUID, ... ],
  "chosen": UUID or undefined,
  "status": "created", "pending" or "done"
}
```
**Return**: Nothing

# `PATCH api/tasks/:id`
__Change patch status__
**Body**:
```
{
  "id": UUID,
  "status": "created", "pending" or "done"
}
```
**Return**: Nothing