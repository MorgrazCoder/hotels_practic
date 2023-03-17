function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

function printReverseList(list) {
  let arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}