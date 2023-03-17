function printList(list) {

  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printList(list) {

  alert(list.value);

  if (list.next) {
    printList(list.next);
  }

}