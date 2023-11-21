import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-500 h-screen px-2">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login with your email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="email" placeholder="Enter your Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input id="password" placeholder="Enter your Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Login</Button>
          <Button variant="outline">Forget Password</Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center mt-4">
        <p>Don't have an account?</p>
        <Button variant="link">
          <a href="/register">
            <p className="text-xl">Register</p>
          </a>
        </Button>
      </div>
    </div>
  );
}
