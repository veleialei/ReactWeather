var React = require('react');
var {Link, IndexLink} = require('react-router');

//var Nav = React.createClass({
//    render: function (){
//        return (
//            <div>
//                <h2>Nav Component</h2>
//                <IndexLink activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = "/">GetWeather</IndexLink>
//                <Link activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = "/about">About</Link>
//                <Link activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = "/examples">Examples</Link>
//            </div>
//           
//        );
//    }
//});


var Nav = (props) => {
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = "/">GetWeather</IndexLink>
            <Link activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = "/about">About</Link>
            <Link activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = "/examples">Examples</Link>
        </div>
    )
};


module.exports = Nav;