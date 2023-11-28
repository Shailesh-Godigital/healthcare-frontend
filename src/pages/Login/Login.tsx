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
import { FormEvent, useState } from "react";

import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);

  const loginUtility = async (route: string, bodydata: Object) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/v1/auth/${route}`,
          bodydata
        );
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    setButtonDisabled(true);
    try {
      await toast.promise(loginUtility("login", { email, password }), {
        loading: "Please wait...",
        success: <b>success</b>,
        error: <b>invalid credentials</b>,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.log(error);
      setButtonDisabled(false);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-500 dark:bg-gray-700 h-screen px-2">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login with your email and password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleSubmit} disabled={isButtonDisabled}>
              Login
            </Button>
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
    </>
  );
}
