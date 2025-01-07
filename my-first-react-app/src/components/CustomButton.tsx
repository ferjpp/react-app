interface ButtonProps {
    text: string;
    bgColor: string;
}

export default function CustomButton({ text, bgColor }: ButtonProps){
    return(
        <button className={`text-white font-bold bg-${bgColor} px-6 py-2 rounded-xl md:ml-8 hover:bg-cyan-400 hover:scale-110 duration-500`}>{text}</button>
    )
}