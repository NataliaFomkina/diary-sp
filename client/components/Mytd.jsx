import React from 'react';

const Mytd = React.createClass({
    render(){
        return(
            <input type="button" value="Delete"  onClick={this.props.onDelete}/>
        );
    }
});
export default Mytd;