function Spa(){
    return (
        <>
            <h1>Welcome to Bad Bank</h1>
            <NavBar />
        </>
    )
}

ReactDom.render(
    <Spa />,
    document.getElementById('root')
)