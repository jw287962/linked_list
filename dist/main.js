/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");



const linkedList = () => {
  let headNode = null;
  let tailNode = null;
  let currentNode = null;
  let length = 0;
    const append = (value) => {
      length++;
      const nodeData = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
const nodeData = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
      const newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();
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


  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkedList);

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node = () => {
    const value = null;
     const nextNode = null;
      return {value,nextNode};
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");


const listData = (0,_linkedList__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7OztBQUcxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBSTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixpREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7O0FBR0EsRUFBRSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ3BLM0I7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7VUNQbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsaUJBQWlCLHVEQUFVOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2VkX2xpc3QvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9saW5rZWRfbGlzdC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2xpbmtlZF9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpbmtlZF9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saW5rZWRfbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpbmtlZF9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlua2VkX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGUgZnJvbSAnLi9ub2RlJztcblxuXG5jb25zdCBsaW5rZWRMaXN0ID0gKCkgPT4ge1xuICBsZXQgaGVhZE5vZGUgPSBudWxsO1xuICBsZXQgdGFpbE5vZGUgPSBudWxsO1xuICBsZXQgY3VycmVudE5vZGUgPSBudWxsO1xuICBsZXQgbGVuZ3RoID0gMDtcbiAgICBjb25zdCBhcHBlbmQgPSAodmFsdWUpID0+IHtcbiAgICAgIGxlbmd0aCsrO1xuICAgICAgY29uc3Qgbm9kZURhdGEgPSBub2RlKCk7XG4gICAgICBub2RlRGF0YS52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICBoZWFkTm9kZSA9IG5vZGVEYXRhO1xuICAgICAgICBjdXJyZW50Tm9kZSA9IG5vZGVEYXRhO1xuICAgICAgICB0YWlsTm9kZSA9IG5vZGVEYXRhO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGhlYWROb2RlLm5leHROb2RlID09IG51bGwpe1xuICAgICAgICAgIGhlYWROb2RlLm5leHROb2RlID0gdGFpbE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE5vZGUgPSB0YWlsTm9kZTtcbiAgICAgICAgY3VycmVudE5vZGUubmV4dE5vZGUgPSBub2RlRGF0YTtcbiAgICAgICAgXG4gICAgICAgIHRhaWxOb2RlID0gbm9kZURhdGE7XG4gICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIGNvbnN0IHByZXBlbmQgPSAodmFsdWUpID0+e1xuICAgICAgbGVuZ3RoKytcbmNvbnN0IG5vZGVEYXRhID0gbm9kZSgpO1xuICAgICAgbm9kZURhdGEudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgaWYoaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICBoZWFkTm9kZSA9IG5vZGVEYXRhO1xuICAgICAgICBjdXJyZW50Tm9kZSA9IG5vZGVEYXRhO1xuICAgICAgICB0YWlsTm9kZSA9IG5vZGVEYXRhO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGN1cnJlbnROb2RlID0gaGVhZE5vZGU7XG4gICAgICAgIGhlYWROb2RlID0gbm9kZURhdGE7XG4gICAgICAgIGhlYWROb2RlLm5leHROb2RlID0gY3VycmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSAoKSA9PntcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGhlYWQgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhlYWRcIixoZWFkTm9kZS52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHRhaWwgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRhaWxcIix0YWlsTm9kZS52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGF0ID0gKGluZGV4KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgICAgaWYoaW5kZXggPj0gc2l6ZSgpKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbmRleDpcIiwgaW5kZXgsXCIgPVwiLFwiTm8gVmFsdWUgRm91bmRcIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGkgIT0gaW5kZXgpe1xuICAgICAgaSsrO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcIkluZGV4OlwiLCBpbmRleCxcIiA9XCIsIG5vZGUudmFsdWUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgY29uc3QgcG9wID0gKCkgPT4ge1xuICAgICAgbGVuZ3RoLS07XG4gICAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCl7XG4gICAgICAgIGlmKG5vZGUubmV4dE5vZGUubmV4dE5vZGUgPT0gbnVsbCl7XG4gICAgICAgICAgdGFpbE5vZGUgPSBub2RlO1xuICAgICAgICAgIG5vZGUubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGlmIChsZW5ndGggPCAwKSBsZW5ndGggPTA7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRhaW5zID0gKHZhbHVlKSA9PiB7XG4gICAgICBsZXQgbm9kZSA9IGhlYWROb2RlO1xuICAgIHdoaWxlIChub2RlLnZhbHVlICE9IHZhbHVlKXtcbiAgICAgICAgXG4gICAgICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgICAgIGlmKG5vZGUgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvZXMgbm90IGNvbnRhaW4gVmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY29uc29sZS5sb2coXCJDb250YWlucyBWYWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfVxuICAgIGNvbnN0IGZpbmQgPSAodmFsdWUpID0+IHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGxldCBub2RlID0gaGVhZE5vZGU7XG4gICAgICB3aGlsZSAobm9kZS52YWx1ZSAhPSB2YWx1ZSl7XG4gICAgICAgIFxuICAgICAgaSsrO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICBpZihub2RlID09IG51bGwpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNBTidUIGZpbmRcIiwgdmFsdWUgKVxuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICAgfVxuICAgIGNvbnNvbGUubG9nKFwiRm91bmRcIiwgdmFsdWUsIFwiIGF0IEluZGV4OiBcIiwgaSwgKVxuICAgIHJldHVybiBpO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVBdCA9IChpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyZW1vdmU6XCIsIGluZGV4KTtcbiAgICAgIGxlbmd0aC0tO1xuICAgICAgaWYoaW5kZXggPD0gMCkge1xuICAgICAgICBoZWFkTm9kZSA9IGhlYWROb2RlLm5leHROb2RlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBiZWZvcmVOb2RlID0gYXQoaW5kZXgtMSk7XG5cbiAgICAgIGJlZm9yZU5vZGUubmV4dE5vZGUgPSBiZWZvcmVOb2RlLm5leHROb2RlLm5leHROb2RlO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0QXQodmFsdWUsaW5kZXgpe1xuICAgICAgbGVuZ3RoKys7XG4gICAgICBjb25zdCBuZXdOb2RlID0gbm9kZSgpO1xuICAgICAgbmV3Tm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZE5vZGU7XG4gICAgICBpZihpbmRleCA9PSAwKXtcbiAgICAgICAgcHJlcGVuZCh2YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgd2hpbGUgKGkgIT0gaW5kZXgtMSl7XG4gICAgICAgXG4gICAgICAgIGlmKGN1cnJlbnROb2RlLm5leHROb2RlID09IG51bGwpe1xuICAgICAgICAgIGFwcGVuZCh2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICBpKys7XG4gICAgICB9XG4gICBcbiAgICAgIG5ld05vZGUubmV4dE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgIGN1cnJlbnROb2RlLm5leHROb2RlID0gIG5ld05vZGU7XG5cbiAgICB9XG4gICBcbiAgICBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgICAgbGV0IHN0cmluZyA9IGhlYWROb2RlLnZhbHVlOyAgICAgICBcbiAgICAgICAgbGV0IG5vZGUgPSBoZWFkTm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCl7XG4gICAgICAgICAgc3RyaW5nICs9ICctPic7XG4gICAgICAgICAgc3RyaW5nICs9ICBub2RlLnZhbHVlO1xuICAgICAgICAgIG5vZGUgPSBub2RlLm5leHROb2RlO1xuICAgICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhzdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7YXBwZW5kLCBwcmVwZW5kLHNpemUsaGVhZCx0YWlsLGF0LHBvcCxjb250YWlucyxmaW5kLFxuICAgICAgICB0b1N0cmluZywgaW5zZXJ0QXQsIHJlbW92ZUF0fTtcbiAgfVxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgbGlua2VkTGlzdDsiLCJjb25zdCBub2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gbnVsbDtcbiAgICAgY29uc3QgbmV4dE5vZGUgPSBudWxsO1xuICAgICAgcmV0dXJuIHt2YWx1ZSxuZXh0Tm9kZX07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IG5vZGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbGlua2VkTGlzdCBmcm9tICcuL2xpbmtlZExpc3QnO1xuXG5jb25zdCBsaXN0RGF0YSA9IGxpbmtlZExpc3QoKTtcblxubGlzdERhdGEuYXBwZW5kKDEyKTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7XG5saXN0RGF0YS5hcHBlbmQoMTIyKTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7XG5saXN0RGF0YS5hcHBlbmQoNTQpO1xubGlzdERhdGEudG9TdHJpbmcoKTtcbmxpc3REYXRhLmFwcGVuZCgxKTtcbmxpc3REYXRhLmFwcGVuZCgyMSk7XG5saXN0RGF0YS5hcHBlbmQoMik7XG5saXN0RGF0YS5hcHBlbmQoMjEpO1xubGlzdERhdGEuYXBwZW5kKDk5KTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7XG5cbmxpc3REYXRhLnByZXBlbmQoOSk7XG5saXN0RGF0YS50b1N0cmluZygpO1xubGlzdERhdGEucHJlcGVuZCg5MCk7XG5saXN0RGF0YS50b1N0cmluZygpO1xubGlzdERhdGEucHJlcGVuZCg4OSk7XG5saXN0RGF0YS50b1N0cmluZygpO1xubGlzdERhdGEuc2l6ZSgpO1xuXG5saXN0RGF0YS5oZWFkKCk7XG5saXN0RGF0YS50YWlsKCk7XG5cbmxpc3REYXRhLmF0KDApO1xubGlzdERhdGEuYXQoOSk7XG5saXN0RGF0YS5hdCgxMCk7XG5saXN0RGF0YS5hdCgxMSk7XG5saXN0RGF0YS5hdCgxMik7XG5cblxubGlzdERhdGEuY29udGFpbnMoODkpO1xubGlzdERhdGEuY29udGFpbnMoOTApO1xubGlzdERhdGEuY29udGFpbnMoMjEpO1xubGlzdERhdGEuY29udGFpbnMoOTkpO1xubGlzdERhdGEuY29udGFpbnMoMTUpO1xuXG5cbmxpc3REYXRhLmZpbmQoMCk7XG5saXN0RGF0YS5maW5kKDQpO1xubGlzdERhdGEuZmluZCgyKTtcbmxpc3REYXRhLmZpbmQoOCk7XG5saXN0RGF0YS5maW5kKDkpO1xubGlzdERhdGEuZmluZCgxKTtcblxuXG5saXN0RGF0YS5wb3AoKTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7XG5saXN0RGF0YS5wb3AoKTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7XG5cblxubGlzdERhdGEuYXBwZW5kKDIxKTtcbmxpc3REYXRhLmFwcGVuZCg5OSk7XG5saXN0RGF0YS50b1N0cmluZygpO1xuXG5jb25zb2xlLmxvZygnSU5TRVJUIEFUJylcbmxpc3REYXRhLmluc2VydEF0KDk5OSwwKTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7XG5saXN0RGF0YS5pbnNlcnRBdCgxMDEsMSk7XG5saXN0RGF0YS50b1N0cmluZygpO1xubGlzdERhdGEuaW5zZXJ0QXQoMTAyLDExKTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7XG5cblxuXG5saXN0RGF0YS5yZW1vdmVBdCgyKTtcbmxpc3REYXRhLnRvU3RyaW5nKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9