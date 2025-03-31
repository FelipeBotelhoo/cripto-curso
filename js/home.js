/* CONFIG MENU MOBILE  */

document.addEventListener('DOMContentLoaded', function() {
    const mobileButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = mobileButton.querySelector('svg:first-child');
    const menuIconClose = mobileButton.querySelector('svg:last-child');

    mobileButton.addEventListener('click', function() {
        const isExpanded = mobileMenu.classList.contains('hidden');
        
        mobileMenu.classList.toggle('hidden');
        

        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        });
    });
}); 
/* FIM CONFIG MENU MOBILE  */




/* INICIO CONFIG MODAL  */
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contact-modal');
    const openBtn = document.getElementById('open-contact');
    const closeBtn = document.getElementById('close-modal');
    const form = document.getElementById('contact-form');
    
    
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; 
    });
    
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
    
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
    
    // Envio do formulário utilizando o FormSubmit.co
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // email que recebe a informação da modal
      form.action = 'https://formsubmit.co/mi.maia822@gmail.com';
      form.method = 'POST';
      
      // Adiciona campos extras
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = '_subject';
      input.value = 'Novo contato do site';
      form.appendChild(input);
      
      const input2 = document.createElement('input');
      input2.type = 'hidden';
      input2.name = '_template';
      input2.value = 'table';
      form.appendChild(input2);
      
      // Envia o formulário
      form.submit();
      
   
      openBtn.textContent = 'Mensagem Enviada!';
      openBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
      openBtn.classList.add('bg-green-500');
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      
      // Reseta após 3 segundos
      setTimeout(() => {
        openBtn.textContent = 'Entre em contato';
        openBtn.classList.remove('bg-green-500');
        openBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        form.reset();
      }, 3000);
    });
  });

  /* FIM CONFIG MODAL  */