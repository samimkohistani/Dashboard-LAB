// creating a sidebar component 
function Sidebar(){
    // we are reuturning a div with classname sidebar that includes our widget reviews customers online analyisis and settign
    return(
        <div className="sidebar">
            <h4 className="top">Dashboard</h4>
            <h4>Widget</h4>
            <h4>Reviews</h4>
            <h4>Customers</h4>
            <h4>Online Analysis</h4>
            <h4>Settings</h4>
        </div>
    );
};
// this will set out componets to be able to imort in different pages components and app.js 
export default Sidebar;
