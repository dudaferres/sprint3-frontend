// Scroll para todos os links da página
document.addEventListener('DOMContentLoaded', function() {
    // Links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 76;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Por favor, insira seu email.');
                return;
            }
            
            // Simulação de envio
            alert('Obrigado por se inscrever em nossa newsletter!');
            emailInput.value = '';
        });
    }

    // Botão "Saiba Mais" do header
    const saibaMaisBtn = document.querySelector('.btn-primary.ms-3');
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', function() {
            const contatoSection = document.querySelector('#contato');
            if (contatoSection) {
                const headerOffset = 76;
                const elementPosition = contatoSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Animação de scroll para revelar elementos
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.card, .service-card, .carousel-item').forEach(el => {
    observer.observe(el);
});

// Formulário de contato
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Simulação de envio
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });
}

// Cálculo de Fórmula Infantil
function calcularFormula() {
    const peso = parseFloat(document.getElementById('peso').value);
    const idade = parseInt(document.getElementById('idade').value);
    
    if (isNaN(peso) || isNaN(idade)) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    // Fórmula básica para cálculo (exemplo)
    let quantidade = peso * 150; // 150ml por kg
    if (idade < 6) {
        quantidade *= 1.2; // Ajuste para bebês menores
    }
    
    document.getElementById('resultado').innerHTML = `
        <div class="alert alert-success">
            Quantidade recomendada: ${Math.round(quantidade)}ml por dia
        </div>
    `;
} 