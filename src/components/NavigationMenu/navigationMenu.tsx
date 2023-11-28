import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Headerdata } from "@/data";

export default function navigationMenu() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {Headerdata.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>
                <a href={item.href}>{item.title}</a>
              </NavigationMenuTrigger>
              {item.content != "" && (
                <>
                  <NavigationMenuContent>
                    <NavigationMenuLink>hi there</NavigationMenuLink>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
