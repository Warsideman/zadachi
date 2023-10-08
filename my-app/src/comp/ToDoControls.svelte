<div class="todo-controls">
    <input class="todo-controls_input" type="text"> 
    <button class="todo-controls_btn">Add</button>

</div>


<style>
    .todo-controls{
        display: grid;
        grid-template-columns: 70% 30%;
    }

    .todo-controls_input{
        border: none;
        border-radius: 10px 0 0 10px;
        padding: 15px;
    }

    .todo-controls_btn{
        border: none;
        border-radius: 0 10px 10px 0;
        background: rgb(255, 255, 0);
    }
</style>