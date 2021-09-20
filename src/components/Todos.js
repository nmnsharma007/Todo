import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import { useEffect,useState } from "react";
import TodoItem from "./TodoItem";
import { db } from "../firebase";
import "./TodoItem.css";
import { Button } from "@material-ui/core";

const Todos = () => {

    const [todos, settodos] = useState([]);

    useEffect(async () => {
        const todosCol = collection(db,"todos");
        const unsubscribe = await onSnapshot(todosCol, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id:doc.id});
            });
            settodos(docs);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const addTodo = async () => {
        const docRef = await addDoc(collection(db,"todos"), {
            completed: false,
            todo: ""   
        });
    };

    return (
        <div>
            {todos.map((todoItem) => {
                return <TodoItem completed={todoItem.completed} todo={todoItem.todo} id={todoItem.id}/>
            })}
            <div className="add-button">
                <Button onClick={addTodo}>Add Todo</Button>
            </div>
        </div>
    )
}

export default Todos;