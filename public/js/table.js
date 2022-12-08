const select_input = $("#select-input");

$(() => {
  handleInputSelect();
  addExpensesOrRevenuesTable();
  calcExpenses();
  calcRevenues();
  removeExpenseOrRevenue();
});

function selectExpense() {
  $(".input-group").find("label").text("Despesas:");
  $(".input-group").find("#input-text").attr("placeholder", "Nome da despesa");
  $(".input-group")
    .find("#input-number")
    .attr("placeholder", "Valor da despesa");
}

function selectRevenue() {
  $(".input-group").find("label").text("Receitas:");
  $(".input-group").find("#input-text").attr("placeholder", "Nome da receita");
  $(".input-group")
    .find("#input-number")
    .attr("placeholder", "Valor da receita");
}

function handleInputSelect() {
  select_input.click(function () {
    if (select_input.val() == "Despesas") {
      selectExpense();
    } else {
      selectRevenue();
    }
  });
}

function buttonRemove() {
  const td_button_remove = $("<td>").addClass("remove-button");
  const a_button_remove = $("<a>").attr("href", "#");
  const span_remove_button = $("<span>")
    .addClass("material-symbols-outlined")
    .text("delete");
  a_button_remove.append(span_remove_button);
  td_button_remove.append(a_button_remove);
  return td_button_remove;
}


function addExpensesOrRevenuesTable() {
  const button = $("#done");

  button.click(function () {
    const input_text = $("#input-text");
    const input_number = $("#input-number");

    
      
    if (select_input.val() == "Despesas") {
          const expense_table = $("#expense-tables").find("table");
          const row = $("<tr>");
          const td_expense_name = $("<td>")
            .attr("class", "name-expense")
            .text(input_text.val());
          const td_expense_value = $("<td>")
            .text(input_number.val())
            .attr("title", input_number.val())
            .addClass("value-expense");
          row.append(td_expense_name, td_expense_value, buttonRemove());
          expense_table.prepend(row);
          calcExpenses();
        } else {
          const revenue_table = $("#revenues-tables").find("table");
          const row = $("<tr>");
          const td_revenue_name = $("<td>")
            .attr("class", "name-revenue")
            .text(input_text.val());
          const td_revenue_value = $("<td>")
            .text(input_number.val())
            .attr("title", input_number.val())
            .addClass("value-revenue");
          row.append(td_revenue_name, td_revenue_value, buttonRemove());
          revenue_table.prepend(row);
          calcRevenues();
        }
      
    

    input_text.val("");
    input_number.val("");
    removeExpenseOrRevenue();
    calcTotal();
  });
}

function calcExpenses() {
  let rest = 0;
  const table_total_expenses = $("#total_expenses");
  const td_expense = $(".value-expense");
  for (x = 0; x < td_expense.length; x++) {
    const td_title = td_expense[x].textContent;
    const td_title_number = +td_title;
    rest += td_title_number;
  }
  if (rest < 0) {
    table_total_expenses.text(0);
  } else {
    table_total_expenses.text(rest.toFixed(2));
  }
  return rest.toFixed(2);
}

function calcRevenues() {
  let rest = 0;
  const table_total_revenues = $("#total_revenues");
  const td_revenue = $(".value-revenue");
  for (x = 0; x < td_revenue.length; x++) {
    const td_title = td_revenue[x].textContent;
    const td_title_number = +td_title;
    rest += td_title_number;
  }
  if (rest < 0) {
    table_total_revenues.text(0);
  } else {
    table_total_revenues.text(rest.toFixed(2));
  }
  return rest.toFixed(2);
}
function calcTotal() {
  const expenses = calcExpenses();
  const revenues = calcRevenues();
  const calc = revenues - expenses;

  $("#rest").text(calc.toFixed(2));
}

function removeExpenseOrRevenue() {
  const remove_button = $(".remove-button").find("a");
  remove_button.click(function (event) {
    event.preventDefault();
    $(this).parent().parent().remove();
    calcRevenues();
    calcExpenses();
    calcTotal();
  });
}
