(function () {
  'use strict';

  let state = {
    a: '0',
    b: '0',
    operator: '',
  };

  function setOperator(operator) {
    state.operator = operator;
  }

  /* 
  After pressing '=', the result is stored as a number in the state
  such that the user can still operate on the result (i.e. add '3'
  to result). However, if the user wants to begin a new operation, 
  they have to clear first to do so.
  */
  function solve() {
    // according to MDN, Function() is a better alternative to eval() 
    state.a = Function('"use strict"; return (' + state.a + state.operator + state.b + ').toString()')();
    state.b = '0';
    state.operator = '';
    document.getElementById('result').innerHTML = state.a;
  }

  function clear() {
    state.a = '0';
    state.b = '0';
    state.operator = '';
    document.getElementById('result').innerHTML = state.a;
  }

  function display(val) {
    let result = document.getElementById('result');

    if (val === '.') {
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
          state.a = val;
          result.innerHTML = state.a;
        }
        else {
          state.a += val;
          result.innerHTML = state.a;
        }
      }
      else {
        if (state.b === '0') {
          state.b = val;
          result.innerHTML = state.b;
        }
        else {
          state.b += val;
          result.innerHTML = state.b;
        }
      }
    }
  }

  function button_clicked() {
    const btnVal = this.attributes.id.value;

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
      clear();
    }
    else {
      display(btnVal);
    }
  }

  function setup_buttons() {
    document.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', button_clicked, false);
    });
  }

  window.addEventListener('load', setup_buttons, false);
})();