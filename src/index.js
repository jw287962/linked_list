import linkedList from './linkedList';

const listData = linkedList();

listData.append(12);
listData.toString();
listData.append(122);
listData.toString();
listData.append(54);
listData.toString();
listData.append(1);
listData.append(21);
listData.append(2);
listData.append(21);
listData.append(99);
listData.toString();

listData.prepend(9);
listData.toString();
listData.prepend(90);
listData.toString();
listData.prepend(89);
listData.toString();
listData.size();

listData.head();
listData.tail();

listData.at(0);
listData.at(9);
listData.at(10);
listData.at(11);
listData.at(12);


listData.contains(89);
listData.contains(90);
listData.contains(21);
listData.contains(99);
listData.contains(15);


listData.find(0);
listData.find(4);
listData.find(2);
listData.find(8);
listData.find(9);
listData.find(1);


listData.pop();
listData.toString();
listData.pop();
listData.toString();


listData.append(21);
listData.append(99);
listData.toString();

console.log('INSERT AT')
listData.insertAt(999,0);
listData.toString();
listData.insertAt(101,1);
listData.toString();
listData.insertAt(102,11);
listData.toString();



listData.removeAt(2);
listData.toString();