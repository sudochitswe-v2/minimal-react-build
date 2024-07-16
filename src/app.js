function Element(props) {
    return ( <p>{props.content}</p> )
}

ReactDOM.render(
    <Element content="A Webpack Component" />,
    document.getElementById("app")
)