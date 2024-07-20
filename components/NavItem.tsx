import {PRODUCT_CATEGORIES} from "@/components/config";
import {Button} from "@/components/ui/button";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";


type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemeProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({
                     isAnyOpen,
                     category,
                     handleOpen,
                     isOpen}: NavItemeProps) => {
    return (
        <div className='flex'>
            <div className="relative flex items-center">
                <Button
                    className='gap-1.5'
                    onClick={handleOpen}
                    variant={isOpen ? 'secondary' : 'ghost'}
                >
                    {category.label}
                    <ChevronDown
                        className={cn(
                            'h-4 w-4 transition-all text-muted-foreground',
                            {
                                'rotate-180' : isOpen,
                            }
                        )}
                    />

                </Button>
            </div>
        </div>
    )
}


export default NavItem
