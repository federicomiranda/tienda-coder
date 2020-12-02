function Hero() {

    const saludar = () => {
        alert('Holaaaaa');
    }

    return (
        <>
            <h1>Bievenidos a mi tienda</h1>
            <p>Vendemos zapatillas y zapatos</p>
            <button onClick={saludar}>Saludar</button>
        </>
    )
}

export default Hero;