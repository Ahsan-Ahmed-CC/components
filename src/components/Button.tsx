import React from 'react';

type propTypes = {
  className?: string;
}

const Button: React.FC<propTypes> = React.memo((props: React.PropsWithChildren<propTypes>) => {
    return (
      <div className={`${props.className}`}>
        Button
      </div>
    );
  },
);

Button.defaultProps = {
  className: '',
};

export default Button;