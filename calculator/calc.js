let state = {
    a: '0',
    b: '0',
    operator: '',
};

(function () {
    'use strict';

    function setOperator(operator) {
        // state.a = document.getElementById('result').innerHTML;
        state.operator = operator;
    }

    function solve() {
        state.a = eval(state.a + state.operator + state.b);
        state.b = '0';
        state.operator = '';
        document.getElementById('result').innerHTML = state.a;
    }

    /**
     * 
     */
    function button_clicked() {
        const btnVal = this.attributes.id.value;
        const result = document.getElementById('result');

        if (btnVal === '/' || btnVal === '*' || btnVal === '-') {
            if (state.operator === '') {
                setOperator(btnVal)
            }
        }
        else if (btnVal === '+/=') {
            if (state.operator === '') {
                setOperator('+')
            }
            else {
                solve();
            }
        }
        else if (btnVal === 'clear') {
            state.a = '0';
            state.b = '0';
            state.operator = '';
            result.innerHTML = state.a;
        }
        else if (btnVal === '.') {
            if (state.operator === '') {
                if (!state.a.includes('.')) {
                    state.a += '.';
                    result.innerHTML = state.a;
                }
            }
            else {
                if (!state.b.includes('.')) {
                    state.b += '.';
                    result.innerHTML = state.b;
                }
            }
        }
        else {
            if (state.operator === '') {
                if (state.a === '0') {
                    state.a = btnVal;
                    result.innerHTML = state.a;
                }
                else {
                    state.a += btnVal;
                    result.innerHTML = state.a;
                }
            }
            else {
                if (state.b === '0') {
                    state.b = btnVal;
                    result.innerHTML = state.b;
                }
                else {
                    state.b += btnVal;
                    result.innerHTML = state.b;
                }
            }
        }
    }

    function setup_buttons() {
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', button_clicked, false);
        });
    }

    window.addEventListener('load', setup_buttons, false);
})();