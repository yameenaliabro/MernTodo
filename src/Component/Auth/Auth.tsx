import { Form, Input, Button } from "antd"
import { Link } from "react-router-dom";
import "./Auth.css"
function Auth() {
    let signin = (values: any) => {
        console.log(values)
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
            name="username"
            rules={[{ required: true, message: 'Please Enter a Username!' }]}
          >
            <Input placeholder="Enter a User Name" />
          </Form.Item>
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
            <Input placeholder="enter a product rating "  type="password"/>
          </Form.Item>
                <Form.Item>
                    <Button type="primary" block htmlType="submit">Sign Up</Button>
                </Form.Item>
                <Form.Item>
                    <Link to="/signin"><Button type="link" block style={{
                        color: "blue"
                    }}>Already ?Account Create in Sign in</Button></Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Auth;