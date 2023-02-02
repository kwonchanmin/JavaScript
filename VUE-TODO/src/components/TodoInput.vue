<template>
    <div>
        <input type="text"
                placeholder="할 일을 입력하시오"
                v-model="newTodoItem" 
                @keyup.enter="addTodo" >
        <span class="addContainer" @click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
         </span>
    </div>
</template>

<script>
export default {
   data() {
    return {
        newTodoItem : ''
    }
   },
   methods :{
    addTodo(){
        // 현재 입력한 할 일 목록을 저장해야된다.
        // 지금 서버 프로그램에 연결을 할 수 없다.
        // 서버쪽 데이터베이스에 해당 정보를 저장할 수 없다.
        // 그래서 browser가 가지고 있는 저장 장소를 이용할 꺼다.
        // browser 내부에 저장장소가 크게 2가지 있다.
        // Storage와 IndexedDB가 있다.
        // 그 중 Storage를 사용해 보자.
        // 다시 Storage는 LocalStorage와 SesseionStorage로 나뉘어진다.
        // 우리는 그 중 가장 일반적인 LocalStorage를 이용할 거다.
        // 우리가 JavaScript를 이용해서 이 저장공간에 내가 원하는 데이터를 저장할 수 있다.
        // 데이터는 Map 형태로 저장이 가능하다.(key와 value의 쌍으로)
        // 여러 프로그램에 의해 데이터가 중복되는 것을 방직하기 위해 각 테이터는 domain으로 구분되어서 저장됩니다.
       if(this.newTodoItem !== "") {
        localStorage.setItem(this.newTodoItem,this.newTodoItem);
        this.newTodoItem = "";
       }
       location.reload();
    }
   }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
