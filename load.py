import psycopg2
import bcrypt
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Connect to local PostgreSQL (Docker) using individual parameters
def load_db():
    return psycopg2.connect(
        dbname=os.getenv("DATABASE"),
        user=os.getenv("USER"),
        password=os.getenv("PASSWORD"),
        host=os.getenv("HOST"),     # Usually 'localhost' or container name
        port=os.getenv("PORT"),     # Default PostgreSQL port is 5432
        connect_timeout=5           # Prevent hanging if connection fails
    )

# Close connection safely
def close_db(conn, cursor):
    conn.commit()
    cursor.close()
    conn.close()

# Securely hash passwords before storing
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
