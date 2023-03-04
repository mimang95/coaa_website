from python_backend.Database.db import Base

from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR

class ShowsData(Base):
    __tablename__ = "shows_data"
    id = Column("ID", Integer, primary_key=True)
    date = Column("Date", String(45))
    city = Column("City", String(45))
    name = Column("Name", String(45))

    def __init__(self, id, date, city, name):
        self.id = id
        self.date = date
        self.city = city
        self.name = name

    def __repr__(self):
        return f"({self.id}) {self.date} {self.city} ({self.name})"