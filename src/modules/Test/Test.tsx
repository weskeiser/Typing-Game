import { HTMLAttributes } from 'react';

interface TestButtonProps extends HTMLAttributes<HTMLButtonElement> {}

// export const TestButton = ({ className, ...rest }: TestButtonProps) => (
//   <button {...rest} className={`${className} classNameExample`} />
// );

const TestButton = ({ className, ...rest }) => (
  <button {...rest} className={`${className} classNameExample`} />
);

export default TestButton;

/*

Passing random props to TestButton:
<TestButton randomProp={true} otherProp={false} className="myClassName" />

   */
