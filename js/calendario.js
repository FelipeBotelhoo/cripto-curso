// Novo formato de eventos
const events = [
    { date: '2025-04-05', type: 'live', title: 'Live com especialistas' },   // Live com especialistas
    { date: '2025-04-10', type: 'exam', title: 'Prova de segurança digital' },  // Prova marcada
    { date: '2025-04-15', type: 'course', title: 'Novo curso disponível!' } // Novo curso
];

// Função para atualizar o calendário
let currentMonthOffset = 0;
const updateCalendar = (monthOffset = 0) => {
    currentMonthOffset += monthOffset;

    const today = new Date();
    let currentMonth = today.getMonth() + currentMonthOffset; // Mês atual + o deslocamento
    let year = today.getFullYear();

    // Ajustar o ano caso o mês ultrapasse 12 ou seja menor que 0
    if (currentMonth < 0) {
        currentMonth = 11; // Dezembro
        year--;  // Subtrair um ano
    } else if (currentMonth > 11) {
        currentMonth = 0; // Janeiro
        year++;  // Adicionar um ano
    }

    const firstDay = new Date(year, currentMonth, 1);
    const lastDay = new Date(year, currentMonth + 1, 0);  // Último dia do mês

    const monthTitle = document.getElementById("calendarTitle");
    monthTitle.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

    const calendarGrid = document.getElementById("calendarGrid");
    calendarGrid.innerHTML = '';

    // Log para depurar o último dia do mês
    console.log(`Último dia do mês: ${lastDay.getDate()}`);

    // Dias do mês
    for (let i = 0; i < firstDay.getDay(); i++) {
        calendarGrid.innerHTML += '<div class="p-2"></div>'; // Espaço vazio para alinhar o início
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const currentDate = `${year}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const dayEvent = events.find(event => event.date === currentDate);
        const dayClass = dayEvent ? getEventClass(dayEvent.type) : 'bg-white'; // Diferente cor para tipos de eventos
        const dayTooltip = dayEvent ? dayEvent.title : ''; // Tooltip com título do evento

        // Ajuste na comparação para garantir que o formato das datas seja o mesmo
        const isToday = currentDate === `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

        calendarGrid.innerHTML += `
            <div class="p-3 border rounded-md ${dayClass} ${isToday ? 'bg-purple-900 text-white font-bold' : 'hover:bg-[#764472] hover:text-white'} relative cursor-pointer" 
                data-tooltip="${dayTooltip}" data-date="${currentDate}">
                ${day}
                ${dayTooltip ? `<div class="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-max p-2 bg-black text-white rounded-md text-sm hidden tooltip">${dayTooltip}</div>` : ''}
            </div>
        `;
    }
};


// Função para obter a classe de cor baseada no tipo de evento
const getEventClass = (type) => {
    switch (type) {
        case 'live':
            return 'bg-yellow-300';  // Amarelo para live
        case 'exam':
            return 'bg-red-500';     // Vermelho para prova
        case 'course':
            return 'bg-green-300';   // Verde para curso
        default:
            return 'bg-white';       // Sem evento
    }
};

// Navegação entre meses
document.getElementById("prevMonth").addEventListener("click", () => updateCalendar(-1));
document.getElementById("nextMonth").addEventListener("click", () => updateCalendar(1));

// Carregar o calendário inicial
updateCalendar();

// Tooltip - Mostrar/Esconder ao passar o mouse
document.addEventListener("mouseover", (e) => {
    if (e.target && e.target.dataset.tooltip) {
        const tooltip = e.target.querySelector('.tooltip');
        if (tooltip) tooltip.classList.remove('hidden');
    }
});

document.addEventListener("mouseout", (e) => {
    if (e.target && e.target.dataset.tooltip) {
        const tooltip = e.target.querySelector('.tooltip');
        if (tooltip) tooltip.classList.add('hidden');
    }
});

// Mostrar descrição ao clicar no dia do evento
document.addEventListener("click", (e) => {
    if (e.target && e.target.dataset.date) {
        const eventDate = e.target.dataset.date;
        const event = events.find(event => event.date === eventDate);
        if (event) {
            const tooltip = e.target.querySelector('.tooltip');
            if (tooltip) {
                tooltip.classList.remove('hidden');
                tooltip.classList.add('absolute', 'top-full', 'mt-2', 'z-50');
            }
        }
    }
});
