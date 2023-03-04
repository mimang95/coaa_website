from Database.db import Base

from sqlalchemy import Column, String, Integer


class Article(Base):
    __tablename__ = "article"
    id = Column("id", Integer, primary_key=True)   
    title = Column("title", String(60))
    price = Column("price", Integer)
    img = Column("img", String(60))

    def __init__(self, id, title, price, img):
        self.id = id
        self.title = title
        self.price = price
        self.img = img

    def __repr__(self):
        return f"({self.id}) {self.title} {self.price} {self.img}"