import { Box } from '@mantine/core';
import cn from 'classnames';
import { useDrag } from 'react-dnd';

export interface PolyCardProps {
  className?: string;
  children: React.ReactNode;
}

export const templateStyles = '';

export const PolyCard: React.FC<PolyCardProps> = ({ className, children }) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: typeof PolyCard,
      item: {},
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <div className={cn(className, templateStyles, '')}>
      <Box
        ref={dragRef}
        style={{ opacity }}
        sx={(theme) => ({
          display: 'block',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.blue[4]
              : theme.colors.blue[7],
          textAlign: 'center',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: 'pointer',
          border: '3px solid black',
          transform: 'translate3d(0, 0, 0)',

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        {children}
      </Box>
    </div>
  );
};
