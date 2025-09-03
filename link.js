document.addEventListener('DOMContentLoaded', function() {
            const accordionButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
            
            accordionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const target = document.querySelector(this.getAttribute('data-bs-target'));
                    
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 300);
                });
            });
        });