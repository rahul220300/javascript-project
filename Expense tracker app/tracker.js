// get form and table elements
const expenseForm = document.getElementById('expenseForm');
const tbody = document.getElementById('tbody');

// define array to hold expenses
let expenses = [];
// Call loadExpenses() when the page is loaded



// Call addExpense() when the form is submitted
document.querySelector('#expenseForm').addEventListener('submit', addExpense);
// Add event listeners for delete buttons
const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach((button) => {
  button.addEventListener('click', deleteExpense);
});

// Add event listeners for edit buttons
const editButtons = document.querySelectorAll('.edit');
editButtons.forEach((button) => {
  button.addEventListener('click', editExpense);
});






// function to add expense to array and localStorage
function addExpense(e) {
  e.preventDefault(); // prevent form from submitting

  // get form data
  const category = document.querySelector('.name').value;
  const amount = document.querySelector('.amount').value;
  const description = document.querySelector('.description').value;

  // create expense object
  const expense = {
    id: Date.now(),
    category,
    amount,
    description
  };

  // add expense to array
  expenses.push(expense);

  // save expenses to localStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // clear form fields
  expenseForm.reset();

  // refresh table
  displayExpenses();
}

// function to delete expense from array and localStorage
function deleteExpense(id) {
  // remove expense from array
  expenses = expenses.filter(expense => expense.id !== id);

  // save updated expenses to localStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // refresh table
  displayExpenses();
}

// function to edit expense in array and localStorage
function editExpense(id, category, amount, description) {
  // find expense in array
  const index = expenses.findIndex(expense => expense.id === id);

  // update expense object
  expenses[index].category = category;
  expenses[index].amount = amount;
  expenses[index].description = description;

  // save updated expenses to localStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // refresh table
  displayExpenses();
}

// function to display expenses in table
function displayExpenses() {
  // clear table body
  tbody.innerHTML = '';

  // get expenses from localStorage or empty array if null
  expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // loop through expenses and add rows to table
  expenses.forEach(expense => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${expense.category}</td>
      <td>${expense.amount}</td>
      <td>${expense.description}</td>
      <td><button type="button" class="btn btn-danger" onclick="deleteExpense(${expense.id})">Delete</button></td>
      <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onclick="populateEditForm(${expense.id})">Edit</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// function to populate edit form with expense data
function populateEditForm(id) {
  // find expense in array
  const expense = expenses.find(expense => expense.id === id);

  // populate form fields
  document.getElementById('editCategory').value = expense.category;
  document.getElementById('editAmount').value = expense.amount;
  document.getElementById('editDescription').value = expense.description;

  // set submit button attribute to expense id
  document.getElementById('editSubmit').setAttribute('data-id', expense.id);
}

// function to handle edit form submission
function editSubmit(e) {
  e.preventDefault(); // prevent form from submitting

  // get form data
  const id = document.getElementById('editSubmit').getAttribute('data-id');
  const category = document.getElementById('editCategory').value;
  const amount = document.getElementById('editAmount').value;
  const description = document.getElementById('editDescription').value;

  // call editExpense function
}
