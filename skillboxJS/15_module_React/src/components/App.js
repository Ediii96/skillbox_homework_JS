import React, { Component } from "react";
import { format } from 'date-fns';
import '../styles/App.css';

class App extends Component {
    
    state = {
        comments: [],
        form: {
            name: '',
            comment: ''
        }
    }
        
    componentDidMount() {
        if (localStorage.getItem('state')) {
            this.setState({ ...JSON.parse(localStorage.getItem('state')) })
        }
    }
        
    addComment = () => {
        this.state.form.name = this.state.form.name.replace(/<[^>]+>/g,'');
        this.state.form.comment = this.state.form.comment.replace(/<[^>]+>/g,'');
        if (this.state.form.name.length === 0 || this.state.form.comment.length === 0) {
            alert('Ошибка ввода полей')
        }
        else{
            this.setState({

                comments: [
                ...this.state.comments,
                {
                    id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
                    name: this.state.form.name,
                    comment: this.state.form.comment
                }
                ],
                form: {
                    name: '',
                    comment: ''
                }
            }, () => localStorage.setItem('state', JSON.stringify(this.state)))
        }
    
    }    
        
    removeComment = (id) => {
        this.setState({
            comments: this.state.comments.filter(comment => comment.id !== id)
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }
        
    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <div className="App">

            <div style={ {marginBottom: "20px"} }>
                <label>Имя: <input
                    type="text"
                    value={this.state.form.name}
                    name="name"
                    onChange={this.handleChange} /></label><br />
                <label>Коментарий:<br /> 
                <textarea
                    name="comment"
                    value={this.state.form.comment}
                    onChange={this.handleChange}>
                </textarea>
                </label><br />
                <button className="btn btn-primary btn-lg" onClick={this.addComment}>Добавить комментарий</button>
            </div>
                {this.state.comments.map(comment => <div key={comment.id} style={{border: '5px solid #000000'}}>
                <span style={ {fontStyle: 'italic'}}>Коментарий №{comment.id} Дата: {format(new Date(), 'dd/MM/yyyy')}: </span><br />
                <span>Автор комментария:  </span>
                <strong>{comment.name}</strong><br />
                <span style={{border: '2px solid red', textAlign: 'start', paddingLeft: '30px'}}>{comment.comment}</span>
                <button onClick={this.removeComment.bind(null, comment.id)} style={{padding: '10px'}}>Удалить</button>
            </div>)}
            <br />
            </div>
        )
    }
    
}

export default App;