import Image from "next/image";


const Cover = ({ children, background }) => {
	
	return (
		<div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
			<Image alt="Cover" src={background} fill className="mix-blend-soft-light object-cover"/>
			{children}
		</div>
	)
}

export default Cover;