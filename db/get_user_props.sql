select properties.id, imageurl, address, monthly_rent, user_id, user_name, email, img from properties
join users on properties.user_id = users.id
where users.id = $1