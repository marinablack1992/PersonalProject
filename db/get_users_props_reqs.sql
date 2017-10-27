select p.id as propertyId, r.id as requestId, u.id as userId, req_img, description, priority, land_email, tenant_id, property_id, user_name, email, img, auth_id, phone, prefcontact, status, imageurl, address, monthly_rent, user_id, tenant_email, lease_exp from requests r
join users u on r.tenant_id = u.id
join properties p on r.property_id = p.id