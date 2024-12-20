const mindMapInput = document.getElementById('mind-maps');
const testCasesInput = document.getElementById('test-cases');
const devInput = document.getElementById('dev');
const stageInput = document.getElementById('stage');
const ticketRaisedInput = document.getElementById('raised');
const automationInput = document.getElementById('automation');
const devTeamInput = document.getElementById('dev-team');
const hotfixInput = document.getElementById('hotfix');
const showResultBlock = document.getElementById('show-output-items');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', function(event) {
  event.preventDefault();
  showResultBlock.innerHTML = ''; 
  const result = [];
  if (mindMapInput.value != "") {
    result.push(`Created Mind Maps for PORT-${mindMapInput.value} Ticket(s)`);
  }
  if (testCasesInput.value != "") {
    result.push(`Created/Edited Test Cases for PORT-${testCasesInput.value} Ticket(s)`);
  }
  if (devInput.value != "") {
    result.push(`Worked on Test Execution of PORT-${devInput.value} Ticket(s) on DEV`);
  }
  if (stageInput.value != "") {
    result.push(`Worked on Test Execution of PORT-${stageInput.value} Ticket(s) on STAGE`);
  }
  if (ticketRaisedInput.value != "") {
    result.push(`Raised PORT-${ticketRaisedInput.value} Ticket(s)`);
  }
  if (automationInput.value != "") {
    result.push(`Worked on Test Automation Script for PORT-T${automationInput.value} Test Case(s)`);
  }
  if (devTeamInput.value != "") {
    result.push(`Connected with DEV Team for PORT-${devTeamInput.value} Ticket(s) Issues/Clarifications`);
  }
  if (hotfixInput.value != "") {
    result.push(`Worked on Hotfix Stories of PORT-${hotfixInput.value} Ticket(s) on STAGE`);
  }
  result.push('Connected with Team for Queries and Discussions');

  for (let i = 0; i < result.length; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `${i+1}. ${result[i]}`;
    showResultBlock.appendChild(paragraph);
  }
})

