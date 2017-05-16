var React = require('react');

//var WeatherMessage = React.createClass({
//    render: function() {
//        var{temp, location} = this.props;
//        return (
//            <div>
//                <h3>{location} is {temp}</h3>     
//            </div>
//        );
//    }
//});

var WeatherMessage = {temp, location} => {    
    return (
        <div>
            <h3>{location} is {temp}</h3>     
        </div>
    )
};

module.exports = WeatherMessage;