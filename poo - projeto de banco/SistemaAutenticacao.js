export class SistemaAutenticacao{
    static login (funcionario, senha){

        if(funcionario.senha == senha){
            console.log('está logado');
        }else{
            console.log('não está logado');
        }
        return
    }
}