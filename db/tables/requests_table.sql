create table requests (
id serial primary key,
req_img text,
description varchar(280),
priority varchar(180),
land_email text,
tenant_id int references users(id),
property_id int references properties(id)
)