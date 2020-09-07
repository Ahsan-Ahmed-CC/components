import React from 'react';

interface propTypes {
  className?: string;
}

const Button: React.SFC<propTypes> = React.memo((props: React.PropsWithChildren<propTypes>) => {
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