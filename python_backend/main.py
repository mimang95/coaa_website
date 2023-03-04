from fastapi import FastAPI

from Database.models.database_models.ShowsData import ShowsData
from Database.models.database_models.Article import Article
from Database.models.database_models.Size import Size
from Database.models.database_models.SizeArticle import SizeArticle
from Database.db import session
from api.api_models.request_bodies.UpdateStock import UpdateStock

from sqlalchemy import select


app = FastAPI()

#results = session.execute(select(SizeArticle.quantity).where(SizeArticle.size_id == 1 ).where(SizeArticle.art_id == 1))
#print((results.scalars().all())[0])

@app.put("/stock/")
async def removeOrAddItems(update: UpdateStock) -> UpdateStock:
    oldQuantitiesObject = session.execute(select(SizeArticle.quantity).where(SizeArticle.size_id == update.size ).where(SizeArticle.art_id == update.article))
    oldQuantity = (oldQuantitiesObject.scalars().all())[0]
    newQuantity = oldQuantity - update.quantity
    update.quantity = newQuantity
    session.query(SizeArticle).filter(SizeArticle.art_id == update.article).filter(SizeArticle.size_id == update.size).update({'quantity': newQuantity})
    session.commit()
    #StoreData.quantity
    return update
    
    #session.add(newQuantity)
    #session.commit()