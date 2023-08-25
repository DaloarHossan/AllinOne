import Link from "next/link"

const Navbar = () => {
  return (
	<div className="flex justify-between px-4 py-6 items-center">
		<div className="text-2xl">
			<Link href="/">Go Rent</Link>
		</div>
		<div >
			<ul className="flex gap-8 text-lg">
				<li className="hover:text-orange-500">
					<Link href="/" >Home</Link>
				</li>
				<li className="hover:text-orange-500">
					<Link href="/about">About</Link>
				</li>
				<li className="hover:text-orange-500">
					<Link href="/models">Vehicle Models</Link>
				</li>
				<li className="hover:text-orange-500">
					<Link href="/testimonial">Testimonial</Link>
				</li>
				<li className="hover:text-orange-500">
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</div>
		<div>
			<ul className="flex gap-4 items-center font-medium">
				<li>
					<Link href="/signin">Sign In</Link>
				</li>
				<li className="p-4 bg-orange-500 text-xl">
					<Link href="/register">Register</Link>
				</li>
			</ul>
		</div>
	</div>
  )
}

export default Navbar