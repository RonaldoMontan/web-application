// Criar estrelas animadas
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Atualizar relógio
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR');
    const dateString = now.toLocaleDateString('pt-BR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDate').textContent = dateString;
}

// Contador de visitantes animado
function animateCounter() {
    const counter = document.getElementById('visitorCount');
    const target = Math.floor(Math.random() * 50) + 20;
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        counter.textContent = Math.floor(current);
        if (current >= target) {
            clearInterval(timer);
            counter.textContent = target;
        }
    }, 50);
}

// Uptime counter
function updateUptime() {
    const startTime = new Date().getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = now - startTime;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('uptime').textContent = `${hours}h ${minutes}m`;
    }, 60000);
}

// Fogos de artifício
function launchFireworks() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 200);
    }
    
    showNotification('🎆 Fogos de artifício lançados!');
}

function createFirework() {
    const firework = document.createElement('div');
    firework.style.position = 'fixed';
    firework.style.width = '4px';
    firework.style.height = '4px';
    firework.style.borderRadius = '50%';
    firework.style.backgroundColor = '#ff6b6b';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';
    firework.style.zIndex = '9999';
    firework.style.animation = 'fireworkExplode 1s ease-out forwards';
    
    document.body.appendChild(firework);
    
    setTimeout(() => {
        document.body.removeChild(firework);
    }, 1000);
}

// Adicionar CSS para fogos
const style = document.createElement('style');
style.textContent = `
    @keyframes fireworkExplode {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(20); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Mudar tema
function changeTheme() {
    const themes = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg,rgb(66, 55, 221) 0%,rgb(54, 28, 128) 100%)',
        'linear-gradient(135deg,rgb(63, 55, 55) 0%,rgb(94, 82, 17) 100%)',
        'linear-gradient(135deg,rgb(25, 98, 192) 0%,rgb(39, 57, 73) 100%)',
    ];
    
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.background = randomTheme;
    showNotification('🎨 Tema alterado!');
}

// Funções de clique nos cards
function showStats() {
    showNotification('📊 Estatísticas atualizadas!');
    animateCounter();
}

function showWeather() {
    showNotification('🌤️ Dados meteorológicos carregados!');
}

function showTime() {
    showNotification('⏰ Relógio sincronizado!');
}

function showSurprise() {
    showNotification('✨ Área de surpresas ativada!');
}

function showAchievements() {
    showNotification('🏆 Conquistas desbloqueadas!');
}

function showSystemInfo() {
    showNotification('💾 Informações do sistema atualizadas!');
}

// Sistema de notificações
function showNotification(message) {
    // Remove notificação existente
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Logout
function logout() {
    fetch('logout.php', {
        method: 'POST',
        credentials: 'same-origin' // Importante para enviar os cookies de sessão
    })
    .then(response => {
        if(response.ok) {
            // Redireciona após o logout ser bem-sucedido
            window.location.href = 'login.php'; // ou a página que você quiser
        }
    })
    .catch(error => {
        console.error('Erro ao fazer logout:', error);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    updateTime();
    setInterval(updateTime, 1000);
    animateCounter();
    updateUptime();
    
    // Personalizar nome do usuário (você pode pegar do PHP)
    const userName = 'Dev'; // Substitua pela variável PHP: <?php echo $_SESSION['username']; ?>
    document.getElementById('welcomeText').textContent = `Bem-vindo, ${userName}! 🚀`;
    
    // Mostrar notificação de boas-vindas
    setTimeout(() => {
        showNotification('🎉 Login realizado com sucesso!');
    }, 1000);
});
