import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { User2, Phone, Home } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col w-full h-36 px-2 md:px-10 lg:px-20 py-2 justify-between">
      <div className="flex flex-row justify-between items-center">
        <div>left logo</div>
        <div>middle LOGO</div>
        <div>
          <div className="flex flex-row justify-between items-center space-x-4">
            <a href="/login">
              <div className="flex flex-row items-center space-x-1">
                <User2 size={20} absoluteStrokeWidth />
                <p className="text-xs">Login/Signup</p>
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
          </div>
        </div>
      </div>

      <div className="flex border-t-2 border-gray py-2 justify-between">
        <Home size={16} />
      </div>
    </div>
  );
}
