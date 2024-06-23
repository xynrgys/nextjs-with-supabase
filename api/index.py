from fastapi import Depends, FastAPI, HTTPException

app = FastAPI()

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}
