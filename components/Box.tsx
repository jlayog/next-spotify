import { twMerge } from "tailwind-merge";

// Define BoxProps
// Create Functional Component that accepts single prop (props)
// use twMerge function to merge Tailwind CSS class names with custom class names provided in props
interface BoxProps {
    children: React.ReactNode;
    className: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
  return (
    <div
        className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
            `,
            className)}
    >
        {children}
    </div>
  )
}

export default Box