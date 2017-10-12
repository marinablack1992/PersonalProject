create table properties(
id serial Primary Key,
imageURL text,
address varchar(180),
monthly_rent integer,
user_id integer references users(id),
tenant_id integer references tenants(id)
)