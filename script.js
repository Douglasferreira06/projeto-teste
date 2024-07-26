/*function linguagemGenerica(){
    console.log(this.son)
}

let dog = {
    son: "Au Au",
    speak: linguagemGenerica
}

let macaco = {
    son: "huhuhaha",
    speak: linguagemGenerica
}

//dog.speak();
//macaco.speak();

let bindedFunction = linguagemGenerica.bind(macaco);
bindedFunction();*/

/*function falaDeAnimais(){
    console.log(this.son)

}




let cachorro = {
    son: "rou rou",
    fala : falaDeAnimais

}

let cavalo = {
    son: "rri rri rri ",
    fala : falaDeAnimais

}
let gato ={
    son:"miau miau",
    fala:falaDeAnimais
}
//cachorro.fala();

let bindedFunction = falaDeAnimais.bind(gato);
bindedFunction();*/



/*let dobro =  function (x){
    console.log(2*x)
}

dobro(15);*/

/*let dobro = x =>{
    return (5*x)
}

console.log(dobro(10))*/
// arro fanction
//let dobro = x =>( 2 *  x)

//console.log(dobro(8))

//callback


/*function ola(){
    console.log("ola")
}

function saudacao(s ,nome){
s();
console.log(nome)

}
saudacao(ola,"douglas")*/

/*let usuario = ["douglas", "vanusa","jhao"]

function inserirUsuario ( nome, callback){
    setTimeout(() => {usuario.push(nome)
        callback()
    }, 1000);

}

function listaUsuario(){
    console.log(usuario)
}

inserirUsuario("angelita",listaUsuario)*/
//promises
/*let usuarios = ["douglas", "vanusa", "jhao"];

function inserirUsuario(nome) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({ msg: "erro qualquer" });
            }
        }, 2000);
    });
}

function listaUsuario() {
    console.log(usuarios);
}

// Usando o método inserirUsuario e depois listando os usuários
inserirUsuario("angelita")
    .then(listaUsuario)
    .catch((erro) => console.log(erro.msg));*/
    let usuarios = ["douglas", "vanusa", "jhao"];

    function inserirUsuario(nome) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                usuarios.push(nome);
                resolve();
            }, 2000);
        });
    }
    
    function listaUsuario() {
        console.log(usuarios);
    }
    
    inserirUsuario("angelita")
        .then(listaUsuario)
        .catch((erro) => console.log(erro.msg));
    