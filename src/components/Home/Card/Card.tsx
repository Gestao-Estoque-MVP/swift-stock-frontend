
interface ICardProps {
    type?: "advantages" | "relate";
    children?: React.ReactNode
    data: {
        id: number;
        title: string;
        description: string;
    }
}

const Card = ({data, type, children}: ICardProps) => {
    return(
        <li data-aos="fade-up" data-aos-delay={`${data.id * 150}`} data-aos-offset="100" key={data.id} className='flex flex-col flex-1 gap-6 bg-white-primary rounded-lg	py-4 px-6 min-w-card max-w-md md:max-w-xs md:flex-none'>
            <div className='flex gap-3 items-center'>
            <div className='rounded-full border-grey-100 border p-1'>
                {
                    children
                }
            </div>
            <h2 className='text-base text-brand-200 font-extrabold'>{data.title}</h2>
            </div>
            <p className='text-grey-200 text-xs font-medium'>{data.description}</p>
        </li>
    )
}

export default Card