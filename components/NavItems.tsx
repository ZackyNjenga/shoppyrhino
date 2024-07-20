"use client"

import {useState} from "react";
import {PRODUCT_CATEGORIES} from "@/components/config";
import NavItem from "@/components/NavItem";

const NavItems = () => {

    const [activeIndex, setActiveIndex] = useState<null | number> (null)
    const isAnyOpen = activeIndex !== null

    return <div className='flex gap-4 h-full'>
        {PRODUCT_CATEGORIES.map((category, i) => {
            const handleOpen = () => {
                if(activeIndex === 1) {
                    setActiveIndex(null);
                }
                else {
                    setActiveIndex(i)
                }
            }

            const isOpen = i === activeIndex

            return (
                <NavItem
                    category={category}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    isAnyOpen={isAnyOpen}
                    key={category.value}/>
            )
        })}
    </div>
}

export default NavItems;