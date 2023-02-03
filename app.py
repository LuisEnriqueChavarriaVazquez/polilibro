from flask import Flask,redirect,url_for,render_template,request


### cada que se hacen cambios en el html de la pagina es necesario ejecutar el siguiente comando para
### verlos reflejados

#npm run create-css

app=Flask(__name__)
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