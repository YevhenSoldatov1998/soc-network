import React from 'react'

class StatusProfile extends React.Component {
    state = {
        isMode: false,
        text: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    editStatus = () => {
        this.setState({isMode: true});
    };
    saveStatus = () => {
        this.setState({isMode: false});
        this.props.userStatusUpdate(this.state.text);

    };

    statusChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    render() {
        return (
            <div>
                {!this.state.isMode ?

                    <div>
                        <strong onClick={this.editStatus}>{this.props.status || 'status is empty'}</strong>
                    </div>
                    :
                    <div>
                        <input onChange={this.statusChange}
                               autoFocus={true}
                               onBlur={this.saveStatus} type="text"
                               value={this.state.text}/>
                    </div>
                }
                <br/>
            </div>
        )
    }

}

export default StatusProfile
