import { useState, FormEvent } from "react";
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

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("hi");
  };
  return (
    <div className="flex flex-col justify-center items-center bg-green-500 h-screen px-2">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Register with your email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlesubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">User Name</Label>
                <Input
                  id="username"
                  placeholder="Enter your Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlesubmit}>Register</Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center mt-4">
        <p>Already have an account?</p>
        <Button variant="link">
          <a href="/Login">
            <p className="text-xl">Login</p>
          </a>
        </Button>
      </div>
    </div>
  );
}
