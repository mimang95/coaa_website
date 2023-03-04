from Database.db import Base
from Database.models.database_models.Size import Size

from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR


class SizeArticle(Base):
    __tablename__ = "size_article"
    size_id = Column("size_id", Integer, primary_key=True, nullable=True)
    art_id = Column("art_id", Integer, primary_key=True, nullable=True)
    quantity = Column("quantity", Integer)

    def __init__(self, size_id, art_id, quantity):
        self.size_id = size_id
        self.art_id = art_id
        self.quantity = quantity

    def __repr__(self):
        return f"({self.size_id}) {self.art_id} {self.quantity}"