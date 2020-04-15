var expenseTracker = expenseTracker || {};

(() => {
  const balanceEl = document.getElementById('balance');
  const incomeEl = document.getElementById('income');
  const expenseEl = document.getElementById('expense');
  const listTransactionsEl = document.getElementById('list-transactions');
  const nameTransactionEl = document.getElementById('name-transaction');
  const amountTransactionEl = document.getElementById('amount-transaction');
  const addTransactionBtn = document.getElementById('add-transaction');

  let history = [];
  let balance, income, expense;

  // Call to get DATA if have in LocalStorage
  calculateBalance();

  function calculateBalance() {
    // Clear DOM
    listTransactionsEl.innerHTML = '';
    incomeEl.innerHTML = '$0.00';
    expenseEl.innerHTML = '$0.00';
    balanceEl.innerHTML = '$0.00';

    // Take DATA from LocalStorage
    const historyLocal = JSON.parse(localStorage.getItem('history'));
    if (historyLocal !== null && historyLocal.length > 0) {
      history = historyLocal;
    } else {
      return false;
    }

    // Balanse Summ
    balance = history.reduce(
      (acc, item) => (acc += +item.amountTransaction),
      0
    );
    balanceEl.innerHTML = `${formatNumber(balance)} UAH`;

    // Income Summ
    income = history.filter((item) => item.amountTransaction > 0);
    const incomeSumm = income.reduce(
      (acc, item) => (acc += +item.amountTransaction),
      0
    );
    incomeEl.innerHTML = `${formatNumber(incomeSumm)} uah`;

    // Expence Summ
    expense = history.filter((item) => item.amountTransaction < 0);
    const expenceSumm = expense.reduce(
      (acc, item) => (acc += +item.amountTransaction),
      0
    );
    expenseEl.innerText = `${formatNumber(expenceSumm)} uah`;

    // Button Element for Remove Transaction
    function removeBtn(id) {
      return `
    <div class="remove-item" onclick="deleteTransaction(${id})">
    <svg width="13px" height="13px">
      <line x1="3px" y1="3px" x2="10px" y2="10px"></line>
      <line x1="10px" y1="3px" x2="3px" y2="10px"></line>
    </svg>
    </div>
  `;
    }

    // Update in DOM a List of Transaction
    listTransactionsEl.innerHTML = history
      .map((item) => {
        const amount = +item.amountTransaction;
        if (amount >= 0) {
          // Income Transaction
          return `
        <li class="positive list-item" dataID ="${history.indexOf(item)}">
        ${item.nameTransaction}
        <span>${formatNumber(amount)} UAH</span>
        ${removeBtn(item.id)}
        </li>
        `;
        } else {
          // Expense Transaction
          return `
          <li class="negative list-item" dataID ="${history.indexOf(item)}">
            ${item.nameTransaction}
            <span>${formatNumber(amount)} UAH</span>
            ${removeBtn(item.id)}
          </li>
        `;
        }
      })

      .join('');
  }

  // Format number as currency string
  function formatNumber(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }

  // Recieve Name and Amount Transaction
  // and Push to array of History's Transactions
  function newTransaction(e) {
    // Generate random ID
    function randomID() {
      return Math.floor(Math.random() * 100000000);
    }

    e.preventDefault();

    let transaction = {};

    if (nameTransactionEl.value !== '' && amountTransactionEl.value !== '') {
      transaction = {
        id: randomID(),
        nameTransaction: nameTransactionEl.value,
        amountTransaction: amountTransactionEl.value,
      };

      history.push(transaction);

      localStorage.setItem('history', JSON.stringify(history));
      calculateBalance();
    } else {
      alert('Please enter Title and Amount before click button');
    }

    nameTransactionEl.value = '';
    amountTransactionEl.value = '';
  }

  //  Delete Transaction
  // function deleteTransaction(id) {
  //   history = history.filter((item) => item.id !== id);
  //   localStorage.setItem('history', JSON.stringify(history));
  //   calculateBalance();
  // }

  // ----------BEGIN FROM THIS LISTENER-------------
  // Event Listener
  addTransactionBtn.addEventListener('click', newTransaction);
})(expenseTracker);
