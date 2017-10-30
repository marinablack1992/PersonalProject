insert into requests(req_img, description, priority, land_email, tenant_id, property_id)
values ($1, $2, $3, $4, $5, $6);

select * from requests;