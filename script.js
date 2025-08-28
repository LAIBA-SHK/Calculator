let input = document.getElementById('inputtext');
let buttons = document.querySelectorAll('button');

let string = '';
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let btnText = event.target.innerText;
        
        if (btnText == '=') {
            if (/[+\-*/]{2}/.test(string)) {
                input.value = 'Error';
                string = '';
                return;
            }
            try {
                string = String(eval(string));
                input.value = string;
            } catch {
                input.value = 'Error';
                string = '';
            }
        }
        else if (btnText == 'AC') {
            string = '';
            input.value = string;
        }
        else if (btnText == 'Del') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += btnText;
            input.value = string;
        }
    });
});
