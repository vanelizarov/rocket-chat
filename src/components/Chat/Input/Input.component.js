import React, { Component } from 'react';

import './Input.css';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.onFieldKeyDown = this.onFieldKeyDown.bind(this);
        this.onSendBtnClick = this.onSendBtnClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.field = null;
    }

    isEmpty(str) {
        return str === '' && !str.replace(/\s/g, '').length;
    }

    onFieldKeyDown(e) {
        const { message } = this.state;

        if (((e.ctrlKey || e.metaKey) && e.keyCode === 13) && !this.isEmpty(message)) {
            this.handleSend(message);
        }
    }

    onFieldChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    onSendBtnClick() {
        const { message } = this.state;

        if (!this.isEmpty(message)) {
            this.handleSend(message)
        }
    }

    handleSend(msg) {

        const { id } = this.props.users.admin;
        const payload = {
            from: id,
            text: msg,
            date: (new Date()).getTime(),
            transaction: null
        };

        this.props.sendMessage(payload);
        this.field.value = '';
        this.setState({
            message: ''
        })
    }

    render() {
        const { message } = this.state;
        const { shadow } = this.props;

        const inputClassName = `input${ shadow ? ' input_shadow' : '' }`;

        return (
            <div className={ inputClassName }>
                <textarea className="input__field"
                          placeholder="Сообщение"
                          onKeyDown={ this.onFieldKeyDown }
                          onChange={ this.onFieldChange }
                          ref={ (f) => this.field = f }>{}</textarea>
                <button className="input__btn"
                        disabled={ this.isEmpty(message) }
                        onClick={ this.onSendBtnClick }>Отправить</button>
            </div>
        )
    }
}

export default Input;