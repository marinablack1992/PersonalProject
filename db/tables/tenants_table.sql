create table tenants(
id serial Primary Key,
email varchar(180),
lease_exp varchar(180)
user_id integer references users(id),
)