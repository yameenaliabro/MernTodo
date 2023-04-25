import { Input,InputRef,Button,Divider,List,Checkbox,Form} from "antd";
import {  useState } from "react";
interface Todointerface {
    id:string;
    text:string;
}
function Todo(){

    const[data,setdata] = useState<Todointerface[]>([])
    let addtodohandler = (value:any) =>{
        console.log(value)
        setdata([...data,value])
    }
    let deletetodo = (todoId:string) =>{
        setdata(data.filter((todo) => todo.id !== todoId));
    }
return(
    <div>
        <Form onFinish={addtodohandler}>
        <Divider/>
        <Input.Group compact>
    <Input  type="text"   style={{
        width : "calc(100% - 200px)"
    }}/>
    <Button type="primary" htmlType="submit">AddTodo</Button>
    </Input.Group>
    <List 
    size="small"
    header={<div>Todo Checklist</div>}
    bordered
    dataSource={data}
    renderItem={(todo)=>(
        <List.Item>
            <Checkbox >{todo.text}</Checkbox>
            <Button type="default" onClick={() => deletetodo(todo.id)}>DelteTodo</Button>
            <Button type="primary">Edit</Button>
        </List.Item>
    )}
    />
    </Form>
    </div>
)
}
export default Todo;