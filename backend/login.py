from flask import Flask
from flask_bcrypt import Bcrypt
import json

app = Flask(__name__)
bcrypt = Bcrypt(app)

archivo = "usuarios.json"

usuario = {
    "username1": {
        "username": "administrador",
        "password": "1234",
        "role": "administrador"
    }
}

#Encriptar 
for key in usuario:
    clave = usuario[key]["password"]
    hash_clave = bcrypt.generate_password_hash(clave).decode("utf-8")
    usuario[key]["password"] = hash_clave

#Guardar archivo
with open(archivo, "w") as f:
    json.dump(usuario, f, indent=4)

@app.route("/")
def home():
    return {"message": "esto funciona"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)