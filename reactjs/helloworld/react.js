const e = React.createElement;
class Hello extends React.Component {
  render() 
  {
    return e('div',null,`Hello ${this.props.name}`);
  }
}

ReactDOM.render(
  e(Hello,{name:'World'},null),
  document.getElementById('hello-world')
)