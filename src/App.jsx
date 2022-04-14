import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: "" },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "" },
    });
  };

  foo = (e) => {
    e.preventDefault();
    console.log("clicked, foo...");
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task: </label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}

export default App;
