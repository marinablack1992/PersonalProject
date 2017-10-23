UPDATE users
SET phone = $2, prefcontact = $3
WHERE id = $1
returning *;