import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menus } from '@/lib/helpers'

import { Menu } from 'lucide-react'

export function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="hamburger" size="icon" className="md:hidden">
          <Menu color="white" size={36} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] space-y-10">
        <div>
          <img src="logo.svg" alt="" className="max-sm:w-60" />
        </div>
        <div>
          {Menus &&
            Menus.map((item, index) => (
              <div
                key={item.id}
                className="text-white text-base hover:text-gray-300 duration-100 transition-all ease-in-out cursor-pointer space-y-4 my-4 p-2 rounded-sm bg-white bg-opacity-10 w-full"
              >
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
