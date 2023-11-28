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
  const [firstName, setFirstname] = useState<string>("");
  const [lastName, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>();

  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [isDialogBox, setDialogBox] = useState<boolean>(false);

  const OTPUtility = async (route: string, bodydata: Object) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/v1/${route}`,
          bodydata
        );
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
  const handleSendOTP = async (e: FormEvent) => {
    e.preventDefault();

    //validation
    if (!firstName || !lastName || !password || !email) {
      toast.error("Please fill all the fields");
      return;
    }
    if (!validateEmail(email)) {
      toast("Invalid Email format", {
        icon: "❗",
      });
      return;
    }
    if (!validatePassword(password)) {
      toast(
        "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one digit and one special character",
        {
          duration: 4000,
          icon: "❗",
        }
      );
      return;
    }

    //actual logic
    setButtonDisabled(true);
    try {
      await toast.promise(OTPUtility("send-otp", { email }), {
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
  const handleVerifyOTP = async (e: FormEvent) => {
    e.preventDefault();
    setButtonDisabled(true);
    try {
      await toast.promise(
        OTPUtility("verify-otp", { email, otp, firstName, lastName, password }),
        {
          loading: "Verifying OTP",
          success: <b>OTP Verified</b>,
          error: <b>OTP Invalid</b>,
        }
      );
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setButtonDisabled(false);
    }
  };
  return (
    <>
      <div>
        <Toaster />
      </div>

      <div className="flex flex-col justify-center items-center bg-green-500 dark:bg-gray-700 h-screen px-2">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Register with your email and password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-row gap-10">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your First Name"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstName}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your Last Name"
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastName}
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
            <Button onClick={handleSendOTP} disabled={isButtonDisabled}>
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
          <Input
            value={otp}
            className="flex justify-center items-center"
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button onClick={handleVerifyOTP} disabled={isButtonDisabled}>
            Verify
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

// utils
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};
const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};
