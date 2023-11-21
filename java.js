document.addEventListener("DOMContentLoaded", function () {
    // Função para preencher as opções da caixa de seleção de horas
    function preencherHoras(selectId, inicio, fim) {
        var select = document.getElementById(selectId);
        select.innerHTML = "";

        for (var i = inicio; i <= fim; i += 5) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i + " min";
            select.appendChild(option);
        }
    }

    // Event listener para alterações na caixa de seleção de tempo
    document.getElementById("tempo").addEventListener("change", function () {
        var tempoSelect = document.getElementById("tempo");
        var tempoSelecionado = tempoSelect.options[tempoSelect.selectedIndex].value;

        // Definir limites para as caixas de seleção de horas
        var limiteDeHora = 0;
        var limiteAteHora = 90;

        if (tempoSelecionado === "1°") {
            limiteAteHora = 45;
        } else if (tempoSelecionado === "2°") {
            limiteDeHora = 45;
        }

        preencherHoras("de", limiteDeHora, limiteAteHora);
        preencherHoras("ate", limiteDeHora + 5, limiteAteHora);
    });

    // Event listener para alterações na caixa de seleção de "DE"
    document.getElementById("de").addEventListener("change", function () {
        var deSelect = document.getElementById("de");
        var deSelecionado = parseInt(deSelect.value, 10);

        // Limpar opções inferiores em "ATÉ"
        var ateSelect = document.getElementById("ate");
        var ateOptions = ateSelect.options;

        for (var i = 0; i < ateOptions.length; i++) {
            var valorAte = parseInt(ateOptions[i].value, 10);
            if (valorAte <= deSelecionado) {
                ateSelect.remove(i);
                i--; // Atualizar o índice após a remoção
            }
        }
    });

    // Preencher as caixas de seleção de "De" e "Até" inicialmente
    preencherHoras("de", 0, 90);
    preencherHoras("ate", 5, 90);
});
