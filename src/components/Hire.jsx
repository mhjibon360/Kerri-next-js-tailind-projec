import Link from 'next/link'
import React from 'react'

const Hire = () => {
    return (
        <section >
            <div className="container mx-auto text-center px-4">
                <h2 className=' text-2xl md:text-3xl font-semibold mb-8'>I Am Available For Freelancer.</h2>
                <Link href={""} className=' bg-primary rounded-md text-lg capitalize  text-white px-6 py-3 font-mdedium'>hire me</Link>
            </div>
        </section>
    )
}

export default Hire