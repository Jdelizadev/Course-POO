//En estas primeras clases estuvimos apreniendo lo que son los prototipos, los objetos que son las instancias de ellos, los objetos literales.

//Este es un objeto literal

const natalia = {
    name: 'Natalia Hernandez',
    age: 22,
    cursosAprobados:[
        'Primer curso de prueba',
        'Segundo curso de prueba'
    ], aprobarCurso(curso) {
        this.cursosAprobados.push(curso)
    }
}

natalia.aprobarCurso('Cuarto curso de prueba')

//Hacer que natalia apruebe otro curso

natalia.cursosAprobados.push('Tercer curso de prueba')


//Este es un prototipo

function Student (name, age, cursosAprobados) {
    this.name = name || 'Sin nombre';
    this.age = age; 
    this.cursosAprobados = cursosAprobados;
}
  
Student.prototype.aprobarCurso =  function(curso) {
        this.cursosAprobados.push(curso)
}

const jaime = new Student('jaime',22,[
    'Primer curso prueba',
    'Segundo curso prueba',
])

//prototipos con la sintaxis de clases

class Student2 {
    constructor (name,age,cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

const miguelito = new Student2('Miguelito', 26,[
    'Curso uno',
    'Curso dos',
])

//Esta es otra sintaxis para las clases, en vez de parametros recibe un objeto

class Student3 {
    constructor ({
        name,
        email,
        age,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(cursoNuevo) {
        this.cursosAprobados.push(cursoNuevo)
    }
}

const nat = new Student3({
    email: 'natalia@platzi.com',
    age: 22,
    name: 'nat',
    cursosAprobados: [],
})

//Aqui es el ejemplo para un molde mas completo y agregar valores por defecto

class Estudent {
    constructor({
        name,
        age,
        email,
        facebook = undefined,
        twitter = undefined,
        instagram = undefined,
        learningPath = [],
    }){
        this.age = age;
        this.name = name;
        this.email = email;
        this.socialMedia = {
            facebook,
            twitter,
            instagram,
        };
        this.learningPath = learningPath;
    }
    createLearningPath(Path){
        this.learningPath.push(Path)
    }
}

const jimmy = new Estudent({
    name: 'Jaime',
    age: 22,
    email: 'jaime@platzi.com',
    instagram: 'jdeliza',
})

class LearningPath {
    constructor({
        name,
        id,
        teacher,
        courses = []
    }) {
        this.name = name;
        this.id = id;
        this.teacher = teacher;
        this.courses = courses;
    }
}

const webDeveloper = new LearningPath({
    name: 'webDeveloper',
    id: 12,
    teacher: 'JuanDC',
    courses: ['HTML basics', 'Practice HTML']
})

jimmy.createLearningPath(webDeveloper)

class Developer {
    constructor({
        name,
        age,
        university = undefined,
        languaje = undefined,
    }) {
        this.name = name;
        this.age = age;
    }
}