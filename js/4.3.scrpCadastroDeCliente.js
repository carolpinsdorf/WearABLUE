document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const cadastroDataDiv = document.getElementById('cadastroData');

    function saveData(email, fullname, password) {
        const clienteData = {
            email: email,
            fullname: fullname,
            password: password
        };

        let existingData = JSON.parse(localStorage.getItem('clientes')) || [];
        existingData.push(clienteData);
        localStorage.setItem('clientes', JSON.stringify(existingData));

        let existingSessionData = JSON.parse(sessionStorage.getItem('clientesSession')) || [];
        existingSessionData.push(clienteData);
        sessionStorage.setItem('clientesSession', JSON.stringify(existingSessionData));
    }

    function displayData() {
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        cadastroDataDiv.innerHTML = '';

        if (clientes.length === 0) {
            cadastroDataDiv.innerHTML = '<p>Nenhum cadastro encontrado.</p>';
            return;
        }

        clientes.forEach((cliente) => {
            const clienteDiv = document.createElement('div');
            clienteDiv.classList.add('cliente');
            clienteDiv.innerHTML = `
                <p><strong>Email:</strong> ${cliente.email}</p>
                <p><strong>Nome Completo:</strong> ${cliente.fullname}</p>
                <p><strong>Senha:</strong> ${cliente.password}</p>
            `;
            cadastroDataDiv.appendChild(clienteDiv);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const fullname = document.getElementById('fullname').value;
        const password = document.getElementById('password').value;

        saveData(email, fullname, password);
        alert('Cadastro realizado com sucesso!');
        form.reset();
        displayData();
    });

    displayData();
});
