<template>
  <div class="hero-container">
    <div class="container">
      <!-- Head-conainer -->
      <div class="head-container">
        <h1>Expence Tracker</h1>
        <div class="balance">
          <h4>Your balance</h4>
          <h2 id="balance" class="balance-number">$0.00</h2>
        </div>
        <div class="in-exp">
          <div class="income">
            <h4>Income</h4>
            <p id="income">$0.00</p>
          </div>
          <div class="expense">
            <h4>Expense</h4>
            <p id="expense">$0.00</p>
          </div>
        </div>
      </div>

      <!-- History-container -->
      <div class="history-container">
        <h2 class="title">History</h2>
        <ul id="list-transactions"></ul>
      </div>

      <!-- form-container -->
      <div class="form-container">
        <h2 class="title">Add new transaction</h2>
        <form id="submit">
          <label for="text-transaction">Text</label>
          <input
            type="text"
            id="name-transaction"
            placeholder="Enter text..."
          />
          <label for="amount-transaction"
            >Amount (negative - expence, positive - income)</label
          >
          <input
            type="number"
            id="amount-transaction"
            placeholder="Enter amount..."
          />
          <button type="submit" id="add-transaction">Add transaction</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import expenseTracker from './script';
export default {
  name: 'vanillajs',
  data: function() {
    return {};
  },
  mounted: function() {
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
    <div class="remove-item" onclick=`${function deleteTransaction(${id}) {
      history = history.filter((item) => item.id !== id);
        localStorage.setItem('history', JSON.stringify(history));
        calculateBalance();
    }}`">
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

        if (
          nameTransactionEl.value !== '' &&
          amountTransactionEl.value !== ''
        ) {
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
  },
};
</script>

<style>
/* Here 3 main part: head-container, history-container, form-container */

@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
}

.hero-container {
  text-align: left;
  margin: 0;
  background-color: #f7f7f7;
  font-family: 'Lato', sans-serif;
}

.title {
  margin: 0;
  padding: 5px 0;
  border-bottom: 1px solid #cccaca;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 440px;
  margin: 0 auto;
  padding: 5px;
  background-color: #fff;
}
/* --------------------------------------------------

head-container

-----------------------------------------------------*/
.head-container h1 {
  font-weight: bold;
  text-align: center;
  margin: 0;
}

.balance {
  margin: 20px 0;
  justify-content: left;
}

.balance h4 {
  margin: 0;
  text-transform: uppercase;
}

.balance-number {
  margin: 0;
  font-size: 30px;
}

.in-exp {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  text-transform: uppercase;
  border: 1px solid #b1b1b1;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.in-exp p {
  font-weight: bold;
  font-size: 120%;
}
.in-exp h4,
.in-exp p {
  margin: 0px;
}

.income,
.expense {
  text-align: center;
  width: 49%;
}

.income {
  border-right: 1px solid #bbbbbb;
}

.income p {
  color: rgb(17, 182, 85);
}
.expense p {
  color: rgb(167, 2, 2);
}
/* --------------------------------------------------

history-container

-----------------------------------------------------*/
.history-container {
  margin-bottom: 10px;
}

.history-container ul {
  list-style-type: none;
  padding: 0;
}

.history-container ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #cccaca;
  box-shadow: 0 2px 2px #cfcfcf;
  margin-bottom: 10px;
}

.history-container ul li span {
  font-size: 120%;
}

.history-container ul li.positive {
  border-right: 6px solid rgb(17, 182, 85);
}

.history-container ul li.negative {
  border-right: 6px solid rgb(167, 2, 2);
}

.remove-item {
  cursor: pointer;
  position: absolute;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(167, 2, 2);
  z-index: -1;
  transition: transform 0.2s ease-in-out;
}

.history-container li::before {
  content: '';
  height: 28px;
  width: 28px;
  position: absolute;
  transform: translateX(-100%);
}
.history-container li:hover:before .remove-item {
  left: 0;
  transform: translateX(-95%);
  z-index: 1;
}

.history-container li:hover .remove-item {
  left: 0;
  transform: translateX(-95%);
  z-index: 0;
}

.history-container li svg {
  stroke: #fff;
  stroke-width: 2px;
}
/* --------------------------------------------------

form-container

-----------------------------------------------------*/
.form-container input,
label,
button {
  border: 0;
  margin: 10px 0;
  font-size: 16px;
}

.form-container label {
  display: block;
  margin: 0;
  margin-top: 10px;
}
.form-container input {
  border: 1px solid #dedede;
  width: 100%;
  padding: 10px;
}

.form-container input:focus,
button:focus {
  outline: 0;
}

.form-container button {
  margin-bottom: 30px;
  background-color: #9c88ff;
  color: #fff;
  text-align: center;
  padding: 10px;
  width: 100%;
  box-shadow: 0 2px 2px #cfcfcf;
  cursor: pointer;
}

.form-container button:active {
  transform: scale(0.98);
}
</style>
