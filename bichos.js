const ctx = document.getElementById('alugueisChart').getContext('2d');

// Dados fictícios de aluguéis por dia da semana e clima
const alugueisData = {
    "segunda-feira": { "ensolarado": 10, "chuvoso": 5, "nublado": 7 },
    "terça-feira": { "ensolarado": 15, "chuvoso": 8, "nublado": 12 },
    "quarta-feira": { "ensolarado": 7, "chuvoso": 4, "nublado": 6 },
    "quinta-feira": { "ensolarado": 20, "chuvoso": 10, "nublado": 15 },
    "sexta-feira": { "ensolarado": 25, "chuvoso": 12, "nublado": 18 },
    "sábado": { "ensolarado": 30, "chuvoso": 18, "nublado": 22 },
    "domingo": { "ensolarado": 22, "chuvoso": 14, "nublado": 19 }
};

const diasSemana = Object.keys(alugueisData);

const chartData = {
    labels: diasSemana,
    datasets: [{
        label: 'Aluguéis',
        data: diasSemana.map(dia => alugueisData[dia]['ensolarado']),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const alugueisChart = new Chart(ctx, config);

function updateChart() {
    const climaSelecionado = document.getElementById('clima').value;
    alugueisChart.data.datasets[0].data = diasSemana.map(dia => {
        return climaSelecionado === 'todos'
            ? Object.values(alugueisData[dia]).reduce((a, b) => a + b, 0)
            : alugueisData[dia][climaSelecionado];
    });
    alugueisChart.update();
}