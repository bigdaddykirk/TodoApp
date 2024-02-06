class App extends React.Component{
state = {
    name:"Kylian Mbappe",
    age: 24
}

    render(){
        return(
            <div className = "app-content">
                <h1>Hey Devs</h1>
                <p>
                my name is {this. state. name}
                and I am {this. state. age}
                </p>
            </div>
        )
        }

}

ReactDom.render(<App />, document.getElementById('app'))