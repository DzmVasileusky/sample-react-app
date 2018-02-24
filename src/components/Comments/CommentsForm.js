import React from 'react';

export default class CommentsForm extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      name: '',
      email: '',
      body: '',

      // validation
      invalid: false,
      inputs: {}
    };

    this.formInvalid = false;

  }

  componentDidMount () {

    this.registerInputs();

  }

  // register inputs
  registerInputs() {

    const registerInput = (input) => {
    
      if (!input || input.name in this.state.inputs) {

        return;

      }

      // add validators
      const validators = {};
      input.getAttribute('data-validate')
        .split(',')
        .forEach((item) => {
          const errorObj = item.split(':');

          validators[errorObj[0]] = {
            value: errorObj[1] * 1 || true,
            invalid: false
          }

        });

      const newInput = {
        element: input,
        invalid: false,
        validators
      };

      this.setState(prevState => ({
        inputs: Object.assign(prevState.inputs, {
          [input.name]: newInput
        })
      }));
      
    };

    document.querySelectorAll('[data-validate]').forEach(registerInput);

  }

  // validate single input
  validateInput (element) {

    const inputs = Object.assign(
      {},
      this.state.inputs
    );
    const input = inputs[element.name];
    const inputValue = element.value;

    if (!input) {
      return;
    }

    // set invalid state for the input and the form
    const setValidationState = (validator, value) => {
      if (value) {

        validator.invalid = true;
        input.invalid = true;
        formInvalid = true;

      } else {

        validator.invalid = false;

      }
    }

    // reset validation
    input.invalid = false;
    let formInvalid = false;

    // validate through registered rules
    for (let name in input.validators) {

      const validator = input.validators[name];

      switch (name) {
        
        case 'required':

          setValidationState(validator, !inputValue);

          break;

        case 'maxlength':

          setValidationState(validator, inputValue.length > validator.value);

          break;

        default:
          break;
      
      }

    } 

    // update field validation state
    this.setState({
      inputs 
    });

    // update form validation state
    if (formInvalid) {

      this.formInvalid = formInvalid;

    }

  }

  // validate all form inputs
  validateForm () {

    // reset validation state
    this.formInvalid = false;

    // validate inputs
    for (let i in this.state.inputs) {

      this.validateInput(this.state.inputs[i].element);

    }

    this.setState({
      invalid: this.formInvalid
    });

    console.log('Validated: ', this.state.inputs.name.validators);

  }

  // render error in template
  renderError (inputName, validatorName, message) {

    return this.state.inputs[inputName]
      && this.state.inputs[inputName].validators[validatorName].invalid
      && <span className="text-danger">{message}</span>;

  }

  // handle input change
  handleChange (e) {

    const element = e.target;
    const name = element.name;
    const value = element.value;

    this.setState({
      [name]: value
    }, this.validateInput.bind(this, element));
  
  }

  // handle form submit
  handleSubmit (e) {

    e.preventDefault();

    this.validateForm();

    if (!this.formInvalid) {

      this.props.saveComments(this.state);
      this.clearForm();

    }
  
  }

  // clear form inputs
  clearForm () {

    const inputs = Object.assign(
      {},
      this.state.inputs
    );

    for (let i in inputs) {

      inputs[i].element.value = '';

    }

    this.setState({
      inputs,
      name: '',
      email: '',
      body: ''
    });

  }

  render () {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Enter your comment</h2>
        <div className="row">
          <div className="col-6 form-group">
            <label htmlFor="comment-name">Name</label><br />
            <input className="form-control" 
              name="name" 
              type="text" 
              value={this.state.name.value}
              data-validate="required,maxlength:32"
              onChange={this.handleChange.bind(this)} />

            {this.renderError('name', 'required', 'The field is required')}
            {this.renderError('name', 'maxlength', 'Maximum field length is 32')}

          </div>
          <div className="col-6 form-group">
            <label htmlFor="comment-name">Email</label><br />
            <input className="form-control" 
              name="email" 
              type="email"
              value={this.state.email.value}
              data-validate="required"
              onChange={this.handleChange.bind(this)} />

            {this.renderError('email', 'required', 'The field is required')}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment-name">Message</label><br />
          <textarea className="form-control" 
            name="body"
            value={this.state.body.value}
            data-validate="required"
            onChange={this.handleChange.bind(this)} />

          {this.renderError('body', 'required', 'The field is required')}
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    );

  }

};