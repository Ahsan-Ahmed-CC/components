import React from 'react';

type propTypes = {
  className?: string,
  renderHeading?: (collapseKey: string) => JSX.Element | React.ReactText,
  collapseKey: string,
  ref?: React.Ref<HTMLDivElement>
}

const Collapse: React.FC<propTypes> = React.memo(React.forwardRef<HTMLDivElement, propTypes>((props: React.PropsWithoutRef<React.PropsWithChildren<propTypes>>, ref: propTypes['ref']) => {
  return (
    <div className={`${props.className}`}>
      <div data-toggle="collapse" data-target={`#${props.collapseKey.toLowerCase()}`} aria-expanded="false" aria-controls="collapseExample">
        {props.renderHeading ? props.renderHeading(props.collapseKey) : "Collapse"}
      </div>
      <div className="collapse" id={props.collapseKey.toLowerCase()}>
        {props.children}
      </div>
    </div>
  );
}
));

Collapse.defaultProps = {
  className: '',
};

export default Collapse;