## Routes specifications

### `GET api/tasks`
_Get all active tasks_

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

### `POST api/tasks`
_Create a new task_

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

### `PUT api/tasks/:id`
_Apply on a task or choose an applicant_

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

### `PATCH api/tasks/:id`
_Change patch status_

**Body**:
```
{
  "id": UUID,
  "status": "created", "pending" or "done"
}
```

**Return**: Nothing