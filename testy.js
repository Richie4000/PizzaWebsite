function Hello() {
	return  React.createElement('div', null, 'Hello React!!!!!!');
    
}

ReactDOM.render(
  <Hello />, 
  document.getElementById('mountNode'),
);
