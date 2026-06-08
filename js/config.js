// ==========================================
// ARQUIVO GESTOR DE TRÁFEGO E CONFIG. GERAIS
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "FLOOR",
        nome2: "STORE", // Aparece em destaque (com a cor primária)
        whatsapp: "5511993176219"
    },

    // 2. OPÇÕES DE PISOS E PREÇOS (O Select será populado sozinho no HTML)
    pisos: [
        { categoria: "Piso Laminado", nome: "Piso Laminado (Completo)", preco: 89.90 },
        { categoria: "Piso Vinílico", nome: "Piso Vinílico (Completo)", preco: 109.90 }
    ],

    // 3. OPÇÕES DE PISO ATUAL (Select 1)
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso (Cimento)" },
        { valor: "Cerâmica", texto: "Cerâmica / Porcelanato" },
        { valor: "Madeira", texto: "Madeira / Taco" },
        { valor: "Outro", texto: "Outro / Não sei" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO (Aparece no final, no modal)
    bonus: [
        { titulo: "Rodapé e Acessórios", subtitulo: "INCLUSO", strike: "R$ 39/m", gratis: true },
        { titulo: "Cola e Manta", subtitulo: "INCLUSO", strike: "R$ 450", gratis: true },
        { titulo: "Mão de Obra", subtitulo: "Incluso", strike: "", gratis: false }
    ]
};
