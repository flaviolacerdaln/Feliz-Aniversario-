document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('toggleTextBtn');
    const container = document.getElementById('textAreaContainer');

    if (btn && container) {
        btn.addEventListener('click', function() {
            // alterna visibilidade
            if (container.style.display === 'none' || container.style.display === '') {
                container.style.display = 'block';
                btn.textContent = 'Ocultar texto';
            } else {
                container.style.display = 'none';
                btn.textContent = 'Ler textinho bobo';
            }
        });
    }
});