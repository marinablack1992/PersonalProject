select users.*, properties.*, tenants.* from users
join properties on properties.user_id = users.id
join tenants on tenants.prop_id = properties.id
where users.id = $1