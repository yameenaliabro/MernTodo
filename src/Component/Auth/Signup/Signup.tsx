import {Form,Input,Button,message} from "antd"
import {Link} from "react-router-dom"
import "./Signup.css"
import api from "../../api/api"
import {useNavigate} from "react-router-dom"
function Signup(){
    let navigate = useNavigate()
    let onFinish =  (values:string) =>  {
        let response = api.post("/signup",values).then(()=>{
         navigate("/Todolist")
         console.log(response)
         message.success("login sucessfull")
        }).catch((err)=>{
            message.error(err)
        })
    }
return(
    <div className="contain">
         <Form 
         onFinish={onFinish}
          style={{
            maxWidth: 400,
            backgroundColor: "#efefef",
            padding: 20,
            marginBottom: 100,
        }}>
       <Form.Item name="username" 
       rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input placeholder="User name" />
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          login
        </Button>
        <Form.Item>
        <Link to="/login"><Button type="link" block style={{
                color : "blue"
               }}>Already Have?Create Account</Button></Link>
            </Form.Item>  
      </Form.Item>
    </Form>
    </div>
)
}
export default Signup;