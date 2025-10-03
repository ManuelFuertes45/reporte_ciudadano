from dotenv import load_dotenv
from load import load_db
from datetime import datetime

class VerificationsDAO:
    def __init__(self):
        load_dotenv()
        self.conn = load_db()

    def getVerificationById(self, verification_id):
        """Fetch a verification row by its ID."""
        query = "SELECT * FROM verifications WHERE id = %s"
        with self.conn.cursor() as cur:
            cur.execute(query, (verification_id,))
            return cur.fetchone()

    def getVerificationByEmail(self, email):
        """Fetch a verification row by email."""
        query = "SELECT * FROM verifications WHERE email = %s"
        with self.conn.cursor() as cur:
            cur.execute(query, (email,))
            return cur.fetchone()

    def insertVerification(self, username, password, email, code):
        """Insert a new verification record. created_at defaults to now."""
        query = """
            INSERT INTO verifications (username, password, email, code, created_at)
            VALUES (%s, %s, %s, %s, %s)
            RETURNING id, code;
        """
        created_at = datetime.now()
        with self.conn.cursor() as cur:
            cur.execute(query, (username, password, email, code, created_at))
            self.conn.commit()
            return cur.fetchone()  # returns {id, code}

    def deleteVerification(self, verification_id):
        """Delete a verification record by ID."""
        query = """
            DELETE FROM verifications
            WHERE id = %s
            RETURNING id, username, email, code;
        """
        with self.conn.cursor() as cur:
            cur.execute(query, (verification_id,))
            self.conn.commit()
            return cur.fetchone()

    def close(self):
        """Close the DB connection."""
        self.conn.close()
