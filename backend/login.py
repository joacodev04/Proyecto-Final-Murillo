from flask import Flask, request
from flask_bcrypt import Bcrypt
import json

app = Flask(__name__)
bcrypt = Bcrypt(app)

archivo = "usuarios.json"

@app.route("/acceso-login", methods=["POST"])
def login():
    data = request.json

    username = data["username"]
    password = data["password"]

    with open(archivo, "r") as f:
        usuarios = json.load(f)

    for user in usuarios.values():
        if user["username"] == username:
            if bcrypt.check_password_hash(user["password"], password):
                return {"mensaje": "Login correcto"}

    return {"error": "Credenciales incorrectas"}, 401


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)