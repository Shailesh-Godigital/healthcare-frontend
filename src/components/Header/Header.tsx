import { useTheme } from "@/components/theme-provider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { User2, Phone, Sun, Moon } from "lucide-react";
import { NavigationMenu } from "@/components";

import imgUrl from "/logo.jpg";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col w-full px-2 md:px-10 lg:px-20 py-2 justify-between">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="w-16">
            <img
              src={imgUrl}
              className="object-contain h-full w-full rounded-lg"
              alt="logo"
            />
          </div>
          <div>
            <div className="flex flex-row justify-between items-center space-x-4">
              <a href="/login">
                <div className="flex flex-row items-center space-x-1">
                  <User2 size={20} absoluteStrokeWidth />
                  <p className="text-xs hidden md:block">Login/Signup</p>
                </div>
              </a>

              <a className="hidden md:block">
                <div className="flex flex-row items-center space-x-1">
                  <Phone size={20} absoluteStrokeWidth />
                  <div className="flex flex-col">
                    <div className="text-xs">Customer Support</div>
                    <div className="text-xs">1800-572-0005</div>
                  </div>
                </div>
              </a>

              <div>
                <Switch
                  id="darkmode"
                  checked={theme === "dark"}
                  onCheckedChange={() =>
                    setTheme(theme == "dark" ? "light" : "dark")
                  }
                  className="hidden"
                />
                <Label htmlFor="darkmode" className="cursor-pointer">
                  {theme == "dark" ? <Sun /> : <Moon />}
                </Label>
              </div>

              <div className="md:block lg:hidden xl:hidden 2xl:hidden">
                <div className="space-y-2">
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-t-2 border-gray py-2 justify-evenly">
          <div className="hidden lg:block">
            <NavigationMenu />
          </div>
        </div>
      </div>
    </>
  );
}
