export type Service = {
  slug: string;
  title: string;
  short: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; body: string }[];
  icon: string;
};

export const services: Service[] = [
  { slug: "consulta-com-pneumologista", title: "Avaliação Respiratória Individualizada", short: "Uma visão completa da sua saúde respiratória para definir um cuidado integrado e personalizado.", eyebrow: "Cuidado integral", icon: "01", intro: "A avaliação respiratória individualizada integra história clínica, exame físico e, quando necessário, recursos funcionais para compreender cada caso e definir o melhor plano de cuidado.", sections: [
    { title: "Para quem é indicada", body: "Pessoas com falta de ar, tosse persistente, chiado no peito, dor torácica ou rouquidão, além de fumantes e ex-fumantes que necessitam de acompanhamento preventivo." },
    { title: "Condições acompanhadas", body: "Asma, DPOC (bronquite crônica e enfisema pulmonar), pneumonia, apneia do sono, fibrose pulmonar e sequelas respiratórias." },
    { title: "Como funciona", body: "Uma conversa detalhada sobre seu histórico, hábitos e sintomas é seguida por exame físico minucioso. Quando necessário, são solicitados exames complementares para definir o diagnóstico e o melhor plano de tratamento." },
  ]},
  { slug: "espirometria", title: "Avaliação Funcional Respiratória", short: "Análise integrada da capacidade e do funcionamento dos pulmões conforme a necessidade de cada paciente.", eyebrow: "Diagnóstico preciso", icon: "02", intro: "A avaliação funcional respiratória utiliza recursos como a espirometria para analisar, de forma rápida, indolor e não invasiva, o volume e a velocidade do ar inspirado e expirado.", sections: [
    { title: "Para quem é indicada", body: "Para diagnóstico e acompanhamento de asma e DPOC, avaliação pré-operatória, investigação de tosse persistente e monitoramento de pessoas expostas a poeira, fumaça ou produtos químicos." },
    { title: "Como funciona", body: "Sentado confortavelmente e com uma presilha nasal, o paciente assopra por um bocal descartável conectado ao espirômetro. O equipamento registra com precisão o fluxo de ar." },
    { title: "Orientações", body: "O exame pode ser realizado com ou sem broncodilatador para avaliar a resposta dos brônquios." },
  ]},
  { slug: "prick-test", title: "Testes Alérgicos — Prick Test", short: "Identificação rápida e segura de alergias respiratórias.", eyebrow: "Alergologia respiratória", icon: "03", intro: "O teste de puntura cutânea ajuda a identificar sensibilidade a substâncias presentes no ar, os chamados aeroalérgenos.", sections: [
    { title: "Para quem é indicado", body: "Pacientes com suspeita de rinite, asma alérgica ou conjuntivite, especialmente diante de espirros, coriza, coceira e congestão nasal frequentes." },
    { title: "O que é testado", body: "Ácaros da poeira, fungos, pelos de cães e gatos, penas, barata e pólens." },
    { title: "Como funciona", body: "Pequenas gotas de extratos são aplicadas no antebraço e recebem uma puntura superficial. A leitura é feita após 15 a 20 minutos, observando a reação da pele." },
  ]},
  { slug: "broncoscopia", title: "Broncoscopia", short: "Visualização direta das vias aéreas para diagnóstico e tratamento.", eyebrow: "Endoscopia respiratória", icon: "04", intro: "A broncoscopia permite examinar laringe, traqueia e brônquios e pode ter finalidade diagnóstica ou terapêutica.", sections: [
    { title: "Para quem é indicada", body: "Na investigação de tosse persistente, hemoptise, infecções graves, nódulos ou massas pulmonares e para retirada de corpos estranhos aspirados." },
    { title: "Como funciona", body: "Sob sedação leve e anestesia local, um tubo fino e flexível com câmera é introduzido pelo nariz ou boca. O médico pode coletar secreções ou realizar biópsias durante o procedimento." },
    { title: "Atuação terapêutica", body: "Também pode ser utilizada no tratamento de condições como estenose de traqueia e sangramentos das vias aéreas." },
  ]},
  { slug: "cessacao-do-tabagismo", title: "Cessação do Tabagismo", short: "Acompanhamento médico para deixar de fumar de forma segura e sustentável.", eyebrow: "Mais saúde e longevidade", icon: "05", intro: "Um programa individualizado para vencer a dependência física e comportamental do cigarro com apoio especializado.", sections: [
    { title: "Para quem é indicado", body: "Para qualquer fumante que queira parar, já tenha tentado sem sucesso ou apresente problemas de saúde agravados pelo cigarro." },
    { title: "Como funciona", body: "O tratamento começa pela avaliação do grau de dependência e dos gatilhos comportamentais. O plano reúne consultas de acompanhamento e estratégias terapêuticas comprovadas." },
    { title: "Tratamento personalizado", body: "Quando indicado, pode incluir medicamentos para ansiedade e fissura, além de reposição de nicotina com adesivos ou gomas." },
  ]},
  { slug: "asma", title: "Asma", short: "Controle dos sintomas para respirar melhor e viver plenamente.", eyebrow: "Acompanhamento contínuo", icon: "06", intro: "A asma é uma inflamação crônica das vias aéreas. Com acompanhamento adequado, é possível controlar os sintomas e manter excelente qualidade de vida.", sections: [
    { title: "Sintomas comuns", body: "Falta de ar, chiado, tosse — frequentemente pior à noite ou ao acordar — e sensação de aperto no peito." },
    { title: "Diagnóstico", body: "A avaliação clínica pode ser confirmada por exames como a espirometria, que mede a função pulmonar." },
    { title: "Acompanhamento", body: "O tratamento combina prevenção, alívio das crises e identificação de gatilhos como poeira, fumaça, mofo e mudanças bruscas de temperatura." },
  ]},
  { slug: "doencas-fibrosantes", title: "Doenças Fibrosantes Pulmonares", short: "Avaliação especializada de condições que causam cicatrização pulmonar.", eyebrow: "Cuidado especializado", icon: "07", intro: "Esse grupo de doenças torna o pulmão progressivamente mais rígido e dificulta a absorção de oxigênio pelo organismo.", sections: [
    { title: "Sintomas comuns", body: "Falta de ar progressiva, inicialmente aos esforços, e tosse seca crônica e persistente." },
    { title: "Diagnóstico", body: "Exige avaliação detalhada, tomografia de tórax de alta resolução e testes completos de função pulmonar." },
    { title: "Tratamento", body: "Medicamentos e reabilitação pulmonar buscam retardar a progressão, aliviar sintomas e preservar a qualidade de vida." },
  ]},
  { slug: "biopsia-transtoracica", title: "Biópsia Transtorácica", short: "Investigação precisa de nódulos pulmonares guiada por tomografia.", eyebrow: "Procedimento minimamente invasivo", icon: "08", intro: "O procedimento coleta pequenas amostras de um nódulo ou lesão pulmonar para obter um diagnóstico preciso, sem cirurgia aberta.", sections: [
    { title: "Para quem é indicada", body: "Pacientes com nódulo ou massa detectada em raio-X ou tomografia que necessite de análise celular." },
    { title: "Como funciona", body: "Em uma sala de tomografia, sob anestesia local e eventualmente sedação leve, as imagens guiam uma agulha fina até o nódulo." },
    { title: "Precisão e recuperação", body: "A amostra segue para análise patológica. É um procedimento preciso, seguro e com período de recuperação geralmente rápido." },
  ]},
  { slug: "teleconsulta", title: "Teleconsulta em Pneumologia", short: "Cuidado especializado, seguro e humanizado onde você estiver.", eyebrow: "Atendimento a distância", icon: "09", intro: "A teleconsulta aproxima o cuidado pneumológico de pacientes que precisam de orientação especializada sem deslocamento.", sections: [
    { title: "Para quem é indicada", body: "Para pacientes de outras cidades, retornos com exames, renovação de receitas, acompanhamento de condições crônicas controladas ou dificuldade de locomoção." },
    { title: "Como funciona", body: "O atendimento acontece em plataforma de videochamada segura. Sintomas e exames enviados digitalmente são avaliados pelo médico." },
    { title: "Documentos digitais", body: "Receitas, solicitações de exames e atestados podem ser emitidos com assinatura digital certificada e validade nacional." },
  ]},
  { slug: "apneia-do-sono", title: "Apneia do Sono", short: "Diagnóstico e tratamento para recuperar a qualidade do seu sono.", eyebrow: "Sono e respiração", icon: "10", intro: "A apneia obstrutiva causa paradas repetidas da respiração durante a noite e pode afetar a oxigenação e a saúde cardiovascular.", sections: [
    { title: "Sinais de atenção", body: "Ronco forte, engasgos, pausas respiratórias observadas, sono não reparador, sonolência diurna, cefaleia matinal e irritabilidade." },
    { title: "Diagnóstico", body: "A avaliação clínica é confirmada pela polissonografia, exame que estuda o sono e a respiração durante a noite." },
    { title: "Tratamento", body: "Pode envolver mudanças de estilo de vida, aparelhos intraorais ou CPAP, de acordo com a necessidade de cada paciente." },
  ]},
  { slug: "doencas-alergicas", title: "Doenças Alérgicas Respiratórias", short: "Identificação de gatilhos e prevenção de crises alérgicas.", eyebrow: "Liberdade para respirar", icon: "11", intro: "Rinite e asma alérgica surgem quando o sistema imunológico reage de forma exagerada a substâncias comuns do ambiente.", sections: [
    { title: "Sintomas comuns", body: "Espirros, coriza, coceira no nariz, garganta e olhos, congestão, tosse seca, chiado e falta de ar." },
    { title: "Identificação", body: "O Prick Test e exames laboratoriais podem ajudar a reconhecer os gatilhos responsáveis pelos sintomas." },
    { title: "Tratamento", body: "O plano reúne medicamentos seguros, higiene ambiental e, em casos selecionados, imunoterapia para reduzir a sensibilidade a longo prazo." },
  ]},
  { slug: "infeccoes-respiratorias", title: "Pneumonias e Infecções Respiratórias", short: "Diagnóstico precoce para uma recuperação segura e sem complicações.", eyebrow: "Cuidado no momento certo", icon: "12", intro: "Pneumonias, laringites, sinusites, bronquites, gripes e resfriados afetam o sistema respiratório de forma súbita e exigem avaliação adequada.", sections: [
    { title: "Sintomas comuns", body: "Febre, tosse seca ou com secreção, dor ao respirar fundo, falta de ar, fadiga e perda de apetite." },
    { title: "Diagnóstico", body: "Após exame físico detalhado, podem ser solicitados exames de imagem ou laboratoriais conforme cada caso." },
    { title: "Tratamento", body: "É definido conforme a causa e pode incluir antibióticos, antivirais, medicamentos para os sintomas, repouso e hidratação." },
  ]},
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
