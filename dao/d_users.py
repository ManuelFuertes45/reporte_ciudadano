from dotenv import load_dotenv
from load import load_db


class UsersDAO:

    def __init__(self):
        load_dotenv()
        self.conn = load_db()

    def getAllUsers(self):
        query = "SELECT * FROM users"
        with self.conn.cursor() as cur:
            cur.execute(query)
            return cur.fetchall()

    def getUserById(self, user_id):
        query = "SELECT * FROM users WHERE id = %s"
        with self.conn.cursor() as cur:
            cur.execute(query, (user_id,))
            return cur.fetchone()

    def insertUser(self, username, password, position):
        query = """
            SELECT setval('users_id_seq', (SELECT MAX(id) FROM users), true);
            INSERT INTO users (username, password, position)
            VALUES (%s, %s, %s)
            RETURNING id, username, password, position;
        """

        with self.conn.cursor() as cur:
            cur.execute(query, (username, password, position))
            self.conn.commit()
            return cur.fetchone()

    def updateUser(self, user_id, username, password, position):
        query = """
            UPDATE users
            SET username = %s, password = %s, position = %s 
            WHERE id = %s
            RETURNING id, username, password, position;
        """
        values = (username, password, position, user_id)

        with self.conn.cursor() as cur:
            cur.execute(query, values)
            self.conn.commit()
            return cur.fetchone()

    def deleteUser(self, user_id):
        query = """
            DELETE FROM users WHERE id = %s
            RETURNING id, username, password, position;
            """

        with self.conn.cursor() as cur:
            cur.execute(query, (user_id,))
            self.conn.commit()
            return cur.fetchone()

    def close(self):
        self.conn.close()
