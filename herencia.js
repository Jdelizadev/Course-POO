
class Course {
    constructor ({
        name,
        classes = [],
        isFree = false,
        lang = 'spanish',
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name () {
        return this._name; 
    }

    set name (newName) {
        if (newName === 'Curso malvado') {
            console.error('Mmm... no!')
        } else {
            this.name = newName;
        }
    }
}   

class Student {
    constructor ({
        name,
        username,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    })
     {
        this.name = name;
        this.username = username;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    } 
}

class FreeStudent extends Student {
    constructor (props) {
        super(props);
    }

    aproveCourse (newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos gratis`)
        }
    }
}

class BasicStudent extends Student {
    constructor (props) {
        super(props);
    }

    aproveCourse (newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name}, no puedes tomar cursos en inglés`)
        }
    }
}

class ExpertStudent extends Student {
    constructor (props) {
        super(props);
    }

    aproveCourse (newCourse) {
       this.approvedCourses.push(newCourse);
    }
}

const jaime = new FreeStudent ({
    name: 'Jaime',
    email: 'jaimedelizaola@gmail.com',
    username: 'Jdeliza'
})

const cursoAvanzadoHTML = new Course ({
    name: 'Curso avanzado de HTML',
    isFree: false,
    
})