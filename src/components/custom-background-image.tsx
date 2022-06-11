import cn from 'classnames';
import Image from 'next/image';

export interface CustomBackgroundImageProps {
  className?: string;
  children?: React.ReactNode;
  imageLink: string;
}

export const CustomBackgroundImage: React.FC<CustomBackgroundImageProps> = ({
  className,
  children,
  imageLink,
}) => {
  return (
    <Image
      className={cn(className)}
      layout="responsive"
      width={100}
      height={100}
      src={imageLink}
    >
      {children}
    </Image>
  );
};
