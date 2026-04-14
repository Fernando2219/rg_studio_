function enviarWhats(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome e sua ideia.");
        return;
    }
    const telefone = '5547997457819';
    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}