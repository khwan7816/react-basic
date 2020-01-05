import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }

    this.inputFormHander = this.inputFormHander.bind(this)
  }

  inputFormHander (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    console.log(this.props.data)

    return (
      <article>
        <h2>Update</h2>
        <form onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(
            this.state.id,
            this.state.title,
            this.state.desc
          );
        }.bind(this)}>
          <input type="hidden" name="id" value={this.state.id} />
          <p>
            <input
              type="text"
              name="title"
              placeholder="title" 
              value={this.state.title}
              onChange={this.inputFormHander}
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHander}
            />
          </p>
          <p>
            <input type="submit"/>
          </p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;
