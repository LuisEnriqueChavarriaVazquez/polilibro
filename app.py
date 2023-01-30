from flask import Flask,redirect,url_for,render_template,request


### cada que se hacen cambios en el html de la pagina es necesario ejecutar el siguiente comando para
### verlos reflejados

#npm run create-css

app=Flask(__name__)
@app.route('/',methods=['GET','POST'])
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=5000,debug=True)