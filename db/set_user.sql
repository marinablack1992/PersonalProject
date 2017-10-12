UPDATE users
SET Status = $2
where id = $1
returning *;