from Database.db import Base

from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR


class Size(Base):
    __tablename__ = "size"
    id = Column("ID", Integer, primary_key=True)   
    size = Column("Size", String(10), nullable=True)
    sex = Column("sex", String(1), nullable=True) 
    

    def __init__(self, id, size, sex):
        self.id = id
        self.size = size
        self.sex = sex

    def __repr__(self):
        return f"({self.id}) {self.size} {self.sex}"