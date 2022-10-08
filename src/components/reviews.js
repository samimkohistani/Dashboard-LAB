// Creating our reviews component 
function Reviews(){
    // we are ruturning a div with classname reviews
    // inside the div we have our reviews in h4 and number of reviews in h2
    return(
        <div className='reviews'>
            <h4>Reviews</h4>
            <h2>1,281</h2>
        </div>
    );
};
// this will set out componets to be able to imort in different pages components and app.js 
export default Reviews;