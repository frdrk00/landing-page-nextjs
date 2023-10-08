import { useState } from 'react'
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en')

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="drop" size="drop">
          <p className="uppercase">
            {language === 'en' ? (
              <div className="flex flex-row items-center justify-center">
                <img
                  src="/img/en.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
                <span className="uppercase">en</span>
                <ChevronDown className="ml-2" size={16} />
              </div>
            ) : (
              <div className="flex flex-row items-center justify-center">
                <img
                  src="/img/sk.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
                <span className="uppercase">sk</span>
                <ChevronDown className="ml-2" size={16} />
              </div>
            )}
          </p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30 bg-transparent border-none ">
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage} >
          <DropdownMenuRadioItem value="en" className='cursor-pointer text-white focus:bg-[#394F68] focus:border'>
              <img
                src="/img/en.png"
                alt=""
                className="h-8 w-8 object-contain"
              />
              <span className="uppercase text-white font-semibold space-x-2">en</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sk" className='cursor-pointer text-white focus:bg-[#394F68] focus:border'>
          <img
                src="/img/sk.png"
                alt=""
                className="h-8 w-8 object-contain"
              />
              <span className="uppercase text-white font-semibold space-x-2">sk</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
