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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import axios from "axios";

export default function Register() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [isDialogBox, setDialogBox] = useState<boolean>(false);

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("hillo");
  };
  const sendOTP = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/v1/send-otp`
        );
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
  const handleOTP = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstname || !lastname || !password || !email) {
      toast.error("Please fill the required fields");
      return;
    }

    setButtonDisabled(true);
    try {
      await toast.promise(sendOTP(), {
        loading: "Sending OTP",
        success: <b>OTP sent!</b>,
        error: <b>OTP not sent</b>,
      });
      setDialogBox(true);
    } catch (error) {
      console.error(error);
    } finally {
      setButtonDisabled(false);
    }
  };
  const handleVerifyOTP = () => {
    setDialogBox(false);
  };
  return (
    <>
      <div>
        <Toaster />
      </div>

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
                <div className="flex flex-row gap-10">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                      id="firstname"
                      placeholder="Enter your First Name"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                      id="lastname"
                      placeholder="Enter your Last Name"
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastname}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
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
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button onClick={handleOTP} disabled={isButtonDisabled}>
              get OTP
            </Button>
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

      <Dialog open={isDialogBox}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter OTP</DialogTitle>
            <DialogDescription>Please enter OTP here</DialogDescription>
          </DialogHeader>
          <Input className="flex justify-center items-center" />
          <Button onClick={handleVerifyOTP}>Verify</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
