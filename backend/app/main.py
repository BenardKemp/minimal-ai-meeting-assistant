from fastapi import FastAPI

app = FastAPI(
    title="Minimal AI Meeting Assistant",
    version="0.1.0"
)

@app.get("/")
def root():
    return {
        "message": "Minimal AI Meeting Assistant API"
    }
