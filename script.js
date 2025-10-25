document.addEventListener('DOMContentLoaded', () => {
    const galeriaImgs = document.querySelectorAll('.galeria img');

    // Efecto lightbox para ver fotos grandes
    galeriaImgs.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.inset = '0';
            modal.style.background = 'rgba(0,0,0,0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '9999';
            modal.innerHTML = `
                <img src="${img.src}" style="max-width:90%;max-height:85%;border-radius:15px;box-shadow:0 0 20px #fff;">
            `;
            document.body.appendChild(modal);
            modal.addEventListener('click', () => modal.remove());
        });
    });
});
