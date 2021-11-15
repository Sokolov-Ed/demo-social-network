import { getByDisplayValue } from "@testing-library/dom";
import React from "react";
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <div>
                Status
                {!this.state.editMode
                    ? <div>
                        <div className={classes.fieldStatus} onDoubleClick={this.activatedEditMode} >{this.props.status}</div>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivatedEditMode}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;