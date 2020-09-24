import React from 'react';

type propTypes = {
  className?: string;
  renderHeading?: (props: propTypes) => JSX.Element | React.ReactText;
  collapseKey: string
}

const Collapse: React.FC<propTypes> = React.memo((props: React.PropsWithChildren<propTypes>) => {
  return (
    <div className={`${props.className}`}>
      <div data-toggle="collapse" data-target={`#${props.collapseKey.toLowerCase()}`} aria-expanded="false" aria-controls="collapseExample">
        {props.renderHeading ? props.renderHeading(props) : "Collapse"}
      </div>
      <div className="collapse" id={props.collapseKey.toLowerCase()}>
        {props.children}
      </div>
    </div>
  );
},
);

Collapse.defaultProps = {
  className: '',
};

export default Collapse;