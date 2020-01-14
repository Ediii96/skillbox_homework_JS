import React, { Component } from "react";
import { format } from 'date-fns';
import AppInput from "./Input.js";
import AppTextarea from "./Textarea.js";
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
                    id: this.state.comments.length ? this.state.comments.reduce((props, count) => props.id > count.id ? props : count).id + 1 : 1,
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
                {this.state.comments.map(comment => <div className="Comment" key={comment.id}>
                    <span>Комментарий №{comment.id}</span><br />
                    <span>Дата: {format(new Date(), 'dd/MM/yyyy')} </span><br />
                    <span>Автор комментария:</span>
                    <strong className="Comment_author-name">{comment.name}</strong><br />
                    <span className="Comment_author-comment">{comment.comment}</span><br />
                    <button className="Comment_author-button" onClick={this.removeComment.bind(null, comment.id)}>Удалить</button>
                </div>)}
                <div className="Form">
                    <label>
                        Имя:<br /> 
                        <AppInput 
                            type="text"
                            name="name"
                            className="Form_input"
                            value={this.state.form.name}
                            onChange={this.handleChange}
                        />
                    </label><br />
                    <label>
                        Комментарий:<br /> 
                        <AppTextarea 
                            name="comment"
                            className="Form_textarea"
                            value={this.state.form.comment}
                            onChange={this.handleChange}
                        />
                    </label><br />
                    <button className="Form_button" onClick={this.addComment}>Добавить комментарий</button>
                </div>
                <br />
            </div>
        )
    }
    
}

export default App;