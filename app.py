from flask import Flask, render_template, redirect, url_for, flash, abort
from flask_ckeditor import CKEditor
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from flask_login import UserMixin, login_user, LoginManager,  current_user, logout_user
from flask_gravatar import Gravatar
from functools import wraps


app = Flask(__name__)
app.config['SECRET_KEY'] = 'ksnkfnkdnfjksuwsf'
ckeditor = CKEditor(app)


##CONNECT TO DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///polilibro.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)

gravatar = Gravatar(app, size=100, rating='g', default='retro', force_default=False, force_lower=False, use_ssl=False, base_url=None)

@login_manager.user_loader
def load_user(user_id):
    return Docente.query.get(int(user_id))

def admin_only(f):
    @wraps(f)
    def decorated_function(*args,**kwargs):
        if current_user.id !=1:
            return abort(403)
        return f(*args,**kwargs)
    return decorated_function


#para los docentes
class Docente(UserMixin, db.Model):
    __tablename__ = "docentes"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    nombre = db.Column(db.String(100))
    posts = relationship("DocentePost", back_populates="autor")
    comentarios=relationship("Comentario",back_populates="autor_comentario")
    

class DocentePost(db.Model):
    __tablename__="docente_posts"
    id=db.Column(db.Integer,primary_key=True)
    autor_id=db.Column(db.Integer, db.ForeignKey("docentes.id"))
    autor=relationship("Docente",back_populates="posts")
    titulo=db.Column(db.String(250), unique=True, nullable=False)
    subtitulo=db.Column(db.String(250), nullable=False)
    fecha=db.Column(db.String(250), nullable=False)
    cuerpo=db.Column(db.Text, nullable=False)
    img_url=db.Column(db.String(250), nullable=False)
    comentarios=relationship("Comentario",back_populates="post_principal")

class Comentario(db.Model):
    __tablename__="comentarios"
    id=db.Column(db.Integer,primary_key=True)
    texto=db.Column(db.Text,nullable=False)
    autor_id=db.Column(db.Integer,db.ForeignKey("docentes.id"))
    autor_comentario=relationship("Docente",back_populates="comentarios")
    post_id=db.Column(db.Integer,db.ForeignKey("docente_posts.id"))
    post_principal=relationship("DocentePost",back_populates="comentarios")
    texto=db.Column(db.Text,nullable=False)

class Concepto(db.Model):
    __tablename__="conceptos"
    id=db.Column(db.Integer,primary_key=True)
    concepto=db.Column(db.String(50), nullable=False)
    definicion=db.Column(db.String(250), nullable=False)
    autor_id=db.Column(db.Integer,db.ForeignKey("docentes.id"))

with app.app_context():
    db.create_all()


@app.route('/',methods=['GET','POST'])
def home():
    return render_template('index.html')

@app.route('/polilibro')
def polilibro():
    return render_template('polilibro.html')


@app.route("/contacto")
def contacto():
    return render_template("contacto.html")

@app.route('/requerimientos')
def requerimientos():
    return render_template('requerimientos.html')

#Unidades del unidad1
@app.route('/unidad1')
def unidad1():
    return render_template('unidad1.html')

@app.route('/unidad2')
def unidad2():
    return render_template('unidad2.html')

@app.route('/unidad3')
def unidad3():
    return render_template('unidad3.html')

@app.route('/unidad4')
def unidad4():
    return render_template('unidad4.html')

@app.route('/unidad5')
def unidad5():
    return render_template('unidad5.html')

#Glosario
@app.route('/glosario')
def glosario():
    return render_template('glosario.html')

#Manual
@app.route('/manual')
def manual():
    return render_template('manual.html')

if __name__ == '__main__':
    app.run(port=5000,debug=True)