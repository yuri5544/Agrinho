function ativarPratica(tipo) {
    // Captura o elemento do painel de status
    const painel = document.getElementById('status-painel');
    const mensagem = document.getElementById('mensagem-status');
    
    // Altera o conteúdo e estilo baseado no botão clicado
    if (tipo === 'tecnologia') {
        mensagem.innerHTML = "<strong>Resultados do Drone:</strong> Redução de 30% no uso de defensivos agrícolas e economia de água através do mapeamento de precisão! 🎯";
        painel.style.borderLeft = "6px solid #40916c";
    } 
    else if (tipo === 'reflorestamento') {
        mensagem.innerHTML = "<strong>Mata Ciliar Protegida:</strong> Água limpa garantida para a região e preservação da fauna local. A biodiversidade agradece! 🌳🦜";
        painel.style.borderLeft = "6px solid #2d6a4f";
    } 
    else if (tipo === 'energia') {
        mensagem.innerHTML = "<strong>Energia Limpa:</strong> Telhados dos galpões gerando energia solar. Redução drástica na pegada de carbono da propriedade! ☀️🔋";
        painel.style.borderLeft = "6px solid #52b788";
    }
    
    // Adiciona um pequeno efeito de pulso ao atualizar
    painel.style.animation = 'none';
    setTimeout(() => {
        painel.style.animation = 'pulse 0.4s ease';
    }, 10);
}

// Injeta dinamicamente a animação de pulso no CSS para feedback visual do clique
const estiloAnimacao = document.createElement('style');
estiloAnimacao.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(estiloAnimacao);
