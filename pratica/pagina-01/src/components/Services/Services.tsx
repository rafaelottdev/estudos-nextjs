async function Services() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    return (
        <div>
            Outros Serviços

            <div>Pula muro</div>
            <div>Resgata gatos</div>
            <div>Anda de carro (com estilo)</div>
            <div>Pula sem paraquedas</div>
            <div>Vendemos caixões</div>
        </div>
    )
}

export default Services
