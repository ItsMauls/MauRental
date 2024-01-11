export const Button = ({ title, color } : {title : string, color : string}) => {
    return (
        <div className="mx-auto flex">
            <button className={`md:w-5/6 py-2 my-4 text-white mx-auto bg-${color}-500 rounded-lg`} >
                {title}
            </button>
        </div>
    )
}