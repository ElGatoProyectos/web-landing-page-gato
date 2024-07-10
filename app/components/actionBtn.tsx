'use client';
interface Props {
  name: string
  onAction?: () => void
  type?: string
}
const actionBtn:React.FC<Props> = (props) => {
  return (
    <button onClick={props.onAction} className='bg-[#0BC2E1] text-white font-bold px-6 py-3 rounded-full hover:bg-[#87D5E2] transition-all duration-300'>
      {props.name}
    </button>
  )
}

export default actionBtn
