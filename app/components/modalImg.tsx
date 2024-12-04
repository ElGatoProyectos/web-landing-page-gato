import { Modal } from "@mui/material";
import Image from "next/image";

type Timg = {
  url: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalImg: React.FC<Timg> = ({
  url,
  alt,
  title,
  width,
  height,
  open,
  setOpen,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className="flex justify-center items-center outline-none border-none"
    >
      <Image
        title={title}
        className=" aspect-auto w-auto h-auto max-h-[80%] max-w-[80%] "
        src={url}
        alt={alt}
        width={width}
        height={height}
      />
    </Modal>
  );
};

export default ModalImg;
