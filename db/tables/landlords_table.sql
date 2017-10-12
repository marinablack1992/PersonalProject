CREATE TABLE IF NOT EXISTS landlords (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    img TEXT,
    auth_id TEXT,
    phone VARCHAR(180),
    prefcontact VARCHAR(180)
    status VARCHAR(180)
)