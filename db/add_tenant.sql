UPDATE properties
SET tenant_email = $2, lease_Exp = $3
WHERE id = $1;

select * from properties
where id = $1;