from typing import List, Union

from fastapi import FastAPI
from pydantic import BaseModel

class UpdateStock(BaseModel):
    size: int
    article: int
    quantity: int
