import node from './node';


const linkedList = () => {
  let headNode = null;
  let tailNode = null;
  let currentNode = null;
  let length = 0;
    const append = (value) => {
      length++;
      const nodeData = node();
      nodeData.value = value;
      if(headNode == null) {
        headNode = nodeData;
        currentNode = nodeData;
        tailNode = nodeData;
      }else{
        if(headNode.nextNode == null){
          headNode.nextNode = tailNode;
        }
        currentNode = tailNode;
        currentNode.nextNode = nodeData;
        
        tailNode = nodeData;
      }
       
    }
    const prepend = (value) =>{
      length++
const nodeData = node();
      nodeData.value = value;

      if(headNode == null) {
        headNode = nodeData;
        currentNode = nodeData;
        tailNode = nodeData;
      }else{
        currentNode = headNode;
        headNode = nodeData;
        headNode.nextNode = currentNode;
      }
    }
    const size = () =>{
      return length;
    }
    
    
    const head = () => {
      console.log("Head",headNode.value);
    }
    const tail = () => {
      console.log("Tail",tailNode.value);
    }
    const at = (index) => {
      let i = 0;
      let node = headNode;
      if(index >= size()){
        console.log("Index:", index," =","No Value Found")
        return;
      }
      while (i != index){
      i++;
      node = node.nextNode;
      }
      console.log("Index:", index," =", node.value);
        return node;
    }
    const pop = () => {
      length--;
      let node = headNode;
      while (node != null){
        if(node.nextNode.nextNode == null){
          tailNode = node;
          node.nextNode = null;
        }
        node = node.nextNode;
      }
      if (length < 0) length =0;
    }
    const contains = (value) => {
      let node = headNode;
    while (node.value != value){
           node = node.nextNode;
          if(node == null){
            console.log("Does not contain Value", value);
            return false;
          }
        } 
        console.log("Contains Value", value);
        return true;

    }
    const find = (value) => {
      let i = 0;
      let node = headNode;
      while (node.value != value){
        
      i++;
      node = node.nextNode;
      if(node == null){
        console.log("CAN'T find", value )
        return i;
      }
     }
    console.log("Found", value, " at Index: ", i, )
    return i;
    }
    const removeAt = (index) => {
      console.log("remove:", index);
      length--;
      if(index <= 0) {
        headNode = headNode.nextNode;
        return;
      }
      const beforeNode = at(index-1);

      beforeNode.nextNode = beforeNode.nextNode.nextNode;

    }

    function insertAt(value,index){
      length++;
      const newNode = node();
      newNode.value = value;
      let i = 0;
      let currentNode = headNode;
      if(index == 0){
        prepend(value);
        return;
      }
      
      while (i != index-1){
       
        if(currentNode.nextNode == null){
          append(value);
          return;
        }
        currentNode = currentNode.nextNode;
      i++;
      }
   
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode =  newNode;

    }
   
    function toString(){
      let string = headNode.value;       
        let node = headNode.nextNode;
        while (node != null){
          string += '->';
          string +=  node.value;
          node = node.nextNode;
        }
      console.log(string);
    }

    return {append, prepend,size,head,tail,at,pop,contains,find,
        toString, insertAt, removeAt};
  }


  export default linkedList;