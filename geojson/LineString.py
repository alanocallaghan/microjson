"""Microjson. Auto-generated by datamodel-codegen"""

from __future__ import annotations

from enum import Enum
from typing import Any, List, Optional

from pydantic import BaseModel, Field


class Type52(Enum):
    line_string = 'LineString'


class Coordinate30(BaseModel):
    __root__: List[Any]


class GeojsonLinestring(BaseModel):
    type: Type52
    coordinates: List[Coordinate30] = Field(..., min_items=2)
    bbox: Optional[List[float]] = Field(None, min_items=4)