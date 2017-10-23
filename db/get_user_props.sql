select properties.* from properties
join users on properties.user_id = users.id
where users.id = $1