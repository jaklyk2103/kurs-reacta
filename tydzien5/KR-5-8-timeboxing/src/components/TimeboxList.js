import React from "react";

import Timebox from "./Timebox";
import TimeboxCreator from "./TimeboxCreator";
import ErrorMessage from "./ErrorMessage";

class TimeboxList extends React.Component {
    state = {
        hasError: false,
        timeboxes: [
            { id: "a", title: "Uczę się o console", totalTimeInMinutes: 25 },
            { id: "b", title: "Uczę się debugować", totalTimeInMinutes: 15 },
            { id: "c", title: "Uczę się TDD", totalTimeInMinutes: 5 },
        ]
    }

    addTimebox = (timebox) => {
        this.setStatasde(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes };
        })
    }
    removeTimebox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToRemove);
            return { timeboxes };
        })
    }
    updateTimebox = (indexToUpdate, updatedTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((timebox, index) =>
                index === indexToUpdate ? updatedTimebox : timebox
            )
            return { timeboxes };
        })
    }

    handleCreate = (createdTimebox) => {
        try {
            this.addTimebox(createdTimebox);
        } catch (error) {
            this.setState({ hasError: true })
        }
    }
    render() {
        return (
            <ErrorMessage hasError={this.state.hasError} message="An error occured! We're trying to fix that.">
                <TimeboxCreator onCreate={this.handleCreate} />
                {this.state.timeboxes.map((timebox, index) => (
                    <Timebox
                        key={timebox.id}
                        title={timebox.title}
                        totalTimeInMinutes={timebox.totalTimeInMinutes}
                        onDelete={() => this.removeTimebox(index)}
                        onEdit={() => this.updateTimebox(index, {...timebox, title: "Updated timebox"})}
                    />
                ))}
            </ErrorMessage>
        )
    }
}

export default TimeboxList;
