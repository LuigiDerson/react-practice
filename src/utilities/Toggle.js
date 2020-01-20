import { useState } from 'react';

export default ({ children }) => {
  const [on, setOn] = useState(false);

  return children({
    on,
    toggle: () => setOn(!on)
  });
};
