from Database.db import Base

from sqlalchemy import Column, String, Integer


class ShowsData(Base):
    __tablename__ = "shows_data"
    id = Column("ID", Integer, primary_key=True)   
    date = Column("Date", String(60))
    country = Column("Country", String(25)) 
    city = Column("City", String(60))
    name = Column("Name", String(60))
    

    def __init__(self, id, date, country, city, name):
        self.id = id
        self.date = date
        self.country = country
        self.city = city
        self.name = name

    def __repr__(self):
        return f"({self.id}) {self.date} {self.city} ({self.name})"