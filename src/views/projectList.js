import React, { Component } from 'react';

class ProjectList extends Component {

    state = {
      projects: []
    }

    async componentDidMount() {
      try {
        const res = await fetch('http://127.0.0.1:8000/project/'); // fetching the data from api, before the page loaded
        const projects = await res.json();
        this.setState({
            projects: projects
        });
      } catch (e) {
        console.log(e);
      }
    }

    render() {
        return (
          <div>
            <h1>Available Projects</h1>
            {this.state.projects.map(item => (
                <div style={{width: '300px', height: '300px'}}>
                    <h3>{item.title}</h3>
                    <hr/>
                    <p>
                    {item.description}
                    </p>
                </div>
            ))}
          </div>
    );
    }
}

export default ProjectList;