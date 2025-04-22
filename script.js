document.addEventListener('DOMContentLoaded', () => {
    const apiKeyInput = document.getElementById('api-key');
    const aiPromptTextarea = document.getElementById('ai-prompt');
    const generateBtn = document.getElementById('generate-btn');
    const loadingIndicator = document.getElementById('loading-indicator');
    const aiOutputDiv = document.getElementById('ai-output');
    const aiResultText = document.getElementById('ai-result-text');
    const copyOutputBtn = document.getElementById('copy-output-btn');
    const exportToDocsBtn = document.getElementById('export-to-docs-btn');

    loadingIndicator.style.display = 'none';
    aiOutputDiv.style.display = 'none';
    exportToDocsBtn.style.display = 'none';

    const currentPage = window.location.pathname.split('/').pop();

    generateBtn.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value.trim();
        let promptText = aiPromptTextarea.value.trim();

        if (!apiKey) {
            alert('Por favor, introduce tu clave API de Gemini.');
            apiKeyInput.focus();
            return;
        }

        if (!promptText) {
            if (currentPage === 'temario.html') {
                const asignatura = document.getElementById('asignatura').value.trim();
                const docente = document.getElementById('docente').value.trim();
                const carrera = document.getElementById('carrera').value.trim();

                if (!asignatura) {
                    alert('Por favor, ingresa el nombre de la asignatura.');
                    document.getElementById('asignatura').focus();
                    return;
                }

                promptText = `Genera un Temario detallado para la asignatura "${asignatura}" ${docente ? `impartida por "${docente}"` : ''} ${carrera ? `en el programa "${carrera}"` : ''}. Sigue la estructura típica de un temario universitario:
