console.log("Filling HSZ page...");

// hszData from data.js

let statusorigEs = Array.from(document.getElementsByTagName('select'))
  .filter(e => e.name === 'statusorig');
if (statusorigEs.length > 0 && statusorigEs[0] != null)
  statusorigEs[0].value = hszData.statusorig;

Array.from(document.getElementsByTagName('input'))
  .forEach(element => {
    if (element.name === 'sex' && element.value === hszData.sex)
      element.checked = true;
    else if (element.name === 'tnbed') {
      element.checked = true;
    }
    else if (element.name in hszData.inputs) {
      element.value = hszData.inputs[element.name];
    }
    else if (element.name.startsWith("email_check_")) {
      element.value = hszData.inputs.email;
    }
  });