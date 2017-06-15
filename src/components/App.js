import { h, Component } from 'preact';
import Course from './Course';
import User from './User';

const courses = [
    {
        courseImageUrl:'https://unsplash.it/348/200?image=1073',
        courseTitle: 'Get Started with Vue',
        courseDescription: 'Vue.js is a front-end JavaScript framework that is easy to learn if you already know HTML and CSS. The versatility of Vue is great for small and large-scale...',
        courseURL: 'https://code.tutsplus.com/courses/get-started-with-vue'
    },
    {
        courseImageUrl:'https://unsplash.it/348/200?image=998',
        courseTitle: 'Getting Started with Nucleus',
        courseDescription: 'Nucleus is a style guide generator based on the principles of “Atomic CSS”. It empowers you to write more modular stylesheets, whilst also allowing you to generate a style guide with minimum...',
        courseURL: 'https://webdesign.tutsplus.com/courses/getting-started-with-nucleus'
    },
    {
        courseImageUrl:'https://unsplash.it/348/200?image=882',
        courseTitle: 'PHP Design Patterns',
        courseDescription: 'Design patterns are the lifeblood of object-oriented programming. They are solutions to problems that every developer faces with just about every application...',
        courseURL: 'https://code.tutsplus.com/courses/php-design-patterns'
    }
]

export class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }
    componentDidMount(){
        fetch('https://api.github.com/users/viveksrao')
        .then(res => res.json())
        .then(user => {
            this.setState({
                user,
                loading: false
            })
            console.log(user);
        })
    }
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col">
                        {
                            this.state.loading 
                            ? <p>Please Wait...</p> 
                            : <User name={this.state.user.name} company={this.state.user.company} location={this.state.user.location}/>}
                    </div>
                </div>
                <div class="row">
                    {courses.map(course => <Course {...course} key={course.courseTitle}/>)}
                </div>
            </div>
        );
    }
}

export default App;