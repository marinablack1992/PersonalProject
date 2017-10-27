update properties
set imageurl = $2, address = $3, monthly_rent = $4, tenant_email = $5, lease_exp = $6
where properties.id = $1;


select * from properties
where properties.id=$1;