import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretorRodrigo = new Diretor('Rodrigo', 16000, 15675236956)
diretorRodrigo.cadastrarSenha('rod156')


const geretenteRicardo = new Gerente('Ricardo', 9000, 75462598764)

const estaLogado = SistemaAutenticacao.login(diretorRodrigo, 'rod156')

console.log(estaLogado);
