delete from requests
where tenant_id = $1 and id = $2;

select * from requests
where tenant_id = $1;