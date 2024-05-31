class Estudante {
    constructor(nome, email, ra, curso, disciplinas) {
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }

    primeiraDisciplina() {
        return this.disciplinas.length > 0 ? this.disciplinas[0] : "O estudante não está matriculado em nenhuma disciplina.";
    }

    ultimaDisciplina() {
        return this.disciplinas.length > 0 ? this.disciplinas[this.disciplinas.length - 1] : "O estudante não está matriculado em nenhuma disciplina.";
    }
}

// Criando dois estudantes de exemplo
const estudante1 = new Estudante("João", "joao@example.com", "123456", "Engenharia", ["Cálculo", "Física", "Química"]);
const estudante2 = new Estudante("Maria", "maria@example.com", "654321", "Ciência da Computação", ["Algoritmos", "Estruturas de Dados"]);

// Imprimindo os valores na tela
console.log("Estudante 1:");
console.log("Nome:", estudante1.nome);
console.log("Email:", estudante1.email);
console.log("RA:", estudante1.ra);
console.log("Curso:", estudante1.curso);
console.log("Disciplinas:", estudante1.disciplinas);
console.log("Primeira disciplina:", estudante1.primeiraDisciplina());
console.log("Última disciplina:", estudante1.ultimaDisciplina());
console.log("\nEstudante 2:");
console.log("Nome:", estudante2.nome);
console.log("Email:", estudante2.email);
console.log("RA:", estudante2.ra);
console.log("Curso:", estudante2.curso);
console.log("Disciplinas:", estudante2.disciplinas);
console.log("Primeira disciplina:", estudante2.primeiraDisciplina());
console.log("Última disciplina:", estudante2.ultimaDisciplina());