insert into properties(user_id, imageURL, address, monthly_rent)
values ($1, $2, $3, $4);

select * from properties;