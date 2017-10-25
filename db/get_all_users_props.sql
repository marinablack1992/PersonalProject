select properties.*, users.* from properties
join users on properties.user_id = users.id