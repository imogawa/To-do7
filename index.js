const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});


let dadosArray = [];
let paraSair = "sair";

rl.question(`Insira as propriedades do CSS \n`, (oQueOUsuarioInserir) => {
    if (oQueOUsuarioInserir.trim() == paraSair) {
        rl.close();
        console.log("Lista finalizada sem dados")
    } else {
        rl.setPrompt('Insira a próxima propriedade \n');
        rl.prompt();
        dadosArray.push(oQueOUsuarioInserir.trim())
        rl.on('line', (oQueOUsuarioInserir) => {
            if (oQueOUsuarioInserir.trim() == paraSair) {
                rl.close()
                dadosArray.sort()
                for (let i = 0; i < dadosArray.length; i++) {
                    console.log(dadosArray[i])
                }
                console.log(`Lista finalizada, aqui estão seus dados: ${dadosArray.sort()}`)
            } else {
                rl.setPrompt('Insira a próxima propriedade ou digite sair para finalizar a lista \n');
                rl.prompt()
                dadosArray.push(oQueOUsuarioInserir.trim())
            }
        })
    }
})