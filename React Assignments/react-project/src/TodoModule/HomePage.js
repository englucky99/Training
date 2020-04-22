import React from 'react';
import appStore from '../store';
import FormComponent from './FormComponent';
import TodoComponent from './todoComponent';
import {
    useHistory, NavLink, Route
} from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.GetUpdatedState = this.GetUpdatedState.bind(this);
        this.state = {
            todos: [],
            all: true,
            completed: false,
            active: false
        }
    }

    GetUpdatedState() {
        let state = appStore.getState();
        this.setState({
            todos: state.todo
        })
    }
    render() {
        return (
            <div>
                <section className="col-12">
                    <FormComponent GetUpdatedState={this.GetUpdatedState} />
                </section>
                <section className="col-12">
                    <div className="nav-tabs filter-nav">
                        <a className="" onClick={() => { this.setState({ all: true, completed: false, active: false }) }}>All</a> <span>/ </span>
                        <a className="" onClick={() => { this.setState({ all: false, completed: true, active: false }) }}>Completed</a> <span>/ </span>
                        <a className="" onClick={() => { this.setState({ all: false, completed: false, active: true }) }}>Active</a>
                    </div>
                    {
                        (this.state.all) ?
                            <ul>
                                {
                                    this.state.todos.map((todo, index) => {
                                        return <TodoComponent
                                            index={index}
                                            key={todo.name}
                                            todo={todo}
                                            GetUpdatedState={this.GetUpdatedState}
                                        />
                                    })
                                }
                            </ul>
                            : (this.state.active) ?
                                <ul>
                                    {
                                        this.state.todos.filter((todo) => !todo.complete).map((todo, index) => {
                                            return <TodoComponent
                                                index={index}
                                                key={todo.name}
                                                todo={todo}
                                                GetUpdatedState={this.GetUpdatedState}
                                            />
                                        })
                                    }
                                </ul>
                                : <ul>
                                    {
                                        this.state.todos.filter((todo) => todo.complete).map((todo, index) => {
                                            return <TodoComponent
                                                index={index}
                                                key={todo.name}
                                                todo={todo}
                                                GetUpdatedState={this.GetUpdatedState}
                                            />
                                        })
                                    }
                                </ul>
                    }                    
                </section>
            </div>
        );
    }

}





export default HomePage;