import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {ArrowDownToLine, CheckCircle, Leaf} from "lucide-react";

const perks = [
    {
        name: 'Instant Delivery',
        Icon: ArrowDownToLine,
        description: 'Get your assets delivered to your email an download it in seconds',
    },
    {
        name: 'Guaranteed Quality',
        Icon: CheckCircle,
        description:
        'Every assist on our platform is verified by our team to ensure the highest standards possible',
    },
    {
        name: 'And they are green',
        Icon: Leaf,
        description: 'We are a zero emissions Foe every $100 we make 3 go to a green cause '
    }
]

export default function Home() {
    return (
        <>

            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-7xl">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className="text-blue-800 font-bold uppercase">
                the
                </span> Marketplace for high quality{' '}
                        <span className="text-blue-800"> digital assets</span>.
                    </h1>
                    <p className="mt-6 text-xl max-w-prose text-gray-500 font-semibold ">
                        Welcome to ShoppyRhino. Every asset in our
                        catalogue is verified by a team of highly
                        qualified experts
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href='/products' className={buttonVariants()}>
                            Browse Trending
                        </Link>
                        <Button variant='ghost'>
                            Quality guaranteed &rarr;
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>
            <section className='border-t border-gray-200 bg-gray-50'>
                <MaxWidthWrapper className='py-20'>
                    <div className=' grid grid-cols-1 lg:gap-x-8 lg:gap-y-0 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3'>

                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
