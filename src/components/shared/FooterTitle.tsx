
const FooterTitle = ({title}:{title:string}) => {
  return (
    <div className='flex flex-col'>
      <h3 className=" text-xl font-semibold pt-3">{title}</h3>
      <p className='flex gap-1 py-6'>
        <span className='w-3 h-[2px] bg-primary rounded-[1px]' />
        <span className='w-8 h-[2px] bg-primary rounded-[1px] opacity-50' />
      </p>
    </div>
  )
}

export default FooterTitle