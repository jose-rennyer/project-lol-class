let classes = [
    {
        rota:"TOP",
        campeoes:[
            {nome:"Garen", imagem:"champion/top/Garen.jpg", qualidade:"Tanque", 
            forte:[{foto:"champion/top/Nasus.jpg", nome:"Nasus"}, {foto:"champion/top/Singed.jpg", nome:"Singed"}, {foto:"champion/top/Malphite.jpg", nome:"Malphite"}, {foto:"champion/top/Shen.jpg", nome:"Shen"}],
            fraco:[{foto:"champion/top/Sett.jpg", nome:"Sett"},{foto:"champion/top/Tryndamere.jpg", nome:"Tryndamere"},{foto:"champion/top/Teemo.jpg", nome:"Teemo"},{foto:"champion/top/Darius.jpg", nome:"Darius"}],
            nacionalidade:"champion/nacionality/demacia.png",
            historia:"Nascido na nobre família Stemmaguarda, junto com sua irmã mais nova, Lux, Garen sabia desde jovem que esperavam que ele defendesse o trono de Demacia com sua vida."},
            
            {nome:"Darius", imagem:"champion/top/Darius.jpg", qualidade:"Lutador",
            forte:[{foto:"champion/top/Nasus.jpg", nome:"Nasus"}, {foto:"champion/top/Chogath.jpg", nome:"Cho'Gath"}, {foto:"champion/top/Sion.jpg", nome:"Sion"}, {foto:"champion/top/Shen.jpg", nome:"Shen"}],
            fraco:["Teemo","Illaoi","Volibear"],
            historia:"Darius e seu irmão Draven cresceram órfãos na cidade portuária de Basilich. Darius lutou muito para sustentar os dois, enfrentando constantemente gangues de moleques mais velhos e qualquer um que ameaçasse seu irmãozinho."},
            
            {nome:"Fiora", imagem:"champion/top/Fiora.jpg", qualidade:"Lutadora",
            forte:["Shen","Gwen","Kayle"],
            fraco:["Sett","Illaoi","Gangplank"],
            historia:"Filha mais jovem da nobre família Laurent, Fiora parecia ter sua vida completamente decidida desde que nascera: ter um casamento arranjado e se tornar uma peça no grande jogo de alianças de Demacia."},
            
            {nome:"Camille", imagem:"champion/top/Camille.jpg", qualidade:"Lutadora",
            forte:["Singed","Shen","Nasus"],
            fraco:["Illaoi","Sett","Renekton"],
            historia:"A maior parte da fortuna de sua família vem da coleta de um raro cristal dos Brackern, criaturas nativas de Shurima. Esses cristais hex, ou 'primeiros cristais', continham um poder que normalmente era manipulado apenas por aqueles que nasciam com uma habilidade mágica nata."},
            
            {nome:"Rumble", imagem:"champion/top/Rumble.jpg", qualidade:"Lutador",
            forte:["Akali","Yasuo","Gwen"],
            fraco:["Master yi","Kayn","Camille"],
            historia:"Mesmo entre os yordles, Rumble sempre foi o menor. Sendo assim, ele sempre foi importunado. Para sobreviver, ele precisava ser mais valente e engenhoso que seus companheiros."},
            
            {nome:"Nasus", imagem:"champion/top/Nasus.jpg", qualidade:"Lutador",
            forte:["Kayle","Shen","Malphite"], 
            fraco:["Aatrox","Sett","Tryndamere"], 
            historia:"A genialidade de Nasus já era reconhecida muito antes de ele ser escolhido para se juntar aos Ascendentes. Aluno dedicado, antes de completar dez anos, ele já tinha memorizado e analisado as maiores obras da história e filosofia shurimanes."},
            
            {nome:"Renekton", imagem:"champion/top/Renekton.jpg", qualidade:"Lutador", 
            forte:["Yone","Shen","Malphite"], 
            fraco:["Gangplank","Volibear","Darius"], 
            historia:"Renekton nasceu para lutar. Desde pequeno, vivia brigando com as crianças mais velhas, deixando claro que não tinha medo de nada. Geralmente, esses confrontos eram motivados por orgulho, pois Renekton era incapaz de recuar ou deixar um insulto passar impune."},
            
            {nome:"Teemo", imagem:"champion/top/Teemo.jpg", qualidade:"Atirador", 
            forte:["Camille","Shen","Kayle"], 
            fraco:["Sett","Aatrox","Gangplank"], 
            historia:"Teemo é uma lenda entre seus irmãos e irmãs yordle de Bandópolis. No que diz respeito a todos os yordles, parece que lhe falta um ou outro parafuso. Ele demonstra e aproveita o companheirismo de sua raça ao mesmo tempo em que insiste em ir sozinho para missões de defesa da cidade."},
            
            {nome:"Tryndamere", imagem:"champion/top/Tryndamere.jpg", qualidade:"Assasino", 
            forte:["Nasus","Shen","Kayle"], 
            fraco:["Kled","Volibear","Renekton"], 
            historia:"Tryndamere veio ao mundo conhecendo apenas a dureza da sobrevivência, pois as estepes congeladas onde seu clã morava nunca derretiam de verdade. Embora venerassem todos os antigos deuses de Freljord, bem como o Culto das Três, eles oravam com mais frequência para uma divindade espiritual conhecida por aterrorizar a tundra: um deus-javali vigoroso e impossível de ser abatido."},
            
            {nome:"Urgot", imagem:"champion/top/Urgot.jpg", qualidade:"Atirador", 
            forte:["Jax","Shen","Jayce"], 
            fraco:["Mordekaiser","tryndamere","Aatrox"], historia:"Urgot sempre acreditou ser digno. Como carrasco e executor dos fracos, ele era a encarnação viva do ideal noxiano de 'força acima de tudo' e fazia disso uma realidade a cada golpe de seu machado. Seu orgulho aumentava na mesma proporção que a pilha de cadáveres, e sua presença opressora mantinha várias tropas sob controle."},
            
            {nome:"Shen", imagem:"champion/top/Shen.jpg", qualidade:"Tanque", 
            forte:["Irelia","Lee sin","Malphite"], 
            fraco:["Sett","Urgot","Riven"], historia:"Um enigma para o mundo espiritual, assim como para o mundo mortal, Shen não pertence a nenhum dos dois. Embora seja filho de uma das famílias mais respeitadas de Navori, foi a função de seu pai como Olho do Crepúsculo que selou seu destino na Ordem Kinkou."},
            
            {nome:"Sion", imagem:"champion/top/Sion.jpg", qualidade:"Lutador", 
            forte:["Kayle","shen","malphite"], 
            fraco:["Aatrox","Illaoi","Darius"], 
            historia:"Temido tanto por aliados quanto por inimigos, ele era o último representante de uma cultura guerreira entranhada em Noxus desde sua fundação. Sion jurou aos seus ancestrais que jamais recuaria em batalha e que, quando sua hora chegasse, ele morreria com dignidade."}
        ]
    },
    {
        rota:"JUNGLE",
        campeoes:[
            {nome:"Garen", imagem:"champion/top/Darius.jpg", qualidade:"Tanque", 
            forte:[{foto:"champion/top/Nasus.jpg", nome:"Nasus"}, {foto:"champion/top/Singed.jpg", nome:"Singed"}, {foto:"champion/top/Malphite.jpg", nome:"Malphite"}, {foto:"champion/top/Shen.jpg", nome:"Shen"}],
            fraco:[{foto:"champion/top/Sett.jpg", nome:"Sett"},{foto:"champion/top/Tryndamere.jpg", nome:"Tryndamere"},{foto:"champion/top/Teemo.jpg", nome:"Teemo"},{foto:"champion/top/Darius.jpg", nome:"Darius"}],
            nacionalidade:"champion/nacionality/demacia.png",
            historia:"Nascido na nobre família Stemmaguarda, junto com sua irmã mais nova, Lux, Garen sabia desde jovem que esperavam que ele defendesse o trono de Demacia com sua vida."},
            
            {nome:"Darius", imagem:"champion/top/Darius.jpg", qualidade:"Lutador",
            forte:[{foto:"champion/top/Nasus.jpg", nome:"Nasus"}, {foto:"champion/top/Chogath.jpg", nome:"Cho'Gath"}, {foto:"champion/top/Sion.jpg", nome:"Sion"}, {foto:"champion/top/Shen.jpg", nome:"Shen"}],
            fraco:["Teemo","Illaoi","Volibear"],
            historia:"Darius e seu irmão Draven cresceram órfãos na cidade portuária de Basilich. Darius lutou muito para sustentar os dois, enfrentando constantemente gangues de moleques mais velhos e qualquer um que ameaçasse seu irmãozinho."},
            
            {nome:"Fiora", imagem:"champion/top/Camille.jpg", qualidade:"Lutadora",
            forte:["Shen","Gwen","Kayle"],
            fraco:["Sett","Illaoi","Gangplank"],
            historia:"Filha mais jovem da nobre família Laurent, Fiora parecia ter sua vida completamente decidida desde que nascera: ter um casamento arranjado e se tornar uma peça no grande jogo de alianças de Demacia."},
            
            {nome:"Camille", imagem:"champion/top/Camille.jpg", qualidade:"Lutadora",
            forte:["Singed","Shen","Nasus"],
            fraco:["Illaoi","Sett","Renekton"],
            historia:"A maior parte da fortuna de sua família vem da coleta de um raro cristal dos Brackern, criaturas nativas de Shurima. Esses cristais hex, ou 'primeiros cristais', continham um poder que normalmente era manipulado apenas por aqueles que nasciam com uma habilidade mágica nata."},
            
            {nome:"Rumble", imagem:"champion/top/Rumble.jpg", qualidade:"Lutador",
            forte:["Akali","Yasuo","Gwen"],
            fraco:["Master yi","Kayn","Camille"],
            historia:"Mesmo entre os yordles, Rumble sempre foi o menor. Sendo assim, ele sempre foi importunado. Para sobreviver, ele precisava ser mais valente e engenhoso que seus companheiros."},
            
            {nome:"Nasus", imagem:"champion/top/Rumble.jpg", qualidade:"Lutador",
            forte:["Kayle","Shen","Malphite"], 
            fraco:["Aatrox","Sett","Tryndamere"], 
            historia:"A genialidade de Nasus já era reconhecida muito antes de ele ser escolhido para se juntar aos Ascendentes. Aluno dedicado, antes de completar dez anos, ele já tinha memorizado e analisado as maiores obras da história e filosofia shurimanes."},
            
            {nome:"Renekton", imagem:"champion/top/Renekton.jpg", qualidade:"Lutador", 
            forte:["Yone","Shen","Malphite"], 
            fraco:["Gangplank","Volibear","Darius"], 
            historia:"Renekton nasceu para lutar. Desde pequeno, vivia brigando com as crianças mais velhas, deixando claro que não tinha medo de nada. Geralmente, esses confrontos eram motivados por orgulho, pois Renekton era incapaz de recuar ou deixar um insulto passar impune."},
            
            {nome:"Teemo", imagem:"champion/top/Teemo.jpg", qualidade:"Atirador", 
            forte:["Camille","Shen","Kayle"], 
            fraco:["Sett","Aatrox","Gangplank"], 
            historia:"Teemo é uma lenda entre seus irmãos e irmãs yordle de Bandópolis. No que diz respeito a todos os yordles, parece que lhe falta um ou outro parafuso. Ele demonstra e aproveita o companheirismo de sua raça ao mesmo tempo em que insiste em ir sozinho para missões de defesa da cidade."},
            
            {nome:"Tryndamere", imagem:"champion/top/Renekton.jpg", qualidade:"Assasino", 
            forte:["Nasus","Shen","Kayle"], 
            fraco:["Kled","Volibear","Renekton"], 
            historia:"Tryndamere veio ao mundo conhecendo apenas a dureza da sobrevivência, pois as estepes congeladas onde seu clã morava nunca derretiam de verdade. Embora venerassem todos os antigos deuses de Freljord, bem como o Culto das Três, eles oravam com mais frequência para uma divindade espiritual conhecida por aterrorizar a tundra: um deus-javali vigoroso e impossível de ser abatido."},
            
            {nome:"Urgot", imagem:"champion/top/Urgot.jpg", qualidade:"Atirador", 
            forte:["Jax","Shen","Jayce"], 
            fraco:["Mordekaiser","tryndamere","Aatrox"], historia:"Urgot sempre acreditou ser digno. Como carrasco e executor dos fracos, ele era a encarnação viva do ideal noxiano de 'força acima de tudo' e fazia disso uma realidade a cada golpe de seu machado. Seu orgulho aumentava na mesma proporção que a pilha de cadáveres, e sua presença opressora mantinha várias tropas sob controle."},
            
            {nome:"Shen", imagem:"champion/top/Shen.jpg", qualidade:"Tanque", 
            forte:["Irelia","Lee sin","Malphite"], 
            fraco:["Sett","Urgot","Riven"], historia:"Um enigma para o mundo espiritual, assim como para o mundo mortal, Shen não pertence a nenhum dos dois. Embora seja filho de uma das famílias mais respeitadas de Navori, foi a função de seu pai como Olho do Crepúsculo que selou seu destino na Ordem Kinkou."},
            
            {nome:"Sion", imagem:"champion/top/Sion.jpg", qualidade:"Lutador", 
            forte:["Kayle","shen","malphite"], 
            fraco:["Aatrox","Illaoi","Darius"], 
            historia:"Temido tanto por aliados quanto por inimigos, ele era o último representante de uma cultura guerreira entranhada em Noxus desde sua fundação. Sion jurou aos seus ancestrais que jamais recuaria em batalha e que, quando sua hora chegasse, ele morreria com dignidade."}
        ]
    },
    {

    },
    {

    },
    {

    }
]