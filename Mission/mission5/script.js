function valider() {
        // Collecter les réponses
        const answers = document.querySelectorAll('.answer');
        var results = new Array();

        for (let i = 0; i <= 9; i++) {
                if (answers[i].checked) {
                        newResults = results.push(1);
                } else {
                        newResults = results.push(2);
                }
        }

        console.log(results);

        // Nombre de bonnes et mauvaises réponses
        let correct = 0;
        let incorrect = 0;

        results.forEach(e => {
                if (e === 1)
                        correct += 1;
                else if (e === 2)
                        incorrect += 1;
        })

        // Afficher le résultat
    const json = {
        "0": "Quel est le nom de famille de Naruto ?",
        "1": "Quel était le rôle de la famille Uchiha ?",
        "2": "Quand Naruto libère-t-il la puissance de Kyûbi pour la première fois ?",
        "3": "Qui Uchiha Sasuke veut-il tuer ?",
        "4": "Qui est le partenaire d'Uchiha Itachi dans l'Akatsuki ?",
        "5": "Comment s'appelle le jinchûriki d'Ichibi ?",
        "6": "Qui devient chûnin après l'attaque de Konoha lors de l'examen chûnin ?",
        "7": "Combien de temps dure l'entrainement de Naruto avec Jiraya ?",
        "8": "Quel type de ninja devient Sakura ?",
        "9": "Qui forme Sakura durant l'entrainement de Naruto avec Jiraya ?",
    };
    document.write(`<link rel="stylesheet" type="text/css" href="index.css">`);
        document.write(`Correction<br><br>`);
        for (let i = 0; i <= results.length - 1; i++) {
                document.write(` ${json[i]} <li>La réponse est ${results[i] == 1 ? 'correct' : 'incorrect'}</li>` + "<br>");
        }
        document.write(`${correct} bonnes réponses <br>${incorrect} mauvaises réponses <br>Score final : ${correct}/${answers.length} => ${correct/10*100}% de bonnes réponses`);
   }
