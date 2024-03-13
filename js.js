window.addEventListener("load", function(){

    idades = [10, 17, 19, 22, 34, 40];
    document.write(`<p>Idades usadas: ${idades}</p> <rb><br><l>`);

// A
    somaIdades = idades.reduce((soma, idade) => soma + idade, 0);
    document.write(`<p>A - A soma das idades: ${somaIdades}</p>`);

// B
    mediaIdades = somaIdades / idades.length;
    document.write(`<p>B - A média aritmética simples das idades: ${mediaIdades}</p>`);

// C
    maiorIdade = idades.reduce((maior, idade) => idade > maior ? idade : maior, 0);
    document.write(`<p>C - A maior idade: ${maiorIdade}</p>`);

// D
    idadesImpares = idades.filter(idade => idade % 2 !== 0);
    document.write(`<p>D - As idades ímpares: ${idadesImpares}</p>`);

// E
    todosMaioresIdade = idades.every(idade => idade >= 18);
    document.write(`<p>E -Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false: ${todosMaioresIdade}</p>`);

// F
    valorInformado = parseInt(prompt("Informe um valor:"));
    todasMaiorIgualValor = idades.every(idade => idade >= valorInformado);
    document.write(`<p>F -Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário: ${todasMaiorIgualValor}</p>`);

// G
    idadeDeterminada = 20;
    idadesMaioresIgual = idades.filter(idade => idade >= idadeDeterminada);
    document.write(`<p>G -Exibir todas as idades maiores ou iguais a determinada idade: ${idadesMaioresIgual}</p>`);


//H
    somaIdadesMaioresIgual = idadesMaioresIgual.reduce((acc, idade) => acc + idade, 0);
    mediaIdadesMaioresIgual = somaIdadesMaioresIgual / idadesMaioresIgual.length;
    document.write(`<p>H - A média das idades das pessoas com idades maiores ou iguais a determinada idade: ${mediaIdadesMaioresIgual}</p>`);


});