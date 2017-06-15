import { h } from 'preact';

export function Course(props){
    return(
        <div class="col">
            <div class="card">
                <img class="img-responsive card-img-top" src={props.courseImageUrl} alt={props.courseTitle}/>
                <div class="card-block">
                    <h4 class="card-title">{props.courseTitle}</h4>
                    <p class="card-text">{props.courseDescription}</p>
                    <a href="{props.courseURL}" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default Course;