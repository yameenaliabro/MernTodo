import { Form, Input, Button,message} from "antd"
import { Link } from "react-router-dom";
import "./Login.css"
import api from "../../api/api";
import {useNavigate} from "react-router-dom"
function Login() {
    let navigate = useNavigate()
    let signin =  async (values:string) => {
        console.log(values)
        let response = await  api.post("/login/",values).then(()=>{
            navigate("/Todolist")
            console.log(response)
           }).catch((err)=>{
               message.error(err)
               alert(err)
           })
    }
    return (
        <div className="container">
            <Form
                onFinish={signin}
                style={{
                    maxWidth: 400,
                    backgroundColor: "#efefef",
                    padding: 20,
                    marginBottom: 100,
                }}
            >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please Enter a Email!' }]}
          >
            <Input placeholder="Enter a Email"  />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input a  Password' }]}
          >
            <Input placeholder="enter a Password "  type="password"/>
          </Form.Item>
                <Form.Item>
                    <Button type="primary" block htmlType="submit">Login</Button>
                </Form.Item>
                <Form.Item>
                    <Link to="/"><Button type="link" block style={{
                        color: "blue"
                    }}>Create Account</Button></Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;