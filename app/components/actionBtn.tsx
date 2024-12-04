'use client';
interface Props {
  name: string
  onAction?: () => void
  type?: string
}
const ActionBtn:React.FC<Props> = (props) => {
  return (
    <button onClick={props.onAction} className='bg-[#4608AD] text-white font-bold px-6 py-3 rounded-full hover:bg-[#3A0C87] transition-all duration-300'>
      {props.name}
    </button>
  )
}

export default ActionBtn
