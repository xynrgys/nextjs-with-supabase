from fastapi import Depends, FastAPI, HTTPException

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World, supabase connected"}
